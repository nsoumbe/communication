import { certifications, languages, skillGroups, softSkills, toolBadges } from '@/data/content';
import { MonogramBadge } from '@/components/ui/MonogramBadge';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tag } from '@/components/ui/Tag';

export function SkillsSection() {
  return (
    <section className="section-shell" id="competences">
      <SectionHeader
        eyebrow="Compétences"
        title="Un socle technique déjà spécialisé"
        copy="La section distingue les compétences, les repères techniques et les validations réellement obtenues ou en préparation."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal className="glass-card p-6" delay={index * 0.06} key={group.title}>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal className="glass-card p-6">
          <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">Certifications & formations cyber</h3>
          <div className="mt-5 space-y-3">
            {certifications.map((item) => (
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4" key={item.title}>
                <MonogramBadge short={item.badge} tone={item.tone} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-slate-200">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.issuer}</p>
                    </div>
                    <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-mint">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="glass-card p-6" delay={0.08}>
          <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">Langues, soft skills & outils</h3>
          <div className="mt-5 space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {toolBadges.map((item) => (
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3" key={item.label}>
                  <div className="flex items-center gap-3">
                    <MonogramBadge short={item.short} tone={item.tone} />
                    <span className="text-sm text-slate-200">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
