import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple, InstagramLogo, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";

const nav = [
  { href: "/sobre", label: "Sobre" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src="/logo/logo verde dourado sem fundo.png"
                  alt="Logo Universo Paisagismo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <p className="font-serif text-xl tracking-tight text-ink">Universo</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                  Paisagismo
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Transformamos espaços em ambientes memoráveis. Mais de duzentos jardins em
              Belo Horizonte e região metropolitana.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
              Navegação
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/80 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
              Contato
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 shrink-0" size={18} weight="bold" />
                <a href="tel:+5531993915033" className="hover:text-ink">
                  (31) 99391-5033
                </a>
              </li>
              <li className="flex items-start gap-2">
                <EnvelopeSimple className="mt-0.5 shrink-0" size={18} weight="bold" />
                <a
                  href="mailto:universopaisagismos@gmail.com"
                  className="break-all hover:text-ink"
                >
                  universopaisagismos@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <InstagramLogo className="mt-0.5 shrink-0" size={18} weight="bold" />
                <a
                  href="https://www.instagram.com/universo_paisagismo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  @universo_paisagismo
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 shrink-0" size={18} weight="bold" />
                <span>Belo Horizonte e região metropolitana</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-end lg:items-end">
            <Link
              href="/contato"
              className="inline-flex w-full items-center justify-center rounded-md bg-brand px-5 py-3 text-sm text-white transition-transform hover:bg-brand-hover active:scale-[0.98] lg:w-auto"
            >
              Pedir orçamento
            </Link>
          </div>
        </div>
        <p className="mt-14 border-t border-line pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Universo Paisagismo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
