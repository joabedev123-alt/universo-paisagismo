"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Paisagismo", href: "/paisagismo" },
  { name: "Jardinagem", href: "/jardinagem" },
  { name: "Projetos 3D", href: "/projetos-3d" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 bg-transparent py-2"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 z-10">
          <img src="/images/logo/logo%20verde%20dourado%20sem%20fundo.png" alt="Universo Paisagismo" className="w-[114px] transition-opacity group-hover:opacity-80" />
        </Link>

        {/* Desktop Nav Links (Centered) */}
        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 z-0">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-white hover:text-white/80 transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center z-10">
          <Button variant="primary" size="sm">
            Solicitar orçamento
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background flex flex-col pt-24 px-6 pb-6"
          >
            <button
              className="absolute top-6 right-6 text-foreground p-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-8 text-center mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-serif text-3xl text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Button variant="primary" size="lg" className="w-full">
                  Solicitar orçamento
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
