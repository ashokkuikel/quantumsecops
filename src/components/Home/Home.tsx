import React from 'react';
import Hero from '../Hero';
import Stats from './Stats';
import Solutions from '../Solutions';
import Contact from '../Contact';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Stats />
      <Solutions />
      <Contact />
    </main>
  );
}