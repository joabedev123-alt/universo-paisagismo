"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const nav = [
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
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-lg tracking-tight text-ink md:text-xl">
            Universo
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
            Paisagismo
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-200 ease-out hover:text-ink ${
                  active ? "text-ink" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contato"
            className="rounded-md bg-brand px-4 py-2 text-sm text-white transition-transform duration-200 ease-out hover:bg-brand-hover active:scale-[0.98]"
          >
            Orçamento grátis
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-canvas px-5 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="mt-2 rounded-md bg-brand py-3 text-center text-sm text-white hover:bg-brand-hover"
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
