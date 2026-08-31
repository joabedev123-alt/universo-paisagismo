import Image from "next/image";

type PortfolioFigureProps = {
  seed: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PortfolioFigure({
  seed,
  alt,
  className = "",
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: PortfolioFigureProps) {
  const src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/1600/1200`;
  return (
    <figure className={`relative overflow-hidden bg-line ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        className="h-full w-full object-cover"
        sizes={sizes}
        priority={priority}
      />
    </figure>
  );
}
