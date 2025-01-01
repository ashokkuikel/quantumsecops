import React from 'react';

const navigation = {
  solutions: [
    { name: 'Quantum-Safe Encryption', href: '#solutions' },
    { name: 'AI-Powered Security', href: '#solutions' },
    { name: 'Cloud Security', href: '#solutions' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-16">
      <div>
        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
        <ul className="mt-4 space-y-4">
          {navigation.solutions.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-base text-gray-400 hover:text-cyan-500 transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
        <ul className="mt-4 space-y-4">
          {navigation.company.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-base text-gray-400 hover:text-cyan-500 transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}