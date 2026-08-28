import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, X, ZoomIn } from 'lucide-react';
import { featuredProject } from '@/data/portfolio';

export default function FeaturedProjectCard() {
  const [openImage, setOpenImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!openImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openImage]);

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
              <button
                key={i}
                type="button"
                onClick={() => setOpenImage({ src: shot.image!, alt: shot.alt })}
                className="group relative aspect-video overflow-hidden rounded-lg border border-ink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                <img
                  src={shot.image}
                  alt={shot.alt}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/40 group-hover:opacity-100">
                  <ZoomIn size={22} className="text-white" />
                </span>
              </button>
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

      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={() => setOpenImage(null)}
        >
          <button
            type="button"
            onClick={() => setOpenImage(null)}
            className="absolute right-4 top-4 rounded-full bg-ink-850 p-2 text-ink-100 hover:bg-ink-700 sm:right-6 sm:top-6"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
          <img
            src={openImage.src}
            alt={openImage.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}