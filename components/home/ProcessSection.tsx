"use client";

import React from "react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

export function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "CONTATO",
      description: "Você nos apresenta seu espaço, suas necessidades e o que imagina para ele.",
    },
    {
      id: "02",
      title: "ANÁLISE",
      description: "Avaliamos o ambiente, suas características e possibilidades técnicas.",
    },
    {
      id: "03",
      title: "PROJETO",
      description: "Desenvolvemos uma solução paisagística pensada exclusivamente para o espaço.",
    },
    {
      id: "04",
      title: "EXECUÇÃO",
      description: "Transformamos o projeto em realidade com precisão e materiais de alto padrão.",
    },
    {
      id: "05",
      title: "CUIDADO",
      description: "Acompanhamos a evolução do jardim através dos cuidados e manutenção necessários.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <RevealAnimation className="mb-16 md:mb-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Como transformamos seu espaço.
          </h2>
        </RevealAnimation>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <RevealAnimation
                  key={step.id}
                  delay={0.1 * index}
                  direction={isEven ? "left" : "right"}
                  className="relative md:h-40"
                >
                  <div className={`md:absolute md:w-[calc(50%-3rem)] ${isEven ? 'md:left-0 md:text-right' : 'md:right-0 md:text-left'} flex flex-col justify-center h-full`}>
                    
                    {/* Mobile ID indicator (hidden on desktop where we use the center node) */}
                    <div className="md:hidden flex items-center gap-4 mb-3">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-sans text-xs font-bold">
                        {step.id}
                      </span>
                      <h3 className="font-sans font-semibold tracking-widest text-primary uppercase text-sm">
                        {step.title}
                      </h3>
                    </div>

                    <h3 className="hidden md:block font-sans font-semibold tracking-widest text-primary uppercase text-sm mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-foreground/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Node for Desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-primary/20 rounded-full items-center justify-center z-10 shadow-sm">
                    <span className="font-sans text-xs text-primary font-bold">{step.id}</span>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
