import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import HeroCarousel from '../components/HeroCarousel';
import HowWeWork from '../components/HowWeWork';
import EventsCreatedSection from '../components/EventsCreatedSection';
import { weddingServices } from '../mockData';

const NewHome = () => {
  const eventTypes = [
    {
      title: 'Weddings',
      description: 'Grand celebrations where dreams come alive',
      icon: Heart,
      image: 'https://images.pexels.com/photos/11985359/pexels-photo-11985359.jpeg',
      path: '/weddings',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Corporate Events',
      description: 'Professional gatherings that inspire excellence',
      icon: Briefcase,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      path: '/corporate-events',
      gradient: 'from-purple-600 to-purple-500'
    },
    {
      title: 'Social Events',
      description: 'Memorable moments crafted with perfection',
      icon: PartyPopper,
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
      path: '/social-events',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Event Types Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Link 
                  key={index}
                  to={event.path}
                  className="group"
                >
                  <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <IconComponent className="text-white" size={36} />
                        </div>
                        <h3 className="text-4xl font-light text-white mb-3">
                          {event.title}
                        </h3>
                        <p className="text-white/90 text-lg">
                          {event.description}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-white group-hover:gap-4 transition-all duration-300">
                          <span>Explore</span>
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-lavender-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive event solutions tailored to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {weddingServices.slice(0, 6).map((service, index) => (
              <Card 
                key={service.id} 
                className="hover-lift border-purple-100 hover:border-purple-300 transition-all duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <HowWeWork />

      {/* Events Created Numbers */}
      <EventsCreatedSection />

      {/* Our Work Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing excellence in every celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Wedding Image */}
            <div className="md:col-span-2 md:row-span-2 image-zoom-container rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/35420251/pexels-photo-35420251.jpeg" 
                alt="Grand Wedding"
                className="w-full h-full object-cover"
              />
            </div>
            
            {[12194048, 15966640, 29034583, 35234733].map((photoId, index) => (
              <div 
                key={index}
                className="image-zoom-container rounded-xl overflow-hidden shadow-lg h-64"
              >
                <img 
                  src={`https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg`}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/our-work">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                View All Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-lavender-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Happy Customers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/15841148/pexels-photo-15841148.jpeg" 
                  alt="Priya & Arjun"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                  "Event Ustaad made our dream wedding come true. Every detail was perfect. Their team handled everything seamlessly."
                </p>
                <div>
                  <div className="font-medium text-gray-900 text-lg">Priya & Arjun</div>
                  <div className="text-purple-600">Royal Wedding, Udaipur</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/15582310/pexels-photo-15582310.jpeg" 
                  alt="Meera & Vikram"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                  "Working with them was an absolute pleasure. Their creativity transformed our wedding into a fairytale."
                </p>
                <div>
                  <div className="font-medium text-gray-900 text-lg">Meera & Vikram</div>
                  <div className="text-purple-600">Destination Wedding, Jaipur</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to plan your dream event?
          </p>
          <Link to="/contact">
            <Button className="bg-white text-purple-700 hover:bg-purple-50 px-10 py-6 text-xl rounded-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us Today
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewHome;
