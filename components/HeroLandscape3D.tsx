"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Play,
  Pause,
  SpeakerHigh,
  SpeakerLow,
  SpeakerSlash,
  Sparkle,
} from "@phosphor-icons/react";

type HeroLandscape3DProps = {
  children: ReactNode;
  className?: string;
};

export function HeroLandscape3D({ children, className = "" }: HeroLandscape3DProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [showCenterIcon, setShowCenterIcon] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<string>("9 / 16");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Tenta autoplay mutado
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && video.videoWidth && video.videoHeight) {
      setAspectRatio(`${video.videoWidth} / ${video.videoHeight}`);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    setShowCenterIcon(true);
    setTimeout(() => {
      setShowCenterIcon(false);
    }, 600);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      if (video.volume === 0) {
        video.volume = 0.8;
        setVolume(0.8);
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    const video = videoRef.current;
    setVolume(newVol);

    if (video) {
      video.volume = newVol;
      if (newVol === 0) {
        video.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        video.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <section
      className={`relative border-b border-line bg-canvas/40 pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 ${className}`}
      aria-label="Apresentação principal"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna de Texto e CTAs */}
          <div className="flex flex-col items-center justify-center text-center lg:col-span-7 xl:col-span-7">
            {children}
          </div>

          {/* Coluna do Card de Vídeo com Proporções Exatas */}
          <div className="flex justify-center lg:col-span-5 xl:col-span-5">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] md:max-w-[330px] lg:max-w-[320px] xl:max-w-[340px]">
              {/* Brilho e Efeito Decorativo de Fundo */}
              <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-tr from-brand/20 via-brand-light/10 to-transparent blur-xl" />

              {/* Card Container com Borda e Sombra Refinada */}
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-stone-900/90 p-2 sm:p-2.5 shadow-[0_20px_60px_rgba(61,111,86,0.18)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_25px_70px_rgba(61,111,86,0.25)]">
                
                {/* Badge Superior */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md border border-white/10 shadow-sm pointer-events-none">
                  <Sparkle size={12} weight="fill" className="text-brand-light" />
                  <span>Projeto 3D & Paisagismo</span>
                </div>

                {/* Container do Vídeo com Aspect Ratio Dinâmico Sem Cortes */}
                <div
                  className="group relative w-full overflow-hidden rounded-[1.6rem] bg-black"
                  style={{ aspectRatio }}
                >
                  <video
                    ref={videoRef}
                    src="/hero/hero%2001.mp4"
                    poster="/hero01.png"
                    playsInline
                    autoPlay
                    loop
                    muted={isMuted}
                    onLoadedMetadata={handleLoadedMetadata}
                    onClick={togglePlay}
                    className="h-full w-full object-contain cursor-pointer transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  />

                  {/* Feedback Central ao clicar */}
                  <div
                    className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      showCenterIcon
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-md shadow-2xl border border-white/20">
                      {isPlaying ? (
                        <Play size={28} weight="fill" className="ml-1" />
                      ) : (
                        <Pause size={28} weight="fill" />
                      )}
                    </div>
                  </div>

                  {/* Barra de Controles Inferior */}
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 rounded-full bg-black/65 px-3.5 py-2 text-white backdrop-blur-md shadow-lg border border-white/15 transition-opacity duration-300 group-hover:opacity-100 opacity-90 sm:opacity-95">
                    {/* Play / Pause */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                      title={isPlaying ? "Pausar" : "Reproduzir"}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:scale-95 transition-all text-white"
                    >
                      {isPlaying ? (
                        <Pause size={15} weight="fill" />
                      ) : (
                        <Play size={15} weight="fill" className="ml-0.5" />
                      )}
                    </button>

                    <div className="h-4 w-px bg-white/20" />

                    {/* Mudo e Slider de Volume */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute();
                        }}
                        aria-label={isMuted || volume === 0 ? "Ativar som" : "Desativar som"}
                        title={isMuted || volume === 0 ? "Ativar som" : "Desativar som"}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:scale-95 transition-all text-white"
                      >
                        {isMuted || volume === 0 ? (
                          <SpeakerSlash size={16} weight="bold" />
                        ) : volume < 0.5 ? (
                          <SpeakerLow size={16} weight="bold" />
                        ) : (
                          <SpeakerHigh size={16} weight="bold" />
                        )}
                      </button>

                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Controle de volume"
                        title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                        className="h-1.5 w-16 sm:w-20 cursor-pointer appearance-none rounded-full bg-white/30 accent-brand hover:bg-white/50 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
