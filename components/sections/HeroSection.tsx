'use client';

import { ArrowDownRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { contact, hero } from '@/data/content';

export function HeroSection() {
  return (
    <section className="relative border-b border-white/10 bg-hero-grid" id="top">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-8 top-24 h-32 w-32 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute bottom-24 right-12 h-40 w-40 rounded-full bg-blue/20 blur-3xl" />
      </div>

      <div className="section-shell relative flex min-h-[92vh] flex-col justify-center gap-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="space-y-7"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Cybersécurité • DevSecOps • Cloud</span>
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase tracking-[0.32em] text-slate-400">Portfolio personnel</p>
              <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-bold tracking-tight text-white sm:text-6xl">
                {hero.name}
              </h1>
              <div className="space-y-2">
                {hero.roles.map((role) => (
                  <p className="text-xl text-cyan sm:text-2xl" key={role}>
                    {role}
                  </p>
                ))}
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{hero.summary}</p>
              <p className="max-w-2xl rounded-2xl border border-cyan/15 bg-cyan/5 px-4 py-4 text-sm leading-7 text-slate-300">
                {hero.availability}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                href="#projets"
              >
                Voir mes projets
                <ArrowDownRight size={18} />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                href="/cv-russell-nsoumbe.pdf"
              >
                Télécharger mon CV
                <Download size={18} />
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <a aria-label="LinkedIn" className="glass-card inline-flex items-center gap-2 px-4 py-2" href={contact.linkedin}>
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a aria-label="GitHub" className="glass-card inline-flex items-center gap-2 px-4 py-2" href={contact.github}>
                <Github size={16} />
                GitHub
              </a>
              <a aria-label="Email" className="glass-card inline-flex items-center gap-2 px-4 py-2" href={`mailto:${contact.email}`}>
                <Mail size={16} />
                Mail
              </a>
              <a aria-label="Téléphone" className="glass-card inline-flex items-center gap-2 px-4 py-2" href={`tel:${contact.phone.replaceAll(' ', '')}`}>
                <Phone size={16} />
                Tél
              </a>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card relative overflow-hidden p-8"
            initial={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-cyan/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-mint/10 blur-2xl" />
            <div className="relative space-y-8">
              <div className="flex items-center gap-5">
                <img
                  alt="Portrait de Russell NSOUMBE"
                  className="h-24 w-24 rounded-[2rem] border border-white/10 object-cover"
                  src="/images/profile-photo.jpeg"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus métier</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{hero.focus}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {hero.stats.map((stat) => (
                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4" key={stat.label}>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
