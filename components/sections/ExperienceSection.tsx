import { experiences } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tag } from '@/components/ui/Tag';

export function ExperienceSection() {
  return (
    <section className="section-shell" id="experiences">
      <SectionHeader
        eyebrow="Expériences"
        title="Des expériences variées, mais cohérentes"
        copy="Finance sécurisée, analyse SOC, réseau et recherche : le parcours raconte une progression logique vers la cybersécurité."
      />

      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <Reveal className="glass-card p-7" delay={index * 0.08} key={`${experience.company}-${experience.title}`}>
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan">{experience.period}</p>
                <h3 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-white">{experience.title}</h3>
                <p className="mt-1 text-slate-300">{experience.company}</p>
                <p className="mt-5 leading-8 text-slate-300">{experience.body}</p>
                <p className="mt-5 rounded-2xl border border-cyan/15 bg-cyan/5 p-4 text-sm leading-7 text-slate-300">
                  {experience.learn}
                </p>
              </div>

              <div className="flex max-w-sm flex-wrap content-start gap-2">
                {experience.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
