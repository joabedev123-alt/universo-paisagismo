import { Metadata } from "next";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projeto de Paisagismo 3D | Universo Paisagismo",
  description: "Transformamos ideias em representação visual para que você enxergue o potencial do espaço antes da execução.",
};

export default function Projetos3dPage() {
  const beneficios = [
    "Visualizar o resultado com antecedência",
    "Entender a composição e proporções",
    "Testar ideias e materiais",
    "Facilitar a tomada de decisões",
    "Alinhar expectativas e evitar surpresas",
    "Planejar a execução com maior precisão"
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <RevealAnimation>
            <h1 className="font-serif text-4xl md:text-6xl text-primary mb-6 max-w-4xl mx-auto leading-tight">
              Visualize seu jardim antes de construí-lo.
            </h1>
            <p className="font-sans text-xl text-foreground/80 font-light mb-10 max-w-2xl mx-auto">
              Transformamos ideias em uma representação visual realista para que você possa enxergar o potencial máximo do espaço antes do primeiro dia de execução.
            </p>
            <Link href="/contato">
              <Button variant="primary" size="lg">Solicitar projeto 3D</Button>
            </Link>
          </RevealAnimation>
        </div>
      </section>

      {/* 3D vs Reality */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <RevealAnimation className="text-center mb-16">
            <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-primary/60 mb-4 block">Segurança</span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Do Render à Realidade</h2>
            <p className="font-sans text-foreground/70 font-light max-w-2xl mx-auto">
              Compare como nosso nível de detalhamento no modelo 3D reflete exatamente o que será entregue na obra final.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.2} className="max-w-4xl mx-auto shadow-2xl rounded-sm overflow-hidden">
             <BeforeAfter 
               beforeImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" // PLACEHOLDER RENDER
               afterImage="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=1200&auto=format&fit=crop" // PLACEHOLDER EXECUTADO
               beforeAlt="Renderização 3D do Projeto"
               afterAlt="Jardim Executado"
               aspectRatio="landscape"
             />
          </RevealAnimation>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <RevealAnimation>
              <h2 className="font-serif text-3xl md:text-5xl mb-8">Por que investir no Projeto 3D?</h2>
              <p className="font-sans text-white/80 font-light leading-relaxed max-w-lg mb-8">
                Um projeto paisagístico não é algo que se muda facilmente depois de pronto. O desenvolvimento 3D é uma etapa vital que economiza tempo, otimiza o orçamento e tranquiliza você.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {beneficios.map((beneficio, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-sans text-white/90 font-light">{beneficio}</span>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
