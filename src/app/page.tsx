import Hero from '@/components/Hero';
import SocialHub from '@/components/SocialHub';
import BentoSection from '@/components/BentoSection';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="bg-background text-foreground font-body antialiased">
      <Header />
      <Hero />
      <Skills />
      <BentoSection />
      <Timeline />
      <SocialHub />
      <Footer />
    </main>
  );
}
