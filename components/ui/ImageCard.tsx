"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "landscape";
}

export function ImageCard({
  src,
  alt,
  title,
  subtitle,
  className,
  aspectRatio = "portrait",
}: ImageCardProps) {
  const aspectRatios = {
    square: "aspect-square",
    video: "aspect-video",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
  };

  return (
    <motion.div
      whileHover="hover"
      className={cn(
        "relative overflow-hidden group cursor-pointer",
        aspectRatios[aspectRatio],
        className
      )}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text Content */}
      {(title || subtitle) && (
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          {title && (
            <motion.h4
              variants={{
                initial: { y: 20, opacity: 0 },
                hover: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-white font-serif text-xl md:text-2xl"
            >
              {title}
            </motion.h4>
          )}
          {subtitle && (
            <motion.p
              variants={{
                initial: { y: 20, opacity: 0 },
                hover: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="text-white/80 font-sans text-sm mt-1 uppercase tracking-wider"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
    </motion.div>
  );
}
