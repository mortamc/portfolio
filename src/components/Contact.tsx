import { Mail, Github, MapPin } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container">
        <p className="section-label">04 / contacto</p>
        <h2 className="section-title">Contacto</h2>

        <p className="text-base text-ink-300 sm:text-lg">
          ¿Interesado en contratarme o tenés alguna consulta? Escribime.
        </p>

        <div className="mt-6 space-y-3">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 rounded-lg border border-ink-700 bg-ink-850 px-4 py-3 transition-colors hover:border-accent-500/40"
          >
            <Mail size={18} className="text-accent-400" />
            <span className="font-mono text-sm text-ink-200">{personal.email}</span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-ink-700 bg-ink-850 px-4 py-3 transition-colors hover:border-accent-500/40"
          >
            <Github size={18} className="text-accent-400" />
            <span className="font-mono text-sm text-ink-200">{personal.githubLabel}</span>
          </a>

          <div className="flex items-center gap-3 rounded-lg border border-ink-700 bg-ink-850 px-4 py-3">
            <MapPin size={18} className="text-accent-400" />
            <span className="font-mono text-sm text-ink-200">{personal.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
