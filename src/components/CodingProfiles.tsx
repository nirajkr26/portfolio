import { GitHubCalendar } from 'react-github-calendar'
import LeetCodeHeatmap from './LeetCodeHeatmap'
import { ExternalLink } from 'lucide-react'

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
              CODING<br />
              <span className="text-gray-700">PROFILES</span>
            </h2>
            <div className="space-y-5 max-w-2xl">
              <a href="https://leetcode.com/u/nirajkr26/" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div>
                    <h3 className="text-lg font-bold mb-1">LeetCode</h3>
                    <p className="text-gray-400 text-sm">Solved 300+ Data Structure and Algorithms problems on Leetcode.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors shrink-0 ml-4" />
                </div>
              </a>
              <a href="https://www.geeksforgeeks.org/profile/nirajkr26" target="_blank" className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                  <div>
                    <h3 className="text-lg font-bold mb-1">GeeksForGeeeks</h3>
                    <p className="text-gray-400 text-sm">Solved 450+ Data Structure and Algorithms problems on GFG.</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors shrink-0 ml-4" />
                </div>
              </a>
            </div>

            {/* LeetCode Heatmap */}
            <div className="mt-12 max-w-2xl">
              <h3 className="scroll-reveal-child text-lg font-semibold text-green-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-8 h-px bg-green-500/60"></span>
                LeetCode Activity
              </h3>
              <div className="scroll-reveal-child">
                <LeetCodeHeatmap username="nirajkr26" />
              </div>
            </div>

            {/* GitHub Heatmap */}
            <div className="mt-12 max-w-2xl">
              <h3 className="scroll-reveal-child text-lg font-semibold text-green-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="w-8 h-px bg-green-500/60"></span>
                GitHub Contributions
              </h3>
              <div className="scroll-reveal-child bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300">
                <div className="overflow-x-auto">
                  <GitHubCalendar
                    username="nirajkr26"
                    colorScheme="dark"
                    blockSize={13}
                    blockMargin={4}
                    blockRadius={3}
                    fontSize={12}
                    theme={{
                      dark: ['#161b22', '#1b7c12', '#35c20c', '#0cea26', '#16f930'],
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
  )
}

export default CodingProfiles