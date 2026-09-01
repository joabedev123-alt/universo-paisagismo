"use client";

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "landscape" | "portrait";
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  beforeAlt = "Antes",
  afterAlt = "Depois",
  className,
  aspectRatio = "video",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const aspectRatios = {
    square: "aspect-square",
    video: "aspect-video",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
  };

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = Math.max(0, Math.min((x / width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden select-none cursor-ew-resize group rounded-sm",
        aspectRatios[aspectRatio],
        className
      )}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => handleInteractionStart(e.clientX)}
      onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        {/* We use standard img to make it simpler to test without setting up next domains right now */}
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-md">
          Depois
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-md">
          Antes
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize drop-shadow-md z-10"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-gray-400" />
            <div className="w-0.5 h-3 bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
