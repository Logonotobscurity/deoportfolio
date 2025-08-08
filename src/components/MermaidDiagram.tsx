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
      theme: 'dark',
      darkMode: true,
      securityLevel: 'loose',
      themeVariables: {
        background: '#0A0A0B',
        primaryColor: '#111214',
        primaryTextColor: '#F5F5F5',
        lineColor: '#FF007A',
        textColor: '#F5F5F5',
        mainBkg: '#00E5FF22',
        primaryBorderColor: '#00E5FF',
        secondaryColor: '#FF007A22',
        secondaryBorderColor: '#FF007A'
      }
    });

    const renderMermaid = async () => {
      if (ref.current) {
        try {
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
      <div className="flex items-center justify-center p-8">
        <p className="text-muted-foreground">Loading diagram...</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="mermaid-container"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
