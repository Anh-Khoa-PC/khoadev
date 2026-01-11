import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { DecisionTree } from './components/DecisionTree';
import { Capability } from './components/Capability';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Security } from './components/Security';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

// Global Noise Overlay
const GrainOverlay = () => (
  <div className="grain-overlay mix-blend-overlay fixed inset-0 w-full h-full pointer-events-none z-[50]" />
);

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black font-sans">
      <CustomCursor />
      <ScrollProgress />
      <GrainOverlay />
      
      <Hero />
      <DecisionTree />
      <Capability />
      <Projects />
      <Philosophy />
      <Security />
      <Footer />
    </main>
  );
};

export default App;