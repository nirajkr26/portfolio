import ProjectCard from './ProjectCard'
import projectsData from '../data/projects.json'

const Projects = () => {
  return (
    <section id="projects" className="reveal py-20 px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center lg:text-left">
        RECENT<br />
        <span className="text-gray-700">PROJECTS</span>
      </h2>
      <div className="space-y-5 max-w-2xl">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
