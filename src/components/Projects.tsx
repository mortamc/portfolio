import { Github } from 'lucide-react';
import { otherProjects } from '@/data/portfolio';
import FeaturedProjectCard from './FeaturedProject';

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="section-container">
        <p className="section-label">02 / proyectos</p>
        <h2 className="section-title">Proyectos</h2>

        <FeaturedProjectCard />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-ink-700 bg-ink-850 p-5 transition-colors hover:border-accent-500/30"
            >
              <h3 className="font-mono text-lg font-semibold text-ink-100">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-400 transition-colors hover:text-accent-400"
                    >
                      <Github size={14} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
