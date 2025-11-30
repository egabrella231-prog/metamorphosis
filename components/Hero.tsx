import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-meta-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-meta-green/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-orange-100 text-meta-orange font-semibold text-sm animate-fade-in-up">
            Transform Your Digital Presence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
            Evolve Your Business with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-meta-orange to-red-500">
              Intelligent Design
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            From stunning websites to autonomous AI agents, we guide your business through its next metamorphosis. 
            Automate workflows and capture more leads today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="group">
                Start Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </a>
          </div>
        </div>

        {/* Visual representation of transformation */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">🐛</div>
              <h3 className="font-bold text-gray-900">Concept</h3>
              <p className="text-gray-500 text-sm mt-2">We analyze your needs and identify bottlenecks.</p>
            </div>
            <div className="hidden md:flex items-center justify-center text-meta-orange">
              <ArrowRight className="w-8 h-8 animate-pulse" />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">🦋</div>
              <h3 className="font-bold text-gray-900">Creation</h3>
              <p className="text-gray-500 text-sm mt-2">We build robust websites and AI systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};