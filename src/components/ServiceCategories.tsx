import React from 'react';
import { 
  Wrench, Paintbrush, Shower, Fan, Wifi, Sofa, 
  Scissors, Spray, Bug, Thermometer, Monitor, 
  Battery, Lock, Home, Sparkles
} from 'lucide-react';

const categories = [
  {
    title: 'Appliance Repair',
    icon: <Wrench className="w-12 h-12 text-blue-600" />,
    services: [
      'AC Repair & Service',
      'Refrigerator Repair',
      'Washing Machine Repair',
      'Microwave Repair',
      'Water Purifier Repair',
      'Geyser Repair & Service',
      'Air Cooler Repair',
      'Television Repair',
      'Gas Stove Repair',
      'Air Purifier Service'
    ]
  },
  {
    title: 'Home Improvement',
    icon: <Paintbrush className="w-12 h-12 text-blue-600" />,
    services: [
      'Full Home Painting',
      'Wall Panels Installation',
      'Rooms/Walls Painting',
      'Furniture Assembly',
      'IKEA Furniture Assembly',
      'Wall Panels'
    ]
  },
  {
    title: 'Essential Services',
    icon: <Home className="w-12 h-12 text-blue-600" />,
    services: [
      'Plumbing Services',
      'Electrical Services',
      'Carpentry Services',
      'Fan Installation',
      'Inverter Repair',
      'Smart Lock Installation'
    ]
  },
  {
    title: 'Cleaning & Pest Control',
    icon: <Sparkles className="w-12 h-12 text-blue-600" />,
    services: [
      'Full Home Cleaning',
      'Bathroom & Kitchen Cleaning',
      'Sofa & Carpet Cleaning',
      'Water Tank Cleaning',
      'Weekly Bathroom Cleaning',
      'Pest Control Services',
      'Termite Control',
      'Bed Bugs Control',
      'Cockroach Control'
    ]
  },
  {
    title: 'Beauty & Wellness',
    icon: <Scissors className="w-12 h-12 text-blue-600" />,
    services: [
      'Salon Classic',
      'Salon Prime',
      'Salon Luxe',
      'Spa For Women',
      'Massage For Men',
      'Hair Studio For Women',
      'Makeup & Styling',
      'Nail Studio',
      'Laser Hair Reduction'
    ]
  }
];

export default function ServiceCategories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for all your home service needs</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-lg mb-2 transition-colors ${
                    activeCategory === index
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    {category.icon}
                    <span className="ml-3 font-semibold">{category.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                {categories[activeCategory].icon}
                <span className="ml-3">{categories[activeCategory].title}</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories[activeCategory].services.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold mb-2">{service}</h4>
                    <button className="text-blue-600 hover:text-blue-700">
                      Book Now →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}