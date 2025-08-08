import { timelineEvents, certifications } from '@/lib/data';
import { Badge } from './ui/badge';
import FadeIn from './FadeIn';

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">
            Career & Learning Path
          </h2>
        </FadeIn>
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0">
          {timelineEvents.map((event, index) => (
            <FadeIn key={event.date} delay={index * 0.1}>
              <details className="mb-10 ml-6 group" open={index === 0}>
                <summary className="flex items-start cursor-pointer list-none">
                  <span className="absolute -left-[9px] flex items-center justify-center w-4 h-4 bg-primary rounded-full ring-8 ring-background"></span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <p className="mt-2 text-primary font-semibold">{event.role}</p>
                    <p className="mt-1 text-foreground/90">
                      {event.achievement}
                    </p>
                  </div>
                   <svg className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-open:rotate-90 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </summary>
                
                {/* This is empty as per the user's design where achievement is in the summary */}
                <div className="mt-4 pl-4 border-l border-border/50 text-muted-foreground">
                  {/* Additional details could go here if needed in the future */}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={timelineEvents.length * 0.1}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-6">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="bg-primary/10 text-primary border border-primary/20 text-sm py-1 px-3">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Timeline;
