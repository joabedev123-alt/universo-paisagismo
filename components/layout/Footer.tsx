import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-2">
              <img src="/images/logo/logo%20verde%20dourado%20sem%20fundo.png" alt="Universo Paisagismo" className="w-[114px] transition-opacity group-hover:opacity-80" />
            </Link>
            <p className="text-white/80 max-w-sm font-sans font-light">
              Transformando espaços em experiências através da natureza e arquitetura.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl text-muted">Navegação</h4>
            <ul className="flex flex-col gap-3 font-sans font-light text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/paisagismo" className="hover:text-white transition-colors">Paisagismo</Link></li>
              <li><Link href="/jardinagem" className="hover:text-white transition-colors">Jardinagem</Link></li>
              <li><Link href="/projetos-3d" className="hover:text-white transition-colors">Projetos 3D</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl text-muted">Contato</h4>
            <ul className="flex flex-col gap-4 font-sans font-light text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                <span>(31) 99391-5033</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                <a href="mailto:universopaisagismos@gmail.com" className="hover:text-white transition-colors">
                  universopaisagismos@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                <span>Belo Horizonte e<br/>região metropolitana</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-xl text-muted">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/universo_paisagismo" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans font-light text-white/60">
          <p>© {new Date().getFullYear()} Universo Paisagismo. Todos os direitos reservados.</p>
          <p>Belo Horizonte, MG - Brasil</p>
        </div>
      </div>
    </footer>
  );
}
