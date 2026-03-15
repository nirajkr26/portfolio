import { ExternalLink } from 'lucide-react'
import certificationsData from '../data/certifications.json'

const Certifications = () => {
  const getIconBgColor = (color: string) => {
    const colorMap: Record<string, string> = {
      'purple': 'bg-purple-600/10',
      'blue': 'bg-blue-600/10',
      'cyan': 'bg-cyan-500/10',
      'green': 'bg-green-500/10',
      'sky': 'bg-sky-500/10'
    };
    return colorMap[color] || 'bg-gray-500/10';
  };

  return (
    <section id="certifications" className="reveal py-20 px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
        LICENSES &<br />
        <span className="text-gray-700">CERTIFICATIONS</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
        {certificationsData.map((cert, index) => (
          <a
            key={index}
            href={cert.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="scroll-reveal-child bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-40"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl ${getIconBgColor(cert.iconColor)} flex items-center justify-center shrink-0`}>
                  {cert.isSvg ? (
                    <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  ) : (
                    <img src={cert.icon} alt={cert.issuer} className="w-7 h-7 rounded-sm" />
                  )}
                </div>
                <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Certifications
