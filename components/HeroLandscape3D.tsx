import Image from "next/image";
import type { ReactNode } from "react";

type HeroLandscape3DProps = {
  children: ReactNode;
  className?: string;
};

export function HeroLandscape3D({ children, className = "" }: HeroLandscape3DProps) {
  return (
    <section
      className={`relative border-b border-line bg-canvas/40 pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-20 lg:pb-14 ${className}`}
      aria-label="Apresentação principal"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-center lg:col-span-5">
            {children}
          </div>
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-white/70 p-2 shadow-[0_16px_50px_rgba(61,111,86,0.15)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_60px_rgba(61,111,86,0.22)]">
              <div className="relative aspect-[1711/919] w-full overflow-hidden rounded-xl bg-line/30">
                <Image
                  src="/hero01.png"
                  alt="Projeto de paisagismo Universo Paisagismo"
                  width={1711}
                  height={919}
                  priority
                  quality={95}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.015]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 850px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
