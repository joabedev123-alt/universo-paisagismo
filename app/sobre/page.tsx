import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { PortfolioFigure } from "@/components/PortfolioFigure";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Equipe Universo Paisagismo: projetos, execução e manutenção de jardins em Belo Horizonte.",
};

const beliefs = [
  "Diálogo contínuo com o cliente e com a obra",
  "Plantas compatíveis com microclima e manutenção real",
  "Cronograma transparente e visitas alinhadas",
  "Documentação clara para execução e pós-obra",
];

export default function SobrePage() {
  return (
    <div className="border-b border-line">
      <section className="border-b border-line py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Sobre</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-tight text-ink md:text-6xl md:leading-[1.05]">
              Universo Paisagismo
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Atuamos em Belo Horizonte e região metropolitana com foco em projeto
              paisagístico, revitalização de áreas externas, execução e manutenção de jardins
              residenciais e comerciais.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:items-start md:gap-16 md:px-8">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
              O que nos guia
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Queremos que cada espaço externo tenha identidade, sombra no ponto certo e
              vegetação que envelhece bem. Por isso combinamos estudo de solo, iluminação
              natural, escolha de espécies e detalhes de acabamento em um único fluxo de
              trabalho.
            </p>
            <ul className="mt-10 space-y-4">
              {beliefs.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-ink/90">
                  <CheckCircle
                    className="mt-0.5 shrink-0 text-accent"
                    size={20}
                    weight="bold"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href="/contato"
              className="mt-12 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition-transform hover:bg-brand-hover active:scale-[0.98]"
            >
              Falar com a equipe
              <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          </Reveal>
          <Reveal delayMs={100}>
            <PortfolioFigure
              seed="up-sobre-team"
              alt="Área verde com projeto paisagístico executado — Universo Paisagismo"
              className="aspect-[4/5] rounded-xl border border-line md:sticky md:top-28"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
