export type PortfolioItem = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  imageSeed?: string;
  imageSrc: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "projetos-3d",
    title: "Projetos 3D",
    tag: "Projetos 3D",
    description: "Visualização realista em 3D, planta humanizada e maquetes detalhadas para decidir com clareza antes da obra.",
    imageSrc: "/projetos-3d/ad01.png",
  },
  {
    slug: "paisagismo",
    title: "Paisagismo",
    tag: "Paisagismo",
    description: "Criação, composição e revitalização de ambientes externos e internos com espécies selecionadas para BH e região.",
    imageSrc: "/portfolio/01.jpeg",
  },
  {
    slug: "jardinagem",
    title: "Jardinagem",
    tag: "Jardinagem",
    description: "Execução com preparo do solo, plantio técnico, adubação, podas e manutenção contínua para o jardim florescer.",
    imageSrc: "/portfolio/02.jpeg",
  },
  {
    slug: "consultoria-planejamento",
    title: "Consultoria e Planejamento",
    tag: "Consultoria",
    description: "Diagnóstico completo de insolação, clima, drenagem e direcionamento de espécies para o seu espaço.",
    imageSrc: "/projetos-3d/ac01.png",
  },
  {
    slug: "revitalizacao-de-jardins",
    title: "Revitalização de Jardins",
    tag: "Revitalização",
    description: "Transformação e renovação de canteiros, troca de substrato e enriquecimento paisagístico de áreas existentes.",
    imageSrc: "/about/01.jpeg",
  },
  {
    slug: "manutencao-especializada",
    title: "Manutenção Especializada",
    tag: "Manutenção",
    description: "Acompanhamento periódico, controle fitossanitário e podas sazonais para preservar o investimento.",
    imageSrc: "/hero-paisagem.png",
  },
];
