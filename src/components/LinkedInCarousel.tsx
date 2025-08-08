'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { linkedinPosts } from '@/lib/data';
import FadeIn from './FadeIn';

const LinkedInCarousel = () => {
  return (
    <FadeIn>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center text-primary">LinkedIn Feed</h3>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {linkedinPosts.map((post, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/20">
                    <CardContent className="flex flex-col items-start gap-4 p-6">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="https://placehold.co/40x40.png" alt="Adeola Daramola" data-ai-hint="man portrait" />
                          <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Adeola Daramola</p>
                          <p className="text-xs text-muted-foreground">{post.time}</p>
                        </div>
                      </div>
                      <p className="text-sm text-foreground/90">{post.content}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </FadeIn>
  );
};

export default LinkedInCarousel;
