import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { LepSection } from '@/components/sections/LepSection';
import { ProProjectSection } from '@/components/sections/ProProjectSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="site-ambient" />
      <div className="blur-photo-bg" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LepSection />
      <ProProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
