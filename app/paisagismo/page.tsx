import { Metadata } from "next";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ImageCard } from "@/components/ui/ImageCard";

export const metadata: Metadata = {
  title: "Paisagismo em Belo Horizonte | Universo Paisagismo",
  description: "Criamos jardins personalizados que valorizam o espaço, a arquitetura e a experiência de quem vive nele.",
};

export default function PaisagismoPage() {
  const servicos = [
    "Criação de jardins",
    "Revitalização",
    "Composição vegetal",
    "Integração com arquitetura",
    "Áreas externas residenciais",
    "Áreas externas comerciais",
    "Implantação",
    "Execução de projetos"
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <RevealAnimation>
            <h1 className="font-serif text-4xl md:text-6xl text-primary mb-6 max-w-4xl mx-auto leading-tight">
              Paisagismo que conecta natureza e arquitetura.
            </h1>
            <p className="font-sans text-xl text-foreground/80 font-light mb-10 max-w-2xl mx-auto">
              Criamos jardins personalizados que valorizam o espaço, a arquitetura e a experiência de quem vive nele.
            </p>
            <Link href="/contato">
              <Button variant="primary" size="lg">Solicitar orçamento</Button>
            </Link>
          </RevealAnimation>
        </div>
      </section>

      {/* Serviços List */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <RevealAnimation>
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-primary/60 mb-4 block">Nossa Expertise</span>
                <h2 className="font-serif text-3xl md:text-4xl text-primary">O que fazemos</h2>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicos.map((servico, index) => (
                  <div key={index} className="flex items-center gap-4 border-b border-muted pb-4">
                    <span className="text-primary font-serif font-bold">0{index + 1}</span>
                    <span className="font-sans text-foreground/80">{servico}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Tipos de Ambientes Gallery */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <RevealAnimation className="mb-16">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Tipos de Ambientes</h2>
            <p className="font-sans text-white/80 max-w-xl font-light">Projetamos e executamos áreas verdes para diferentes contextos, sempre respeitando a essência de cada lugar.</p>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealAnimation delay={0.1}>
              <ImageCard 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=800&auto=format&fit=crop" // PLACEHOLDER
                alt="Paisagismo Residencial"
                title="Residencial"
                subtitle="Casas e condomínios"
                aspectRatio="landscape"
                className="w-full rounded-sm"
              />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <ImageCard 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" // PLACEHOLDER
                alt="Paisagismo Comercial"
                title="Comercial"
                subtitle="Empresas e lojas"
                aspectRatio="landscape"
                className="w-full rounded-sm"
              />
            </RevealAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
