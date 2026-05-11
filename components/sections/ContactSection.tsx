import { contact } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ContactSection() {
  return (
    <section className="section-shell" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Disponible pour échanger"
        copy="Le bloc final reste simple et lisible pour un recruteur, un tuteur de stage ou un enseignant qui souhaite me contacter rapidement."
      />

      <Reveal className="glass-card grid gap-8 overflow-hidden p-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[320px]">
          <img
            alt="Photo de contact de Russell NSOUMBE"
            className="h-full w-full object-cover object-center"
            src="/images/photo_en_plus.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan">Contact direct</p>
            <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-white">Prise de contact</h3>
            <p className="mt-3 max-w-md leading-7 text-slate-200">
              Je recherche un stage de 6 mois pouvant évoluer vers un CDI. N’hésite pas à me contacter pour échanger autour d’une opportunité, d’un sujet cybersécurité ou d’un projet technique.
            </p>
          </div>
        </div>

        <div className="grid gap-4 p-8 sm:grid-cols-2">
          <a className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10" href={`mailto:${contact.email}`}>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Email</p>
            <p className="mt-3 text-white">{contact.email}</p>
          </a>
          <a className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10" href={`tel:${contact.phone.replaceAll(' ', '')}`}>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Téléphone</p>
            <p className="mt-3 text-white">{contact.phone}</p>
          </a>
          <a className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10" href={contact.linkedin}>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">LinkedIn</p>
            <p className="mt-3 text-white">linkedin.com/in/russell-nsoumbe</p>
          </a>
          <a className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10" href={contact.github}>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">GitHub</p>
            <p className="mt-3 text-white">github.com/nsoumbe</p>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
