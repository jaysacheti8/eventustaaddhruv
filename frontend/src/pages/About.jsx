import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { destinations } from '../mockData';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/15964930/pexels-photo-15964930.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/60" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            From hostel roommates to business partners, creating magic since 2018
          </p>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-purple-500 font-medium tracking-wider uppercase text-sm">The Beginning</span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                From Hostel Roommates<br />to Business Partners
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Event Ustaad was born from a friendship that began in college. Anmol and Shrishti, once hostel roommates, discovered their shared passion for creating memorable experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In 2018, what started as helping friends plan their celebrations transformed into a full-fledged event management company. Today, with over 10 years of combined industry experience, they lead a team dedicated to bringing dreams to life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Their philosophy is simple: every event should be elegant, meaningful, and flawlessly executed. Whether it's an intimate wedding ceremony or a large corporate gathering, Event Ustaad treats each celebration with the same level of care and creativity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/15841148/pexels-photo-15841148.jpeg" 
                    alt="Wedding celebration" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/33552016/pexels-photo-33552016.jpeg" 
                    alt="Couple moment" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-lavender-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover-lift border-purple-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={28} />
                </div>
                <div className="text-4xl font-light text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-purple-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={28} />
                </div>
                <div className="text-4xl font-light text-purple-600 mb-2">65+</div>
                <div className="text-gray-600">Wedding Couples Served</div>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-purple-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-purple-600" size={28} />
                </div>
                <div className="text-4xl font-light text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Destinations Covered</div>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-purple-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={28} />
                </div>
                <div className="text-4xl font-light text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">Events Executed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that every event tells a story. Our mission is to create elegant, meaningful, and well-executed experiences that leave lasting impressions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From the first consultation to the final farewell, we work closely with our clients to understand their vision and bring it to life with creativity, precision, and heart.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-400 via-purple-300 to-lavender-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together
          </p>
          <Link to="/contact">
            <Button className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg rounded-md shadow-lg hover-lift">
              Get In Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
