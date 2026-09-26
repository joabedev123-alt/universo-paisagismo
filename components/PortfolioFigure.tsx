import Image from "next/image";

type PortfolioFigureProps = {
  seed?: string;
  imageSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PortfolioFigure({
  seed,
  imageSrc,
  alt,
  className = "",
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: PortfolioFigureProps) {
  const src =
    imageSrc ||
    (seed
      ? `https://picsum.photos/seed/${encodeURIComponent(seed)}/1600/1200`
      : "/portfolio/01.jpeg");

  return (
    <figure className={`relative overflow-hidden bg-line/40 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes={sizes}
        priority={priority}
      />
    </figure>
  );
}
