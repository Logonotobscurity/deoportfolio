import { Github, Linkedin, Youtube, Mail } from 'lucide-react';
import { Button } from './ui/button';
import FadeIn from './FadeIn';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/adeoladaramola',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adeola-daramola-a537b2123/',
    icon: Linkedin,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: Youtube,
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-surface/50 border-t border-border/10 py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let's Connect</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="mt-8 flex justify-center items-center gap-4">
            <a href="mailto:adeoladaramola911@gmail.com">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                adeoladaramola911@gmail.com
              </Button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4">Or schedule a quick chat:</p>
            <div className="rounded-lg overflow-hidden bg-background h-96 w-full max-w-lg mx-auto">
              {/* Replace with your actual Calendly embed code or component */}
              <div className="w-full h-full flex items-center justify-center border border-dashed border-border">
                <p className="text-muted-foreground">Calendly Widget Placeholder</p>
              </div>
              {/* Example of lazy-loaded iframe for Calendly:
              <iframe
                src="https://calendly.com/YOUR_USERNAME"
                width="100%"
                height="100%"
                loading="lazy"
                title="Calendly scheduling widget"
                className="border-0"
              ></iframe>
              */}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex justify-center space-x-6 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Languages: English (Fluent), Yoruba (Native)</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Adeola Daramola. All Rights Reserved.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
