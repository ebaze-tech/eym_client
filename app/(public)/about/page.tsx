import AboutHero from '@/components/about/AboutHero';
import MissionVision from '@/components/about/MissionVision';
import History from '@/components/about/History';
import Team from '@/components/about/Team';
import Impact from '@/components/about/Impact';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <AboutHero />
      <MissionVision />
      <History />
      <Team />
      <Impact />
    </main>
  );
}
