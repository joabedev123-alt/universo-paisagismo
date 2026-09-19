import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-brand">404</p>
      <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-base text-muted">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition-transform hover:bg-brand-hover"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
