import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { portfolioItems } from '../mockData';

const OurWork = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  // Separate and prioritize weddings
  const weddingItems = portfolioItems.filter(item => item.category === 'wedding');
  const corporateItems = portfolioItems.filter(item => item.category === 'corporate');

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/35234733/pexels-photo-35234733.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/60" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            A showcase of extraordinary celebrations
          </p>
        </div>
      </section>

      {/* WEDDINGS SECTION - PRIMARY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Weddings
            </h2>
            <p className="text-xl text-gray-600">
              Grand celebrations where dreams come alive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingItems.map((item) => (
              <Card key={item.id} className="hover-lift border-purple-100 overflow-hidden group">
                <div className="relative overflow-hidden h-96">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                    <p className="text-purple-200">{item.location}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      Wedding
                    </span>
                    {item.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-400 to-purple-300 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE EVENTS SECTION */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-lavender-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Corporate Events
            </h2>
            <p className="text-xl text-gray-600">
              Professional gatherings that inspire excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corporateItems.map((item) => (
              <Card key={item.id} className="hover-lift border-purple-100 overflow-hidden group">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      Corporate
                    </span>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">{item.location}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL EVENTS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Social Events
            </h2>
            <p className="text-xl text-gray-600">
              Memorable celebrations crafted with care
            </p>
          </div>

          <div className="text-center py-16">
            <p className="text-2xl text-gray-500 mb-8">More projects coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;