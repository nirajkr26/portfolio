import { useEffect, useState } from 'react';
import { ActivityCalendar, type ThemeInput } from 'react-activity-calendar';

interface LeetCodeHeatmapProps {
    username: string;
}

const theme: ThemeInput = {
    dark: ['#161b22', '#1b7c12', '#35c20c', '#0cea26', '#16f930'],
};

type Activity = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

function transformData(submissionCalendar: Record<string, number>): Activity[] {
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const entries: Record<string, number> = {};
    for (const [epoch, count] of Object.entries(submissionCalendar)) {
        const date = new Date(Number(epoch) * 1000);
        const key = date.toISOString().split('T')[0];
        entries[key] = (entries[key] || 0) + count;
    }

    const result: Activity[] = [];
    const cursor = new Date(oneYearAgo);
    while (cursor <= today) {
        const key = cursor.toISOString().split('T')[0];
        const count = entries[key] || 0;
        result.push({
            date: key,
            count,
            level: count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 10 ? 3 : 4,
        });
        cursor.setDate(cursor.getDate() + 1);
    }

    return result;
}

async function fetchLeetCodeData(username: string, signal: AbortSignal): Promise<Activity[]> {
    try {
        const res = await fetch('/api/leetcode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                operationName: 'userProfileCalendar',
                query: 'query userProfileCalendar($username: String!) { matchedUser(username: $username) { userCalendar { submissionCalendar } } }',
                variables: {
                    username: username,
                },
            }),
            signal,
        });

        if (!res.ok) throw new Error(`LeetCode API HTTP ${res.status}`);

        const json = await res.json();
        const submissionCalendar = json.data?.matchedUser?.userCalendar?.submissionCalendar;

        if (!submissionCalendar) {
            throw new Error('Invalid or missing data from LeetCode API');
        }

        const calendar =
            typeof submissionCalendar === 'string'
                ? JSON.parse(submissionCalendar)
                : submissionCalendar;

        return transformData(calendar);
    } catch (err) {
        if ((err as Error).name === 'AbortError') throw err;
        throw err;
    }
}

export default function LeetCodeHeatmap({ username }: LeetCodeHeatmapProps) {
    const [data, setData] = useState<Activity[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        setError(null);

        fetchLeetCodeData(username, controller.signal)
            .then(setData)
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    setError('Unable to load LeetCode data');
                    console.error('LeetCode API error:', err);
                }
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [username]);

    if (loading) {
        return (
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 animate-pulse">
                <div className="h-4 w-40 bg-gray-700 rounded mb-4"></div>
                <div className="h-[140px] bg-gray-800/50 rounded-xl"></div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 text-center text-gray-500 text-sm">
                {error || 'No data available'}
            </div>
        );
    }

    return (
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300">
            <div className="overflow-x-auto">
                <ActivityCalendar
                    data={data}
                    theme={theme}
                    colorScheme="dark"
                    blockSize={13}
                    blockMargin={4}
                    blockRadius={3}
                    fontSize={12}
                    showWeekdayLabels
                    labels={{
                        totalCount: '{{count}} submissions in the last year',
                    }}
                />
            </div>
        </div>
    );
}
