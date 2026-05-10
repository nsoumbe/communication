const toneClasses: Record<string, string> = {
  cyan: 'border-cyan/25 bg-cyan/10 text-cyan',
  blue: 'border-blue/25 bg-blue/10 text-blue-300',
  mint: 'border-mint/25 bg-mint/10 text-mint',
  coral: 'border-coral/25 bg-coral/10 text-coral',
  slate: 'border-white/10 bg-white/5 text-slate-200',
};

export function MonogramBadge({
  short,
  tone = 'slate',
}: {
  short: string;
  tone?: string;
}) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-xs font-bold uppercase tracking-[0.18em] ${toneClasses[tone] ?? toneClasses.slate}`}
    >
      {short}
    </div>
  );
}
