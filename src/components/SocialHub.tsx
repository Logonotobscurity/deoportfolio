import LinkedInCarousel from './LinkedInCarousel';
import YouTubeGallery from './YouTubeGallery';

const SocialHub = () => {
  // In a real app, you might fetch data here
  // const [posts] = await fetchLinkedIn();
  // const [videos] = await fetchYouTube();

  return (
    <section id="social" className="py-24 sm:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
          Live Feed
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          <LinkedInCarousel />
          <YouTubeGallery />
        </div>
      </div>
    </section>
  );
};

export default SocialHub;
