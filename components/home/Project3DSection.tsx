"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BeforeAfter } from "@/components/ui/BeforeAfter";

export function Project3DSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col">
            <RevealAnimation direction="left">
              <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-primary/60 mb-4 block">
                Projeto 3D
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                Veja antes de transformar.
              </h2>
              <p className="font-sans text-xl text-foreground/80 font-light mb-8">
                Antes de executar, visualizamos.
              </p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-10 max-w-lg">
                Através de projetos 3D realistas, você visualiza o resultado antes mesmo da primeira etapa da execução. Isso traz segurança para aprovar cada detalhe e garante que o jardim executado seja exatamente o que você sonhou.
              </p>
              
              <Link href="/projetos-3d">
                <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Conheça nossos projetos 3D
                </Button>
              </Link>
            </RevealAnimation>
          </div>

          {/* 3D vs Real */}
          <div className="relative">
            <RevealAnimation direction="right" delay={0.2}>
              <div className="relative rounded-sm overflow-hidden shadow-2xl">
                {/* 
                  Aqui usamos o slider, mas focando em "Projeto 3D" (Antes) e "Resultado Executado" (Depois).
                  PLACEHOLDER SUBSTITUIR POR CONTEÚDO REAL.
                */}
                <BeforeAfter
                  beforeImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
                  afterImage="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=1000&auto=format&fit=crop"
                  beforeAlt="Renderização 3D do Projeto"
                  afterAlt="Jardim Executado"
                  aspectRatio="square"
                />
              </div>
              
              {/* Floating Labels */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 shadow-xl border border-black/5 rounded-sm max-w-[200px] hidden md:block">
                <div className="font-serif text-lg text-primary mb-1">Precisão Absoluta</div>
                <div className="font-sans text-xs text-foreground/60 leading-tight">Do render à realidade com fidelidade.</div>
              </div>
            </RevealAnimation>
          </div>
          
        </div>
      </div>
    </section>
  );
}
