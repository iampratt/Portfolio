import { Hero, Navbar } from '@/components';

export default function Home() {
  return (
    <main className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
