import React from 'react';
import { Shield, Lock, Cpu, Cloud, Binary, Fingerprint } from 'lucide-react';

const solutions = [
  {
    name: 'Quantum-Safe Encryption',
    description: 'Future-proof your data with quantum-resistant cryptographic solutions.',
    icon: Lock,
  },
  {
    name: 'AI-Powered Threat Detection',
    description: 'Real-time threat detection and response powered by advanced artificial intelligence.',
    icon: Cpu,
  },
  {
    name: 'Cloud Security',
    description: 'Comprehensive security solutions for your cloud infrastructure.',
    icon: Cloud,
  },
  {
    name: 'Zero-Trust Architecture',
    description: 'Implement modern zero-trust security frameworks across your organization.',
    icon: Shield,
  },
  {
    name: 'Quantum Key Distribution',
    description: 'Secure communication channels with quantum key distribution technology.',
    icon: Binary,
  },
  {
    name: 'Identity Protection',
    description: 'Advanced identity and access management with biometric authentication.',
    icon: Fingerprint,
  },
];

export default function Solutions() {
  return (
    <div id="solutions" className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-500 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Advanced Security Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Comprehensive cybersecurity solutions powered by quantum computing and artificial intelligence.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {solutions.map((solution) => (
              <div key={solution.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                  <solution.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">{solution.name}</p>
                <dd className="mt-2 ml-16 text-base text-gray-400">{solution.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}