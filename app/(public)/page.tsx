import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Programs from '@/components/Programs';
import News from '@/components/News';
import CTA from '@/components/CTA';
import Gallery from '@/components/Gallery';
import Heritage from '@/components/Heritage';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Stats />
      <About />
      <Programs />
      <News />
      <CTA />
      <Gallery />
      <Heritage />
    </main>
  );
}
