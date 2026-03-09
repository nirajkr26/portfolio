import { useEffect, useState } from 'react';

export default function VisitCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        // Use CounterAPI — free, no signup, increments on each call
        fetch('https://api.counterapi.dev/v1/nirajkr26/visits/up', {
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.count != null) {
                    setCount(data.count);
                }
            })
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    console.warn('Visit counter unavailable:', err);
                }
            });

        return () => controller.abort();
    }, []);

    if (count === null) {
        return <span>Portfolio Visits</span>;
    }

    return (
        <span>
            <span className="text-green-400 font-bold tabular-nums">{count.toLocaleString()}</span> portfolio visits
        </span>
    );
}
