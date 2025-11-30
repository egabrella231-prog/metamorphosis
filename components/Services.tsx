import React from 'react';
import { Globe, Workflow, Bot, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<ServiceItem> = ({ title, description, icon }) => (
  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-meta-orange flex items-center justify-center mb-6 group-hover:bg-meta-orange group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-meta-orange transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
    <ul className="mt-6 space-y-3">
      {[1, 2, 3].map((_, i) => (
        <li key={i} className="flex items-center text-sm text-gray-500">
          <CheckCircle2 className="w-4 h-4 text-meta-green mr-2" />
          <span>Professional Implementation</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Web Design",
      description: "We craft visually stunning, mobile-responsive websites designed to convert visitors into loyal customers. Our designs align perfectly with your brand identity.",
      icon: <Globe className="w-7 h-7" />,
    },
    {
      title: "Automation Workflow",
      description: "Eliminate repetitive tasks. We build seamless automation systems that connect your apps, save countless hours, and reduce human error significantly.",
      icon: <Workflow className="w-7 h-7" />,
    },
    {
      title: "Agents Creation",
      description: "Step into the future with custom AI agents. From customer support chatbots to intelligent sales assistants, we build digital workers that never sleep.",
      icon: <Bot className="w-7 h-7" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-meta-green font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Services that Drive Growth
          </h3>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive digital solutions tailored to help your business evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};