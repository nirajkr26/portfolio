import { Award, Code2, Folder, Home, Mail, Wrench } from "lucide-react"

const Navbar = () => {
  return (
    <div className="floating-nav">
        <nav className="floating-nav__pill">
          <a href="#home" className="nav-icon-btn">
            <Home />
            <span className="nav-tooltip">Home</span>
          </a>
          <span className="nav-dot" />
          <a href="#projects" className="nav-icon-btn">
            <Folder />
            <span className="nav-tooltip">Projects</span>
          </a>
          <span className="nav-dot" />
          <a href="#coding-profiles" className="nav-icon-btn">
            <Code2 />
            <span className="nav-tooltip">Coding Profiles</span>
          </a>
          <span className="nav-dot" />
          <a href="#tools" className="nav-icon-btn">
            <Wrench />
            <span className="nav-tooltip">Skills</span>
          </a>
          <span className="nav-dot" />
          <a href="#certifications" className="nav-icon-btn">
            <Award />
            <span className="nav-tooltip">Certifications</span>
          </a>
          <span className="nav-dot" />
          <a href="#contact" className="nav-icon-btn">
            <Mail />
            <span className="nav-tooltip">Contact</span>
          </a>
        </nav>
      </div>
  )
}

export default Navbar