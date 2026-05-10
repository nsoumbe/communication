import { lepItems } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function LepSection() {
  return (
    <section className="section-shell" id="lep">
      <SectionHeader
        eyebrow="Mon LEP"
        title="Des engagements concrets, réguliers et utiles"
        copy="Cette partie valorise mieux les missions réalisées, les contextes vécus et ce qu’ils m’ont apporté humainement et collectivement."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {lepItems.map((item, index) => (
          <Reveal className="glass-card overflow-hidden p-0" delay={index * 0.08} key={item.title}>
            <div className="relative h-56 overflow-hidden">
              <img alt={item.title} className="h-full w-full object-cover" src={item.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
              <img
                alt={`${item.title} logo`}
                className="absolute left-6 top-6 h-14 rounded-2xl bg-white/95 p-2"
                src={item.logo}
              />
            </div>

            <div className="space-y-5 p-7">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan">{item.period}</p>
                <h3 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-white">{item.title}</h3>
              </div>

              <p className="leading-8 text-slate-300">{item.body}</p>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/35 p-5">
                <h4 className="font-semibold text-white">Missions réalisées</h4>
                <ul className="space-y-2 text-sm leading-7 text-slate-300">
                  {item.missions.map((mission) => (
                    <li key={mission}>• {mission}</li>
                  ))}
                </ul>
              </div>

              <p className="rounded-2xl border border-mint/15 bg-mint/5 p-4 text-sm leading-7 text-slate-300">
                {item.insight}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
