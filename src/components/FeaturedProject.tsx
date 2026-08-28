import { ExternalLink, Github, Star } from 'lucide-react';
import { featuredProject } from '@/data/portfolio';

export default function FeaturedProjectCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-850 transition-colors hover:border-accent-500/40">
      <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-900/50 px-5 py-3">
        <Star size={16} className="text-accent-400" />
        <span className="font-mono text-xs text-ink-400">proyecto_destacado</span>
      </div>

      <div className="p-5 sm:p-7">
        <h3 className="font-mono text-xl font-bold text-ink-100 sm:text-2xl">
          {featuredProject.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-300 sm:text-base">
          {featuredProject.description}
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {featuredProject.screenshots.map((shot, i) =>
            shot.image ? (
              <img
                key={i}
                src={shot.image}
                alt={shot.alt}
                className="aspect-video w-full rounded-lg border border-ink-700 object-cover"
              />
            ) : (
              <div
                key={i}
                className="flex aspect-video items-center justify-center rounded-lg border border-ink-700 bg-ink-900 font-mono text-xs text-ink-500"
              >
                [ {shot.placeholder} ]
              </div>
            )
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {featuredProject.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {featuredProject.links && (
          <div className="mt-6 flex flex-wrap gap-3">
            {featuredProject.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.label === 'Ver sitio' ? 'btn-primary' : 'btn-secondary'
                }
              >
                {link.label === 'GitHub' ? <Github size={16} /> : <ExternalLink size={16} />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
