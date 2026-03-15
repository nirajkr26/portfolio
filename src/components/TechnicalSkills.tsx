import skillsData from '../data/skills.json';

const TechnicalSkills = () => {
  const getColorClasses = (color: string) => {
    // Map of base colors to their specific Tailwind class variations used in the design
    const colorMap: Record<string, { border: string, bg: string, iconBg: string }> = {
      'yellow': { border: 'hover:border-yellow-500/40', bg: 'hover:bg-yellow-500/[0.03]', iconBg: 'bg-yellow-500/15' },
      'blue': { border: 'hover:border-blue-500/40', bg: 'hover:bg-blue-500/[0.03]', iconBg: 'bg-blue-500/15' },
      'sky': { border: 'hover:border-sky-500/40', bg: 'hover:bg-sky-500/[0.03]', iconBg: 'bg-sky-500/15' },
      'blue-600': { border: 'hover:border-blue-600/40', bg: 'hover:bg-blue-600/[0.03]', iconBg: 'bg-blue-600/15' },
      'red': { border: 'hover:border-red-500/40', bg: 'hover:bg-red-500/[0.03]', iconBg: 'bg-red-500/15' },
      'cyan': { border: 'hover:border-cyan-500/40', bg: 'hover:bg-cyan-500/[0.03]', iconBg: 'bg-cyan-500/15' },
      'green-600': { border: 'hover:border-green-600/40', bg: 'hover:bg-green-600/[0.03]', iconBg: 'bg-green-600/15' },
      'gray': { border: 'hover:border-gray-500/40', bg: 'hover:bg-gray-500/[0.03]', iconBg: 'bg-gray-700/40' },
      'green': { border: 'hover:border-green-500/40', bg: 'hover:bg-green-500/[0.03]', iconBg: 'bg-green-500/15' },
      'blue-400': { border: 'hover:border-blue-400/40', bg: 'hover:bg-blue-400/[0.03]', iconBg: 'bg-blue-400/15' },
      'sky-600': { border: 'hover:border-sky-600/40', bg: 'hover:bg-sky-600/[0.03]', iconBg: 'bg-sky-600/15' },
      'purple': { border: 'hover:border-purple-500/40', bg: 'hover:bg-purple-500/[0.03]', iconBg: 'bg-purple-500/15' },
      'green-400': { border: 'hover:border-green-400/40', bg: 'hover:bg-green-400/[0.03]', iconBg: 'bg-green-400/15' }
    };

    return colorMap[color] || colorMap['green']; // Default to green if not found
  };

  return (
    <section id="tools" className="reveal py-20 px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
        TECHNICAL<br />
        <span className="text-gray-700">SKILLS</span>
      </h2>

      {skillsData.categories.map((category, catIndex) => (
        <div key={catIndex} className={catIndex < skillsData.categories.length - 1 ? "mb-12" : ""}>
          <h3 className="text-lg font-semibold text-green-400 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-8 h-px bg-green-500/60"></span>
            {category.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {category.skills.map((skill, skillIndex) => {
              const colors = getColorClasses(skill.color);
              return (
                <div key={skillIndex} className={`scroll-reveal-child flex items-center gap-4 bg-gray-900/60 border border-gray-800 rounded-2xl px-5 py-4 ${colors.border} ${colors.bg} transition-all duration-300 cursor-pointer group`}>
                  <div className={`w-11 h-11 ${colors.iconBg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <img src={skill.icon} alt={skill.name} className={`w-7 h-7 ${skill.iconClass}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{skill.name}</h3>
                    <p className="text-gray-500 text-xs">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechnicalSkills;
