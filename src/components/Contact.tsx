import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Get in touch with our quantum security experts
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="relative rounded-lg bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500">
            <div className="flex-shrink-0">
              <Mail className="h-6 w-6 text-cyan-500" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="mailto:info@quantumsecops.com" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-sm text-gray-400 truncate">info@quantumsecops.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}