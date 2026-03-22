import { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Education from './components/Education';

function App() {

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
      document.querySelectorAll('.scroll-reveal-child').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');

          // Stagger children animations
          const children = entry.target.querySelectorAll('.scroll-reveal-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('revealed');
            }, index * 180);
          });
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* ── Content Wrapper (sidebar + main) ── */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-6 lg:ml-20">
        {/* Profile Card — sticky sidebar */}
        <ProfileCard />

        {/* Scrollable Content */}
        <main className="flex-1 min-w-0 main-entrance">

          {/* Hero */}
          <Hero />

          {/* Education */}
          <Education />

          {/* Technical Skills */}
          <TechnicalSkills />

          {/* Recent Projects */}
          <Projects />

          {/* Licenses & Certifications */}
          <Certifications />

          {/* Coding Profiles */}
          <CodingProfiles />

          {/* Contact */}
          <Contact />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


