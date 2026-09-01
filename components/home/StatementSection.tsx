"use client";

import React from "react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

export function StatementSection() {
  return (
    <section className="py-24 md:py-32 bg-background flex items-center justify-center text-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <RevealAnimation delay={0.1}>
            <div className="mb-8 flex items-center gap-4 text-primary/60">
              <span className="w-12 h-px bg-primary/30"></span>
              <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium">
                Paisagismo como Experiência
              </span>
              <span className="w-12 h-px bg-primary/30"></span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary leading-[1.1] mb-12">
              Mais do que jardins, <br className="hidden md:block" />
              criamos espaços para viver.
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="font-sans text-lg md:text-2xl text-foreground/80 font-light leading-relaxed max-w-3xl mx-auto">
              A Universo Paisagismo une planejamento, projeto, execução e cuidado para 
              transformar áreas externas em ambientes que valorizam a arquitetura e a 
              experiência de quem vive neles.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
