'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import FadeIn from './FadeIn';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <FadeIn>
          <Link href="/">
            <h1 className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              Adeola Daramola
            </h1>
          </Link>
        </FadeIn>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <FadeIn delay={0.1}><Link href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</Link></FadeIn>
          <FadeIn delay={0.2}><Link href="#timeline" className="text-muted-foreground hover:text-foreground transition-colors">Timeline</Link></FadeIn>
          <FadeIn delay={0.3}><Link href="#social" className="text-muted-foreground hover:text-foreground transition-colors">Social</Link></FadeIn>
          <FadeIn delay={0.4}><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></FadeIn>
        </div>
        <FadeIn delay={0.5}>
          <div className="flex items-center gap-4">
            <a href="https://github.com/adeoladaramola" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/adeola-daramola-a537b2123/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="mailto:adeoladaramola911@gmail.com">
               <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </FadeIn>
      </nav>
    </header>
  );
};

export default Header;
