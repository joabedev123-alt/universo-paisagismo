import { Metadata } from "next";
import React from "react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { Phone, Mail, MapPin } from "lucide-react";
import { ContatoForm } from "@/components/ui/ContatoForm";

export const metadata: Metadata = {
  title: "Contato | Universo Paisagismo",
  description: "Conte para nós o que você imagina. Vamos conversar sobre as possibilidades para o seu jardim.",
};

export default function ContatoPage() {
  return (
    <main className="pt-24 min-h-screen bg-background">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div>
              <RevealAnimation>
                <h1 className="font-serif text-4xl md:text-6xl text-primary mb-6 leading-tight">
                  Vamos transformar seu espaço?
                </h1>
                <p className="font-sans text-xl text-foreground/70 font-light mb-12 max-w-lg">
                  Conte para nós o que você imagina. Vamos conversar sobre as possibilidades para o seu jardim.
                </p>

                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif tracking-widest uppercase text-xs text-primary/50 mb-1">WhatsApp</h4>
                      <a href="https://wa.me/5531993915033" className="font-sans text-xl text-primary hover:text-secondary transition-colors">
                        (31) 99391-5033
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif tracking-widest uppercase text-xs text-primary/50 mb-1">E-mail</h4>
                      <a href="mailto:universopaisagismos@gmail.com" className="font-sans text-lg text-primary hover:text-secondary transition-colors">
                        universopaisagismos@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif tracking-widest uppercase text-xs text-primary/50 mb-1">Atendimento</h4>
                      <span className="font-sans text-primary">
                        Belo Horizonte e região metropolitana — MG
                      </span>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Contact Form */}
            <div>
              <RevealAnimation delay={0.2}>
                <ContatoForm />
              </RevealAnimation>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
