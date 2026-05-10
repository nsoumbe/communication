import { projects } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tag } from '@/components/ui/Tag';

export function ProjectsSection() {
  return (
    <section className="section-shell" id="projets">
      <SectionHeader
        eyebrow="Projets"
        title="Des projets qui montrent la profondeur technique"
        copy="Les projets majeurs prennent une vraie place pour donner de la matière à un enseignant comme à un recruteur."
      />

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal className="glass-card flex h-full flex-col p-6" delay={index * 0.05} key={project.title}>
            <div className="mb-4 inline-flex w-fit rounded-full border border-coral/20 bg-coral/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-coral">
              {project.category}
            </div>
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 flex-1 leading-8 text-slate-300">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
