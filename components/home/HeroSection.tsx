"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - PLACEHOLDER SUBSTITUIR POR CONTEÚDO REAL */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="/images/paisagismo/Sueli%20-%20paisagismo/fotos%20do%20projeto/jardim%206%20(2).png"
          alt="Jardim contemporâneo de alto padrão integrado à arquitetura"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4 text-white/80">
            <span className="w-12 h-px bg-white/50"></span>
            <span className="font-sans text-sm tracking-[0.2em] uppercase">Universo Paisagismo</span>
            <span className="w-12 h-px bg-white/50"></span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Transformamos espaços em experiências.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-white/90 max-w-2xl font-light mb-10"
          >
            Paisagismo, jardinagem e projetos 3D para criar espaços externos únicos, funcionais e vivos.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Solicitar orçamento
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white">
              Conheça nossos projetos
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 text-white font-sans text-sm md:text-base tracking-widest uppercase shadow-xl"
          >
            <MapPin className="w-4 h-4" />
            <span>Belo Horizonte e região metropolitana</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
