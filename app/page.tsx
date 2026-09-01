import { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { StatementSection } from "@/components/home/StatementSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Project3DSection } from "@/components/home/Project3DSection";
import { TransformationsSection } from "@/components/home/TransformationsSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Universo Paisagismo | Paisagismo, Jardinagem e Projetos 3D",
  description: "Paisagismo, jardinagem, projetos 3D e execução de jardins em Belo Horizonte e região. Transformamos espaços externos em ambientes únicos.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatementSection />
      <ServicesSection />
      <Project3DSection />
      <TransformationsSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <CtaSection />
    </main>
  );
}
