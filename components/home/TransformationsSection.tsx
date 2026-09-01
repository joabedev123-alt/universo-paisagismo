"use client";

import React from "react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function TransformationsSection() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <RevealAnimation>
            <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-white/60 mb-4 block">
              Transformações
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              O resultado fala por si.
            </h2>
            <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto font-light">
              Deslize para ver como áreas sem uso e jardins antigos se transformam em espaços extraordinários.
            </p>
          </RevealAnimation>
        </div>

        <div className="max-w-5xl mx-auto">
          <RevealAnimation delay={0.2} direction="up">
            <div className="bg-white/5 p-2 rounded-sm backdrop-blur-sm border border-white/10">
              <BeforeAfter
                beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop" // PLACEHOLDER
                afterImage="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1200&auto=format&fit=crop" // PLACEHOLDER
                aspectRatio="video"
              />
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link href="/paisagismo">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Ver mais transformações
                </Button>
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
