'use client';

import { useState, useEffect } from 'react';
import { Badge } from './ui/badge';

const CPUDisplay = () => {
  const [cpuUsage, setCpuUsage] = useState(0);

  useEffect(() => {
    // Replace with your WebSocket endpoint
    const websocketUrl = 'wss://api.deoportfolio.vercel.app/cpu'; 
    const ws = new WebSocket(websocketUrl);

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      // Assuming the message data is the CPU usage as a string or number
      try {
        const data = JSON.parse(event.data as string);
        if (typeof data.cpu === 'number') {
          setCpuUsage(data.cpu);
        }
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = (event) => {
      if (event.wasClean) {
        console.log(`WebSocket closed cleanly, code=${event.code} reason=${event.reason}`);
      } else {
        console.error('WebSocket connection died');
      }
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <Badge
      variant="outline"
      className="bg-background/30 backdrop-blur-sm border-primary/30 text-primary transition-all duration-300 px-4 py-2 text-base"
    >
      <span className="relative flex h-2 w-2 mr-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" aria-hidden="true"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" aria-hidden="true"></span>
      </span>
      K8s Cluster CPU: {cpuUsage}%
    </Badge>
  );
};

export default CPUDisplay;
