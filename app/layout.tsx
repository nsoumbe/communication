import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Russell NSOUMBE | Portfolio cybersécurité',
  description:
    "Portfolio de Russell NSOUMBE, étudiant ingénieur en cybersécurité à l’ESAIP Angers, orienté SOC, analyse technique, détection et DevSecOps.",
  keywords: ['cybersécurité', 'DevSecOps', 'SOC', 'ESAIP', 'Russell NSOUMBE'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-ink text-slate-100">{children}</body>
    </html>
  );
}
