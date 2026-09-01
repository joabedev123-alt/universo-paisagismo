"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContatoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after some time
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl shadow-black/5 rounded-sm border border-black/5">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block font-sans text-sm text-foreground/70 mb-2">Nome Completo</label>
              <input required type="text" id="name" className="w-full h-12 border-b border-muted bg-transparent focus:border-primary focus:outline-none transition-colors font-sans" placeholder="Como devemos chamar você?" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="whatsapp" className="block font-sans text-sm text-foreground/70 mb-2">WhatsApp</label>
                <input required type="tel" id="whatsapp" className="w-full h-12 border-b border-muted bg-transparent focus:border-primary focus:outline-none transition-colors font-sans" placeholder="(31) 90000-0000" />
              </div>
              <div>
                <label htmlFor="email" className="block font-sans text-sm text-foreground/70 mb-2">E-mail</label>
                <input required type="email" id="email" className="w-full h-12 border-b border-muted bg-transparent focus:border-primary focus:outline-none transition-colors font-sans" placeholder="seu@email.com" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block font-sans text-sm text-foreground/70 mb-2">Tipo de Serviço</label>
              <select required id="service" defaultValue="" className="w-full h-12 border-b border-muted bg-transparent focus:border-primary focus:outline-none transition-colors font-sans cursor-pointer">
                <option value="" disabled>Selecione uma opção</option>
                <option value="paisagismo">Paisagismo</option>
                <option value="jardinagem">Jardinagem / Manutenção</option>
                <option value="projeto3d">Projeto 3D</option>
                <option value="revitalizacao">Revitalização</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block font-sans text-sm text-foreground/70 mb-2">Conte um pouco sobre seu projeto</label>
              <textarea required id="details" rows={4} className="w-full border-b border-muted bg-transparent focus:border-primary focus:outline-none transition-colors font-sans resize-none py-2" placeholder="Descreva brevemente o que você imagina para o espaço..." />
            </div>

            <Button type="submit" variant="primary" className="w-full mt-4" isLoading={isSubmitting} rightIcon={!isSubmitting && <Send className="w-4 h-4" />}>
              Enviar solicitação
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center h-[500px]"
          >
            <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-primary mb-4">Solicitação enviada!</h3>
            <p className="font-sans text-foreground/70 font-light">
              Agradecemos o seu contato. Nossa equipe avaliará os detalhes e retornará pelo WhatsApp ou E-mail o mais breve possível.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
