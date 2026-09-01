"use client";

import React from "react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center text-center">
      {/* Background Image - PLACEHOLDER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Paisagismo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12">
        <RevealAnimation>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Seu próximo espaço começa aqui.
            </h2>
            <p className="font-sans text-xl text-white/80 font-light mb-12">
              Conte para nós o que você imagina para o seu espaço.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/contato" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                  Solicitar orçamento
                </Button>
              </Link>
              <a href="https://wa.me/5531993915033" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full text-white border-white hover:bg-white/10">
                  Falar pelo WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
