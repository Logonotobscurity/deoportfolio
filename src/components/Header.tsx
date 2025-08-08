'use client';

import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import FadeIn from './FadeIn';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#work', text: 'Work' },
    { href: '#timeline', text: 'Timeline' },
    { href: '#social', text: 'Social' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <FadeIn>
          <Link href="/">
            <h1 className="text-lg md:text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              Adeola Daramola
            </h1>
          </Link>
        </FadeIn>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <FadeIn key={link.href} delay={0.1 * (index + 1)}>
              <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.text}
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="hidden md:flex items-center gap-4">
          <a href="https://github.com/adeoladaramola" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/adeola-daramola-a537b2123/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="mailto:adeoladaramola911@gmail.com">
             <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </FadeIn>

        {/* Mobile Nav */}
        <div className="md:hidden">
           <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-6 pt-12">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <h1 className="text-xl font-bold text-primary">
                    Adeola Daramola
                  </h1>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="flex items-center gap-6 pt-6">
                  <a href="https://github.com/adeoladaramola" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/adeola-daramola-a537b2123/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a href="mailto:adeoladaramola911@gmail.com">
                     <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
