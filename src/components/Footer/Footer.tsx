import React from 'react';
import { Shield } from 'lucide-react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="text-white font-bold text-lg">QuantumSecOps</span>
            </div>
            <p className="text-gray-400 text-base">
              Securing tomorrow's digital landscape with quantum-resistant solutions and AI-powered protection.
            </p>
            <SocialLinks />
          </div>
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <FooterLinks />
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} QuantumSecOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}