'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '@/data/content';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-12">
        <a className="font-[var(--font-display)] text-lg font-bold tracking-[0.3em] text-cyan" href="#top">
          RN
        </a>

        <nav className="hidden gap-6 text-sm text-slate-300 lg:flex">
          {navItems.map(([label, href]) => (
            <a className="transition hover:text-white" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Ouvrir le menu"
          className="rounded-full border border-white/10 p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <Menu size={18} />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm text-slate-300">
            {navItems.map(([label, href]) => (
              <a
                className="transition hover:text-white"
                href={href}
                key={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
