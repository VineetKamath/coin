import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoCards } from './components/InfoCards';
import { LiveChart } from './components/LiveChart';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-energy-500/30 selection:text-energy-100 font-sans">
      <Header />
      <main>
        <Hero />
        <InfoCards />
        <LiveChart />
      </main>
      <Footer />
    </div>
  );
}

export default App;