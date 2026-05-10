import { contact } from '@/data/content';

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>Russell NSOUMBE</p>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>{contact.phone}</a>
        </div>
      </div>
    </footer>
  );
}
