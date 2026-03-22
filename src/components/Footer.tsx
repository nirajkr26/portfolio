import { Github, Linkedin, Mail, Phone } from "lucide-react"
import VisitCounter from "./VisitCounter"

const Footer = () => {
  return (
    <footer className="mt-12 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-green-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Top row: Social + Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/nirajkr26" target="_blank" rel="noopener noreferrer"
              className="group text-gray-500 hover:text-green-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300">
                <Github className="w-[18px] h-[18px]" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/nirajkr26/" target="_blank" rel="noopener noreferrer"
              className="group text-gray-500 hover:text-green-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300">
                <Linkedin className="w-[18px] h-[18px]" />
              </div>
            </a>
            <a href="mailto:nirajkumargupta2642006@gmail.com"
              className="group text-gray-500 hover:text-green-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300">
                <Mail className="w-[18px] h-[18px]" />
              </div>
            </a>
            <a href="tel:+919709802096"
              className="group text-gray-500 hover:text-green-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300">
                <Phone className="w-[18px] h-[18px]" />
              </div>
            </a>
          </div>

          {/* Back to top */}
          <a href="#home"
            className="group flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors duration-300 text-sm font-medium">
            Back to top
            <div className="w-8 h-8 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center group-hover:border-green-500/30 group-hover:bg-green-500/10 group-hover:-translate-y-0.5 transition-all duration-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
          </a>
        </div>

        {/* Visit counter pill */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 bg-gray-900/60 border border-gray-800 rounded-full px-5 py-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-500 text-xs font-medium tracking-wide">
              <VisitCounter />
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/60 mb-6"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <a href="tel:+919709802096" className="hover:text-green-400 transition-colors duration-300 flex items-center gap-1.5">
            <span className="text-gray-700 sm:block hidden">•</span>
            +91 9709802096
          </a>
          <p>
            © {new Date().getFullYear()} <a href="https://github.com/nirajkr26" target="_blank" rel="noopener noreferrer" className="text-green-500/80 hover:text-green-400 transition-colors">Niraj Kumar</a>. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer