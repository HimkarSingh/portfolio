'use client';

import React, {useState, useEffect} from 'react';

import Container from './Container';
import { footerConfig } from '@/config/Footer';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums">
      {time.toLocaleTimeString("en-US", {hour12: true})}
    </span>
  );
}

export default function Footer() {
  return (
    <Container className="pb-16 pt-8">
      <hr className="mb-8 border-t border-border" />
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          &copy; 2026 {footerConfig.developer}. {footerConfig.copyright}
        </p>
        <p className="text-muted-foreground text-sm">
          <Clock />
        </p>
      </div>
    </Container>
  );
}
