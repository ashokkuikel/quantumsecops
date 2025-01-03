import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}