export type PortfolioItem = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  imageSeed: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "execucao-paisagistica",
    title: "Execução paisagística",
    tag: "Execução",
    description: "Transformação completa de área externa com plantio, drenagem e acabamento.",
    imageSeed: "up-exec-01",
  },
  {
    slug: "tropical-moderno",
    title: "Tropical moderno",
    tag: "Moderno",
    description: "Área de lazer com espécies tropicais e vasos em composição contemporânea.",
    imageSeed: "up-trop-02",
  },
  {
    slug: "projeto-tecnico",
    title: "Projeto técnico executado",
    tag: "Projeto 3D",
    description: "Da planta baixa ao canteiro: especificações claras e obra acompanhada.",
    imageSeed: "up-tech-03",
  },
  {
    slug: "jardim-florido",
    title: "Jardim florido",
    tag: "Jardim florido",
    description: "Camadas de floração ao longo das estações, com irrigação planejada.",
    imageSeed: "up-flor-04",
  },
  {
    slug: "palmeiras-ornamentais",
    title: "Palmeiras ornamentais",
    tag: "Palmeiras",
    description: "Escala vertical e sombra filtrada integradas ao passeio e à residência.",
    imageSeed: "up-palm-05",
  },
  {
    slug: "consultoria",
    title: "Consultoria paisagística",
    tag: "Consultoria",
    description: "Diagnóstico do espaço, sugestões de espécies e plano de fases.",
    imageSeed: "up-cons-06",
  },
];
