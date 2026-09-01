"use client";

import React from "react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Authority / Numbers */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <RevealAnimation direction="left">
              <div className="relative flex flex-col items-center lg:items-start">
                {/* Decorative background element */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50 blur-3xl z-0" />
                
                <div className="relative z-10 text-center lg:text-left">
                  <span className="font-serif text-8xl md:text-9xl text-primary block leading-none mb-2">
                    200+
                  </span>
                  <span className="font-sans text-xl md:text-2xl text-foreground/60 font-light tracking-wide">
                    jardins transformados
                  </span>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7">
            <RevealAnimation direction="right">
              <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-primary/60 mb-4 block">
                Sobre a Universo
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
                Paisagismo pensado para fazer parte da sua vida.
              </h2>
              <div className="flex flex-col gap-6 font-sans text-lg text-foreground/70 font-light leading-relaxed mb-10">
                <p>
                  A Universo Paisagismo trabalha para transformar áreas externas em espaços que combinam estética, funcionalidade e natureza.
                </p>
                <p>
                  Unimos planejamento, conhecimento técnico, projetos 3D e execução para criar jardins que fazem sentido para cada ambiente.
                </p>
              </div>
              <Link href="/contato">
                <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Conheça a Universo Paisagismo
                </Button>
              </Link>
            </RevealAnimation>
          </div>
          
        </div>
      </div>
    </section>
  );
}
