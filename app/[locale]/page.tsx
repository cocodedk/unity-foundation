import Hero from '@/components/Hero';
import ProgramCards from '@/components/ProgramCards';
import UpdatesPreview from '@/components/UpdatesPreview';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <ProgramCards />
      <UpdatesPreview />
    </div>
  );
}

