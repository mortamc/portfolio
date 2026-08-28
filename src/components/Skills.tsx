import { Code2, Database, Cloud, Cog } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const icons = [Code2, Database, Cloud, Cog];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-container">
        <p className="section-label">03 / stack</p>
        <h2 className="section-title">Skills &amp; Stack</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <div
                key={cat.title}
                className="rounded-xl border border-ink-700 bg-ink-850 p-5 transition-colors hover:border-accent-500/30"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-mono text-sm font-semibold text-ink-100">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
