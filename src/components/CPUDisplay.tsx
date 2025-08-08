'use client';

import { useState, useEffect } from 'react';
import { Badge } from './ui/badge';

const CPUDisplay = () => {
  const [cpuUsage, setCpuUsage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate WebSocket data for CPU usage
      const newUsage = Math.floor(Math.random() * (25 - 5 + 1) + 5);
      setCpuUsage(newUsage);
    }, 2000);

    // Initial value
    setCpuUsage(Math.floor(Math.random() * (25 - 5 + 1) + 5));

    return () => clearInterval(interval);
  }, []);

  return (
    <Badge
      variant="outline"
      className="bg-background/30 backdrop-blur-sm border-primary/30 text-primary transition-all duration-300"
    >
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      K8s Cluster CPU: {cpuUsage}%
    </Badge>
  );
};

export default CPUDisplay;
