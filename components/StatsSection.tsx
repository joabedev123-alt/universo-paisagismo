"use client";

import { useEffect, useRef, useState } from "react";

export function StatsSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = 200;
          const duration = 1600;
          const stepTime = 16;
          const totalSteps = duration / stepTime;
          const increment = end / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="border-y border-line/70 bg-gradient-to-r from-warmwhite via-offwhite to-warmwhite shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-sand/50 px-5 py-12 md:py-16 md:px-8">
        <div className="px-3 text-center md:px-8 group transition-transform duration-300 hover:-translate-y-1">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-terracotta font-medium">
            {count}+
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted md:text-sm font-medium">
            Jardins realizados
          </p>
        </div>
        <div className="px-3 text-center md:px-8 group transition-transform duration-300 hover:-translate-y-1">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-gold font-medium">
            BH
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted md:text-sm font-medium">
            e região metropolitana
          </p>
        </div>
        <div className="px-3 text-center md:px-8 group transition-transform duration-300 hover:-translate-y-1">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-terracotta font-medium">
            3D
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted md:text-sm font-medium">
            Estudo visual completo
          </p>
        </div>
      </div>
    </div>
  );
}
