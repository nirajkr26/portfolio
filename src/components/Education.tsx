const Education = () => {
    return (
        <section id="education" className="reveal py-20 px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
              EDUCATION<br />
              <span className="text-gray-700">DETAILS</span>
            </h2>

            <div className="max-w-2xl">
              <div className="scroll-reveal-child bg-gray-900/60 border border-gray-800 rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div className="relative pl-10 space-y-12 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gray-700">
                  <article className="relative group">
                    <span className="absolute -left-[2.02rem] top-1 w-4 h-4 rounded-full bg-black border-2 border-green-500 shadow-[0_0_14px_rgba(249,115,22,0.45)] transition-all duration-300 group-hover:bg-green-500 group-hover:shadow-[0_0_22px_rgba(249,115,22,0.95)] group-hover:scale-110"></span>
                    <h3 className="text-xl font-bold text-white leading-tight">Bachelor of Technology - Computer Science and Engineering</h3>
                    <p className="text-green-400 font-semibold text-base mt-3">Lovely Professional University (Punjab, India)</p>
                    <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 mt-3">
                      <span className="text-xs text-gray-300">August 2023 - Present</span>
                    </div>
                    <p className="text-gray-300 text-lg mt-4">CGPA: 8.55</p>
                  </article>

                  <article className="relative group">
                    <span className="absolute -left-[2.02rem] top-1 w-4 h-4 rounded-full bg-black border-2 border-green-500 shadow-[0_0_14px_rgba(249,115,22,0.45)] transition-all duration-300 group-hover:bg-green-500 group-hover:shadow-[0_0_22px_rgba(249,115,22,0.95)] group-hover:scale-110"></span>
                    <h3 className="text-xl font-bold text-white leading-tight">Intermediate - (Science Stream) (12th Grade)</h3>
                    <p className="text-green-400 font-semibold text-base mt-3">B.S College (Patna, Bihar)</p>
                    <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 mt-3">
                      <span className="text-xs text-gray-300">Completed: March 2023</span>
                    </div>
                    <p className="text-gray-300 text-lg mt-4">Percentage: 74.2%</p>
                  </article>

                  <article className="relative group">
                    <span className="absolute -left-[2.02rem] top-1 w-4 h-4 rounded-full bg-black border-2 border-green-500 shadow-[0_0_14px_rgba(249,115,22,0.45)] transition-all duration-300 group-hover:bg-green-500 group-hover:shadow-[0_0_22px_rgba(249,115,22,0.95)] group-hover:scale-110"></span>
                    <h3 className="text-xl font-bold text-white leading-tight">Matriculation (10th Grade)</h3>
                    <p className="text-green-400 font-semibold text-base mt-3">Camford Public School (Patna, Bihar)</p>
                    <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 mt-3">
                      <span className="text-xs text-gray-300">Completed: March 2021</span>
                    </div>
                    <p className="text-gray-300 text-lg mt-4">Percentage: 69.8%</p>
                  </article>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Education