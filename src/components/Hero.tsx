import { ArrowDown, Github, Mail } from 'lucide-react';
import { personal, terminalLines } from '@/data/portfolio';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center pt-20 pb-12"
    >
      <div className="section-container">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 animate-fade-in-up">
            <p className="section-label">{'{'} dev_portfolio {'}'}</p>
            <h1 className="font-mono text-4xl font-bold leading-tight text-ink-100 sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>
            <div className="mt-4 max-w-lg">
              <p className="text-base text-ink-200 sm:text-lg">
                {personal.tagline}
              </p>
              <p className="font-mono text-sm text-accent-400 sm:text-base">
                {personal.tagline2}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={16} />
                GitHub
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={16} />
                Contacto
              </a>
            </div>
          </div>

          <div className="w-full max-w-md flex-1 animate-fade-in-up">
            <Typewriter lines={terminalLines} />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-ink-400 transition-colors hover:text-accent-400"
          >
            <span className="font-mono text-xs">scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
