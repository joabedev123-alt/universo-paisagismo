"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#DDE5DC] bg-[#F7F8F3]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(23,63,42,0.04)]"
          : "border-b border-transparent bg-[#F7F8F3]/75 backdrop-blur-[2px]"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:h-24 md:px-8">
        {/* Logo à esquerda com proporção elegante e bom espaçamento */}
        <Link
          href="/"
          className="group z-10 flex items-center gap-3.5 leading-none transition-transform duration-300 hover:scale-[1.01]"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-14 w-14 flex-shrink-0 md:h-18 md:w-18">
            <Image
              src="/logo/logo verde verde sem fundo.png"
              alt="Logo Universo Paisagismo"
              fill
              sizes="72px"
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-[#173F2A] md:text-2xl">
              Universo
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#526B45]">
              Paisagismo
            </span>
          </div>
        </Link>

        {/* Links de navegação centralizados em verde escuro com microacento laranja/dourado */}
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
                className={`group relative inline-flex items-center gap-1.5 py-1 text-sm font-medium transition-colors duration-200 ${
                  active ? "text-[#173F2A] font-semibold" : "text-[#173F2A]/80 hover:text-[#173F2A]"
                }`}
              >
                {Icon ? (
                  <Icon
                    size={17}
                    weight={active ? "fill" : "regular"}
                    className={`transition-colors duration-200 ${
                      active ? "text-[#2F6B4F]" : "text-[#526B45] group-hover:text-[#173F2A]"
                    }`}
                  />
                ) : null}
                <span>{item.label}</span>

                {/* Linha fina animada laranja/dourado (#C97832) como microacento */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#C97832] transition-all duration-300 ease-out ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA Minimalista e Premium: Solicitar orçamento ↗ */}
        <div className="hidden md:flex items-center z-10">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2F6B4F] px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_16px_rgba(47,107,79,0.20)] transition-all duration-300 hover:bg-[#C97832] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,120,50,0.30)] active:scale-[0.98]"
          >
            <span>Solicitar orçamento</span>
            <i className="bi bi-arrow-up-right text-xs" aria-hidden="true" />
          </Link>
        </div>

        {/* Botão de Menu Mobile */}
        <button
          type="button"
          className="z-10 flex h-10 w-10 items-center justify-center rounded-md border border-[#DDE5DC] text-[#173F2A] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {/* Menu Mobile com paleta e estilo refinados */}
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[#DDE5DC] bg-[#F7F8F3] px-5 py-6 md:hidden shadow-lg"
        >
          <div className="flex flex-col items-center text-center gap-4">
            {nav.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-2 text-lg font-medium transition-colors ${
                    active ? "text-[#C97832] font-semibold" : "text-[#173F2A]"
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
              className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-lg bg-[#2F6B4F] py-3.5 text-center text-sm font-medium text-white shadow-md transition-all hover:bg-[#C97832]"
              onClick={() => setOpen(false)}
            >
              <span>Solicitar orçamento</span>
              <i className="bi bi-arrow-up-right text-xs" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
