import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef} className="inline-block">
      {count}{suffix}
    </span>
  );
};

const EventsCreatedSection = () => {
  const stats = [
    { number: 300, suffix: '+', label: 'Weddings' },
    { number: 150, suffix: '+', label: 'Corporate Events' },
    { number: 10, suffix: '+', label: 'Years Experience' },
    { number: 50, suffix: '+', label: 'Destinations' }
  ];

  return (
    <section className="py-24 bg-[#C6A75E] relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Events We've Created
          </h2>
          <div className="w-24 h-[1px] bg-white/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-500"
              style={{ animation: `fadeInScale 0.8s ease-out ${index * 0.15}s both` }}
            >
              <div className="text-6xl md:text-8xl font-light text-white mb-4">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xl md:text-2xl text-white/90 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default EventsCreatedSection;