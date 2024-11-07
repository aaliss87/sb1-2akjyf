import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function ServiceForm() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Book a Service</h2>
            <p className="text-gray-600 mb-8">
              Schedule your service appointment in just a few clicks. Our professional team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Flexible Scheduling</h3>
                  <p className="text-gray-600">Choose a time that works best for you</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">24/7 Emergency Service</h3>
                  <p className="text-gray-600">Available round the clock for urgent needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Service Coverage</h3>
                  <p className="text-gray-600">Serving all major cities and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Service Category</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600">
                  <option>Appliance Repair</option>
                  <option>Home Improvement</option>
                  <option>Essential Services</option>
                  <option>Cleaning & Pest Control</option>
                  <option>Beauty & Wellness</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Specific Service</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600">
                  <option>Select a category first</option>
                </select>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Preferred Time</label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600">
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
                  rows={4}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}