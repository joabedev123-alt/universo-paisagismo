"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { House, List, X } from "@phosphor-icons/react";

const nav = [
  { href: "/", label: "Início", icon: House },
  { href: "/sobre", label: "Sobre" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-canvas/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:h-24 md:px-8">
        {/* Logo à esquerda */}
        <Link
          href="/"
          className="group z-10 flex items-center gap-3.5 leading-none"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-16 w-16 flex-shrink-0 md:h-20 md:w-20 animate-spin-horizontal">
            <Image
              src="/logo/logo verde dourado sem fundo.png"
              alt="Logo Universo Paisagismo"
              fill
              sizes="80px"
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-ink md:text-2xl">
              Universo
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Paisagismo
            </span>
          </div>
        </Link>

        {/* Links de navegação centralizados com ícone de Início */}
        <nav
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 lg:gap-9"
          aria-label="Principal"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ease-out hover:text-ink ${
                  active ? "text-ink font-semibold" : "text-muted"
                }`}
              >
                {Icon ? (
                  <Icon
                    size={17}
                    weight={active ? "fill" : "regular"}
                    className={active ? "text-brand" : "text-muted"}
                  />
                ) : null}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Botão de Orçamento à direita */}
        <div className="hidden md:flex items-center z-10">
          <Link
            href="/contato"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-transform duration-200 ease-out hover:bg-brand-hover active:scale-[0.98] shadow-sm"
          >
            Orçamento grátis
          </Link>
        </div>

        {/* Botão de Menu Mobile */}
        <button
          type="button"
          className="z-10 flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-canvas px-5 py-6 md:hidden"
        >
          <div className="flex flex-col items-center text-center gap-4">
            {nav.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-2 text-lg font-medium ${
                    active ? "text-brand font-semibold" : "text-ink"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {Icon ? <Icon size={20} weight={active ? "fill" : "regular"} /> : null}
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Link
              href="/contato"
              className="mt-2 w-full rounded-md bg-brand py-3 text-center text-sm font-medium text-white hover:bg-brand-hover"
              onClick={() => setOpen(false)}
            >
              Orçamento grátis
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
