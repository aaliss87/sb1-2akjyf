import React from 'react';
import { Wrench, Paintbrush, Thermometer, ShowerHead } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="w-12 h-12 text-blue-600" />,
    title: 'Appliance Repair',
    description: 'Expert repair services for all major household appliances including washing machines, refrigerators, and more.'
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-blue-600" />,
    title: 'Painting Services',
    description: 'Professional interior and exterior painting services with premium quality materials and expert finish.'
  },
  {
    icon: <Thermometer className="w-12 h-12 text-blue-600" />,
    title: 'HVAC Services',
    description: 'Comprehensive heating, ventilation, and air conditioning services to keep your home comfortable.'
  },
  {
    icon: <ShowerHead className="w-12 h-12 text-blue-600" />,
    title: 'Plumbing',
    description: 'From minor repairs to major installations, our expert plumbers handle all your plumbing needs.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Professional solutions for all your home service needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}