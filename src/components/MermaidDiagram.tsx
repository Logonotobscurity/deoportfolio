'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

type MermaidProps = {
  chart: string;
};

// Generate a random ID for each diagram
const randomId = () => `mermaid-diagram-${Math.random().toString(36).substring(2, 9)}`;

const MermaidDiagram = ({ chart }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [id] = useState(randomId());
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      darkMode: true,
      securityLevel: 'loose',
      themeVariables: {
        background: 'hsl(var(--background))',
        primaryColor: 'hsl(var(--card))',
        primaryTextColor: 'hsl(var(--foreground))',
        lineColor: 'hsl(var(--primary))',
        textColor: 'hsl(var(--foreground))',
        mainBkg: 'hsl(var(--primary) / 0.1)',
        primaryBorderColor: 'hsl(var(--primary))',
        secondaryColor: 'hsl(var(--accent) / 0.1)',
        secondaryBorderColor: 'hsl(var(--accent))',
        tertiaryColor: 'hsl(var(--card))',
        fontSize: '14px',
        fontFamily: 'Satoshi, sans-serif'
      }
    });

    const renderMermaid = async () => {
      if (ref.current) {
        try {
          // The chart content is wrapped in a div to allow for styling
          const { svg: renderedSvg } = await mermaid.render(id, chart);
          setSvg(renderedSvg);
        } catch (error) {
          console.error('Mermaid rendering failed:', error);
          setSvg('<p class="text-destructive">Failed to render diagram.</p>');
        }
      }
    };
    renderMermaid();
  }, [chart, id]);

  if (!svg) {
    return (
      <div className="flex items-center justify-center p-8 min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="mermaid-container w-full h-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
