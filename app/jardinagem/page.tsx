import { Metadata } from "next";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ImageCard } from "@/components/ui/ImageCard";

export const metadata: Metadata = {
  title: "Jardinagem e Manutenção de Jardins | Universo Paisagismo",
  description: "A jardinagem mantém o espaço saudável, bonito e preparado para evoluir ao longo das estações.",
};

export default function JardinagemPage() {
  const servicos = [
    "Manutenção preventiva e corretiva",
    "Poda técnica de plantas e árvores",
    "Limpeza e controle de pragas",
    "Adubação e fertilização",
    "Revitalização de jardins antigos",
    "Acompanhamento da evolução vegetal",
  ];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <RevealAnimation>
            <h1 className="font-serif text-4xl md:text-6xl text-primary mb-6 max-w-4xl mx-auto leading-tight">
              Seu jardim bonito começa com cuidado constante.
            </h1>
            <p className="font-sans text-xl text-foreground/80 font-light mb-10 max-w-2xl mx-auto">
              A jardinagem mantém o espaço saudável, bonito e preparado para evoluir ao longo das estações.
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
                <span className="font-sans text-sm tracking-[0.2em] uppercase font-medium text-primary/60 mb-4 block">Cuidados Contínuos</span>
                <h2 className="font-serif text-3xl md:text-4xl text-primary">Nossos serviços</h2>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicos.map((servico, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-sm shadow-sm border border-black/5">
                    <span className="text-secondary font-serif font-bold text-xl">0{index + 1}</span>
                    <span className="font-sans text-foreground/80 font-medium">{servico}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <RevealAnimation className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Por que a manutenção é essencial?</h2>
            <p className="font-sans text-foreground/70 font-light leading-relaxed">
              Um jardim não é uma estrutura estática; ele é vivo. As plantas crescem, o solo perde nutrientes, o clima muda. O nosso trabalho de jardinagem e manutenção vai muito além de varrer folhas: nós garantimos que a concepção original do paisagismo amadureça com saúde, valorizando ainda mais a arquitetura ao longo dos anos.
            </p>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
}
