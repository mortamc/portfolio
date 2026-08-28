import { MapPin } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <p className="section-label">01 / sobre_mí</p>
        <h2 className="section-title">Sobre mí</h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="flex-shrink-0 lg:w-56">
            <div className="group relative aspect-square w-40 overflow-hidden rounded-2xl border border-ink-700 bg-ink-850 sm:w-48 lg:w-full">
              {personal.photo ? (
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-mono text-xs text-ink-500">
                  <span className="text-center">
                    [ foto ]
                    <br />
                    placeholder
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent-500/0 transition-all group-hover:ring-accent-500/40" />
            </div>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-ink-400">
              <MapPin size={14} className="text-accent-400" />
              {personal.location}
            </div>
          </div>

          <div className="flex-1">
            <p className="text-base leading-relaxed text-ink-200 sm:text-lg">
              {personal.bio}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-ink-700 bg-ink-850 p-4">
                <p className="font-mono text-xs text-accent-400">{'>'} educación</p>
                <p className="mt-1 text-sm text-ink-200">
                  Desarrollo de Software — ITU (UNCUYO)
                </p>
              </div>
              <div className="rounded-lg border border-ink-700 bg-ink-850 p-4">
                <p className="font-mono text-xs text-accent-400">{'>'} enfoque</p>
                <p className="mt-1 text-sm text-ink-200">
                  Técnico + comercial — Product, Sales Eng, TAM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
