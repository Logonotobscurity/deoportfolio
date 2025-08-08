import BentoCard from './BentoCard';
import { bentoItems } from '@/lib/data';
import FadeIn from './FadeIn';

const BentoSection = () => {
  return (
    <section id="work" className="py-24 sm:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            Impact Stories
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {bentoItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <BentoCard {...item} className={item.className} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
