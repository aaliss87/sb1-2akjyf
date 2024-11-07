import React from 'react';
import { Wrench, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
          alt="Home Repair"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Home Services You Can Trust
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert appliance repair, painting, and maintenance services delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                <Wrench className="w-5 h-5 mr-2" />
                Our Services
              </button>
              <button className="flex items-center justify-center bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Request a Service</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Service</label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Appliance Repair</option>
                    <option>Painting</option>
                    <option>Maintenance</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}