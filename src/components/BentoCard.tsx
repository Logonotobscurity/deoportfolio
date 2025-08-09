'use client';

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import MermaidDiagram from './MermaidDiagram';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';

interface BentoCardProps {
  title: string;
  description: string;
  diagram: string;
  className?: string;
}

const BentoCard: FC<BentoCardProps> = ({ title, description, diagram, className }) => {
  return (
    <Card className={cn("bg-card/50 backdrop-blur-sm border border-border/30 shadow-xl hover:shadow-primary/30 transition-shadow duration-300 flex flex-col p-6", className)}>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl font-bold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-0">
        <p className="text-muted-foreground flex-grow text-sm md:text-base">{description}</p>
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="item-1" className="border-t border-border/20 pt-2">
            {/* Ensure the AccordionTrigger button is the interactive element */}
            <AccordionTrigger
 className="text-sm hover:no-underline text-accent [&[data-state=open]>svg]:text-accent"
 aria-label={`Toggle diagram for ${title}`}
            >
              <div className="flex items-center gap-2">
 <Code className="h-4 w-4" aria-hidden="true" /> {/* Hide decorative icon from screen readers */}
                View Diagram
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 p-2 md:p-4 bg-background/50 rounded-lg overflow-x-auto">
                <MermaidDiagram chart={diagram} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default BentoCard;
