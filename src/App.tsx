import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCategories from './components/ServiceCategories';
import ServiceForm from './components/ServiceForm';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceCategories />
      <ServiceForm />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;