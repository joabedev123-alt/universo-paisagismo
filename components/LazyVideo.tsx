"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  style?: CSSProperties;
};

// Vídeo em loop/mudo que só baixa e toca quando se aproxima da tela —
// evita carregar vários MB de vídeo logo na abertura da página no celular.
export function LazyVideo({ src, poster, className, style }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (el.getAttribute("src")) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ao receber o src, garante o início da reprodução (alguns navegadores
  // móveis ignoram o autoplay quando o src é atribuído depois da montagem)
  useEffect(() => {
    if (inView) ref.current?.play().catch(() => {});
  }, [inView]);

  return (
    <video
      ref={ref}
      src={inView ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      style={style}
      className={className}
    />
  );
}
