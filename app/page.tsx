import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Cube,
  Leaf,
  MapPin,
  Plant,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { HeroLandscape3D } from "@/components/HeroLandscape3D";
import { Reveal } from "@/components/Reveal";
import { PortfolioFigure } from "@/components/PortfolioFigure";
import { portfolioItems } from "@/lib/portfolio";

const pillars = [
  {
    title: "Atendimento personalizado",
    body: "Cada projeto nasce do seu ritmo, da arquitetura da casa e do uso do espaço.",
    icon: Sparkle,
  },
  {
    title: "Materiais e plantas selecionados",
    body: "Espécies adequadas ao clima de BH, solo e manutenção que você consegue sustentar.",
    icon: Leaf,
  },
  {
    title: "Equipe especializada",
    body: "Paisagismo e jardinagem com experiência em obras residenciais e comerciais.",
    icon: Plant,
  },
  {
    title: "Do projeto à manutenção",
    body: "Planejamento, execução e suporte para o jardim evoluir bem nos primeiros meses.",
    icon: MapPin,
  },
];

export default function HomePage() {
  const preview = portfolioItems.slice(0, 3);

  return (
    <>
      <HeroLandscape3D>
        <Reveal>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-brand md:text-base">
            Belo Horizonte e região
          </p>
          <h1 className="mt-4 font-serif text-[2.65rem] leading-[1.05] tracking-tight text-ink md:text-6xl md:leading-[1.02]">
            Transforme seu jardim em ambiente de destaque
          </h1>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            Projetos sob medida, execução cuidadosa e manutenção. Visualização em 3D para
            decidir com calma antes da primeira pá no terreno.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition-transform hover:bg-brand-hover active:scale-[0.98]"
            >
              Pedir orçamento
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink underline-offset-4 hover:underline"
            >
              Ver portfólio
              <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </HeroLandscape3D>
      <div className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-line px-5 py-10 md:px-8">
          <div className="px-2 text-center md:px-6">
            <p className="font-mono text-2xl tracking-tight text-ink md:text-3xl">200+</p>
            <p className="mt-1 text-xs text-muted md:text-sm">Jardins realizados</p>
          </div>
          <div className="px-2 text-center md:px-6">
            <p className="font-mono text-2xl tracking-tight text-ink md:text-3xl">BH</p>
            <p className="mt-1 text-xs text-muted md:text-sm">e região metropolitana</p>
          </div>
          <div className="px-2 text-center md:px-6">
            <p className="font-mono text-2xl tracking-tight text-ink md:text-3xl">3D</p>
            <p className="mt-1 text-xs text-muted md:text-sm">Estudo visual completo</p>
          </div>
        </div>
      </div>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Sobre</p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
                Menos fórmula pronta. Mais terreno real.
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
                Somos especialistas em projetos paisagísticos, revitalização, manutenção e
                criação de jardins residenciais e comerciais. Nossa missão é traduzir solo,
                luz e uso em um desenho coerente.
              </p>
              <Link
                href="/sobre"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                Conhecer o estúdio
                <ArrowRight size={18} weight="bold" aria-hidden />
              </Link>
            </Reveal>
            <Reveal delayMs={100} className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-white/70 p-2 shadow-[0_12px_40px_rgba(61,111,86,0.12)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-line/30">
                  <Image
                    src="/portfolio/01.jpeg"
                    alt="Paisagismo e criação de jardins — Universo Paisagismo"
                    width={1600}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Como trabalhamos
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
              Clareza em cada etapa
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delayMs={i * 60}>
                  <div className="h-full border border-line bg-canvas p-8 transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-10">
                    <Icon className="text-ink" size={28} weight="bold" aria-hidden />
                    <h3 className="mt-6 text-lg font-medium tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6 lg:order-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Visualização
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
                Veja o jardim antes da obra
              </h2>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
                Entregamos planta humanizada em 3D: escala, materiais, vegetação e iluminação
                com leitura simples para quem não é do ramo técnico.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-ink/85">
                <li className="flex gap-3">
                  <Cube className="shrink-0 text-accent" size={22} weight="bold" />
                  <span>
                    <strong className="font-medium text-ink">Cena realista</strong> — luz e
                    textura próximas do resultado final.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Cube className="shrink-0 text-accent" size={22} weight="bold" />
                  <span>
                    <strong className="font-medium text-ink">Detalhamento</strong> — pedras,
                    mobiliário externo, pontos de irrigação.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Cube className="shrink-0 text-accent" size={22} weight="bold" />
                  <span>
                    <strong className="font-medium text-ink">Integração</strong> — fachada,
                    sombra e circulação caminham juntos.
                  </span>
                </li>
              </ul>
              <Link
                href="/contato"
                className="mt-10 inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.98]"
              >
                Solicitar estudo 3D
              </Link>
            </Reveal>
            <Reveal delayMs={80} className="lg:col-span-6 lg:order-1">
              <PortfolioFigure
                seed="up-3d-render"
                alt="Renderização de projeto paisagístico em perspectiva — Universo Paisagismo"
                className="aspect-square rounded-xl border border-line md:aspect-[5/6]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Portfólio
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
                Obras recentes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Cada entrega reflete o jeito de morar ou trabalhar de quem nos contratou.
              </p>
            </Reveal>
            <Reveal>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                Portfólio completo
                <ArrowRight size={18} weight="bold" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {preview.map((item, i) => (
              <Reveal key={item.slug} delayMs={i * 70}>
                <article className="group flex h-full flex-col border border-line bg-canvas">
                  <PortfolioFigure
                    seed={item.imageSeed}
                    alt={`${item.title} — projeto Universo Paisagismo`}
                    className="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex w-fit rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      {item.tag}
                    </span>
                    <h3 className="mt-4 font-medium tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Planos</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
              Escolha o ritmo do projeto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Três entradas com escopo claro. Ajustamos combinações conforme sua área e
              prazo.
            </p>
          </Reveal>
          <div className="mt-12">
            <Link
              href="/planos"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition-transform hover:bg-brand-hover active:scale-[0.98]"
            >
              Comparar planos
              <ArrowRight size={18} weight="bold" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
