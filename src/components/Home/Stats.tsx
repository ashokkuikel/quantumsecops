import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

const stats = [
  { name: 'Protected Systems', value: '10K+', icon: Shield },
  { name: 'Enterprise Clients', value: '200+', icon: Users },
  { name: 'Security Awards', value: '15+', icon: Award },
];

export default function Stats() {
  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center">
              <stat.icon className="h-8 w-8 text-cyan-500 mb-3" />
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}