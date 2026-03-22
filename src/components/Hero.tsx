import { ExternalLink } from "lucide-react"

const Hero = () => {
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const resumeUrl = '/NirajResumeUpdated.pdf';

    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'NirajResumeUpdated.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };


  return (
    <section id="home" className="pt-6 pb-20 px-6 lg:px-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-[0.95]">
              SOFTWARE<br />
              <span className="text-gray-700">DEVELOPER</span>
            </h1>
            <p className="text-gray-400 text-base hover:text-gray-300 lg:text-lg mb-12 max-w-xl leading-relaxed">
              I am a pre-final year B.Tech Computer Science student and dedicated Full-Stack Developer. With a strong foundation in Data Structures and Algorithms, I focus on architecting scalable, user-centric web applications and transforming complex challenges into elegant software solutions. Outside of coding, I stay balanced through music and the outdoors. I am always eager to learn, collaborate, and turn innovative ideas into reality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-xl w-full text-sm sm:text-base">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  10<span className="text-green-500">+</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  15<span className="text-green-500">+</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Active Repositories</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  700<span className="text-green-500">+</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Coding Questions</div>
              </div>
            </div>

            {/* Resume Card */}
            <a
              href="/NirajResumeUpdated.pdf"
              target="_blank"
              onClick={handleResumeClick}
              download="NirajResumeUpdated.pdf"
              rel="noopener noreferrer"
              className="group block w-full max-w-xl relative"
            >
              {/* Static glow orbs */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-green-500 rounded-full blur-[100px] pointer-events-none group-hover:bg-green-400 transition-colors duration-500 opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full blur-[80px] pointer-events-none group-hover:bg-green-300 transition-colors duration-500 opacity-60"></div>

              <div className="contact-card-wrapper w-full">
                {/* Decorative Tilted Frames (Borders) */}
                <div className="contact-frame frame-tilt-1 group-hover:-translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-[-4deg] transition-all! duration-1200! ease-out"></div>
                <div className="contact-frame frame-tilt-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-3 transition-all! duration-1200! ease-out"></div>
                <div className="contact-frame frame-tilt-3 group-hover:translate-y-1 group-hover:rotate-6 transition-all! duration-1200! ease-out"></div>

                <div className="relative bg-gray-950/95 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 overflow-hidden shadow-2xl border border-white/5 group-hover:border-green-500/20 transition-colors duration-500">
                  {/* Decorative subtle rings */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-green-500/20 rounded-full pointer-events-none group-hover:border-green-500/40 group-hover:scale-110 transition-all duration-700 ease-out"></div>
                  <div className="absolute -top-5 -right-5 w-20 h-20 border-2 border-dashed border-green-500/30 rounded-full pointer-events-none group-hover:border-green-500/50 group-hover:rotate-15 transition-all duration-700 ease-out"></div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-green-500/10 to-transparent rounded-tr-full pointer-events-none group-hover:from-green-500/20 transition-colors duration-500"></div>

                  <div className="relative z-10">
                    <p className="flex items-center gap-1.5 text-green-400 text-xs font-semibold uppercase tracking-widest mb-2 group-hover:text-green-300 transition-colors">
                      View My Resume
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-green-100 transition-colors tracking-tight">Download Resume</h3>
                    <p className="text-gray-400 text-sm">Skills, projects & achievements — all in one place</p>
                  </div>
                </div>
              </div>
            </a>
          </section>
  )
}

export default Hero