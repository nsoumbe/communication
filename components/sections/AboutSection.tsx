import { about, education } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function AboutSection() {
  return (
    <section className="section-shell" id="presentation">
      <SectionHeader
        eyebrow="Qui je suis"
        title="Un profil analytique, technique et orienté terrain"
        copy="Étudiant passionné par l'innovation et la recherche."
      />

      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal className="glass-card overflow-hidden p-4">
          <img
            alt="Photo de profil de Russell NSOUMBE"
            className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover object-[center_22%]"
            src="/images/profile-photo.jpeg"
          />
          <p className="px-2 pb-2 pt-4 text-sm text-slate-400">{about.photoNote}</p>
        </Reveal>

        <Reveal className="space-y-6" delay={0.1}>
          <div className="glass-card p-8">
            <div className="space-y-5 text-slate-300">
              {about.intro.map((paragraph) => (
                <p className="leading-8" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="glass-card p-8" id="formation">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Formation académique</h3>
              <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan">
                timeline
              </span>
            </div>
            <div className="space-y-6">
              {education.map((item) => (
                <div className="relative border-l border-cyan/30 pl-6" key={`${item.period}-${item.title}`}>
                  <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-cyan shadow-glow" />
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.period}</p>
                  <h4 className="mt-2 text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-slate-300">{item.place}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
