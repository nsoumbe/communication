import { professionalProject } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ProProjectSection() {
  return (
    <section className="section-shell" id="projet-pro">
      <SectionHeader
        eyebrow="Projet professionnel"
        title="Des motivations claires, des valeurs assumées"
        copy="Une vision claire de mon orientation, de mes valeurs de travail et de la trajectoire que je veux construire dans les prochaines années."
      />

      <div className="space-y-6">
        <Reveal className="glass-card p-7">
          <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Pourquoi j’ai choisi cette orientation</h3>
          <p className="mt-5 leading-8 text-slate-300">{professionalProject.why}</p>
        </Reveal>

        <Reveal className="glass-card overflow-hidden p-0">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Ce que ma formation m’a apporté</h3>
              <div className="mt-6 space-y-4">
                {professionalProject.trainingFit.map((row) => (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4" key={row.positive}>
                    <p className="text-white">{row.positive}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Ce qu’il me reste à approfondir</h3>
              <div className="mt-6 space-y-4">
                {professionalProject.trainingFit.map((row) => (
                  <div className="rounded-2xl border border-coral/15 bg-coral/5 p-4" key={row.missing}>
                    <p className="text-slate-200">{row.missing}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="glass-card p-7">
          <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Ma formation par rapport à mon projet professionnel</h3>
          <div className="mt-5 space-y-5 text-slate-300">
            <p className="leading-8">{professionalProject.trainingAnalysis}</p>
            <p className="leading-8">{professionalProject.trainingAnalysis2}</p>
            <p className="leading-8">{professionalProject.trainingAnalysis3}</p>
          </div>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-2">
          <Reveal className="glass-card p-7">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Mes valeurs</h3>
            <div className="mt-6 space-y-4">
              {professionalProject.values.map((item) => (
                <div className="rounded-2xl border border-mint/20 bg-mint/5 p-4" key={item.title}>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass-card p-7" delay={0.08}>
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Mes anti-valeurs</h3>
            <div className="mt-6 space-y-4">
              {professionalProject.antiValues.map((item) => (
                <div className="rounded-2xl border border-coral/20 bg-coral/5 p-4" key={item.title}>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="glass-card p-7">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Mon fonctionnement</h3>
              <p className="mt-5 leading-8 text-slate-300">{professionalProject.note}</p>
            </div>
            <div>
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Comment je me vois dans 5 ans</h3>
              <p className="mt-5 leading-8 text-slate-300">{professionalProject.vision}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
