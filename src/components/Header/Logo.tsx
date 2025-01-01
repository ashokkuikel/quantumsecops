import React from 'react';
import { Shield } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Shield className="h-8 w-8 text-cyan-500" />
      </div>
      <span className="ml-2 text-white font-bold text-lg hidden sm:block">QuantumSecOps</span>
    </div>
  );
}