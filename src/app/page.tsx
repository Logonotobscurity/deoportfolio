import Hero from '@/components/Hero';
import SocialHub from '@/components/SocialHub';
import BentoSection from '@/components/BentoSection';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground font-body antialiased">
      <Hero />
      <SocialHub />
      <BentoSection />
      <Timeline />
      <Footer />
    </main>
  );
}
