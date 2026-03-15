import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard = ({ title, description, img, githubLink, liveLink }: ProjectCardProps) => {
  return (
    <div className="scroll-reveal-child group block bg-gray-900/60 border border-gray-800 rounded-2xl p-5 hover:border-gray-600 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
        <div className="w-full sm:w-28 h-40 sm:h-20 bg-gray-800 rounded-xl shrink-0 overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-1 group-hover:text-green-400 transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>
          {/* Action Links */}
          <div className="flex items-center gap-4 mt-auto">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white bg-gray-800/80 hover:bg-gray-700/80 px-3 py-1.5 rounded-lg border border-gray-700 transition-colors">
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-green-400 hover:text-green-300 bg-green-500/10 hover:bg-green-500/20 px-3 py-1.5 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
