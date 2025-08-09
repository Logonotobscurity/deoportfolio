'use client';

import BentoCard from './BentoCard';
import { bentoItems } from '@/lib/data';
import FadeIn from './FadeIn';
import { useEffect } from 'react';
import { useRef } from 'react';

const BentoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && scrollContainerRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        // Calculate scroll progress within the section
        const scrollProgress = Math.max(0, Math.min(1, (scrollY - (sectionTop - windowHeight / 2)) / (sectionHeight - windowHeight / 2)));

        // Calculate horizontal scroll position based on progress
        const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        scrollContainerRef.current.scrollLeft = maxScrollLeft * scrollProgress;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work" className="py-24 sm:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto" ref={sectionRef}> {/* Added ref to the section's main div */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            Impact Stories
          </h2>
        </FadeIn>
        {/* Refactored for horizontal scrolling */}
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
        <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide" ref={scrollContainerRef}> {/* Added padding-bottom for scrollbar */}
          {bentoItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              {/* Adjusted card sizing for horizontal layout */}
              {/* Using min-w and w to control card size based on breakpoints */}
              <div className="flex-none w-64 md:w-80 lg:w-96"> {/* flex-none prevents shrinking */}
                <BentoCard {...item} className={item.className} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
