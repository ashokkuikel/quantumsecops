import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/quantumsecops' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/quantumsecops' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/quantumsecops' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 hover:text-cyan-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}