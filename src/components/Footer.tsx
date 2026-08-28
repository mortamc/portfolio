import { Github, Mail } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink-500">
          <span className="text-accent-400">~/</span>
          {personal.name} — {personal.location}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="text-ink-400 transition-colors hover:text-accent-400"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-400 transition-colors hover:text-accent-400"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-500">
          © {new Date().getFullYear()} — built with React + Vite
        </p>
      </div>
    </footer>
  );
}
