import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { youtubeVideos } from '@/lib/data';
import { PlayCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const YouTubeGallery = () => {
  return (
    <FadeIn>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-center text-accent">Conference Talks</h3>
        <div className="grid grid-cols-1 gap-6">
          {youtubeVideos.map((video, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/20 overflow-hidden group hover:border-accent/50 transition-colors">
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-0 flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:w-48 h-32 md:h-28 flex-shrink-0">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        data-ai-hint="conference talk"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <PlayCircle className="h-10 w-10 text-white/80 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="p-4 pt-0 md:pt-4">
                      <h4 className="font-semibold group-hover:text-accent transition-colors">{video.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{video.conference}</p>
                    </div>
                  </CardContent>
                </a>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default YouTubeGallery;
