"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Paisagismo",
      description: "Criamos e executamos jardins personalizados, integrando vegetação, arquitetura e características de cada espaço.",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop", // PLACEHOLDER SUBSTITUIR POR CONTEÚDO REAL
      link: "/paisagismo",
      cta: "Conhecer paisagismo",
    },
    {
      id: "02",
      title: "Jardinagem",
      description: "Cuidamos da manutenção e revitalização dos jardins para preservar sua beleza, saúde e evolução ao longo do tempo.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", // PLACEHOLDER
      link: "/jardinagem",
      cta: "Conhecer jardinagem",
    },
    {
      id: "03",
      title: "Projetos 3D",
      description: "Visualizamos o jardim antes da execução para que você possa compreender o resultado e tomar decisões com mais segurança.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop", // PLACEHOLDER
      link: "/projetos-3d",
      cta: "Conhecer projetos 3D",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <RevealAnimation>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-primary/60 mb-4 block">
                O que fazemos
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary">
                Do projeto à transformação.
              </h2>
            </div>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {services.map((service, index) => (
            <RevealAnimation key={service.id} delay={0.2 + index * 0.1}>
              <Link href={service.link} className="group block w-full h-full">
                <div className="flex flex-col h-full bg-white rounded-sm overflow-hidden border border-black/5 hover:shadow-xl transition-shadow duration-500">
                  {/* Image Container with Hover Scale */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="font-sans text-xs text-primary/50 font-bold mb-3 block">
                      {service.id}
                    </span>
                    <h3 className="font-serif text-2xl text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="font-sans text-foreground/70 font-light mb-8 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary mt-auto">
                      <span className="group-hover:underline underline-offset-4 decoration-primary/30">
                        {service.cta}
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
