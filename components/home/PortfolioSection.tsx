"use client";

import React from "react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { ImageCard } from "@/components/ui/ImageCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Casa Alphaville",
      subtitle: "Paisagismo • Nova Lima",
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2",
      aspect: "portrait"
    },
    {
      id: 2,
      title: "Residência Pousada",
      subtitle: "Execução 3D",
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      aspect: "square"
    },
    {
      id: 3,
      title: "Jardim de Inverno",
      subtitle: "Jardinagem Interna",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      aspect: "square"
    },
    {
      id: 4,
      title: "Fachada Contemporânea",
      subtitle: "Paisagismo Integrado",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-1",
      aspect: "landscape"
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <RevealAnimation>
            <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-primary/60 mb-4 block">
              Projetos Realizados
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Espaços que já transformamos.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <Link href="/paisagismo">
              <Button variant="outline">Ver portfólio completo</Button>
            </Link>
          </RevealAnimation>
        </div>

        {/* Bento Grid Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <RevealAnimation
              key={project.id}
              delay={0.1 * index}
              className={`${project.span} h-full`}
            >
              <ImageCard
                src={project.image}
                alt={project.title}
                title={project.title}
                subtitle={project.subtitle}
                className="w-full h-full rounded-sm"
                aspectRatio="square" // Overriding since we use CSS grid for sizing
              />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
