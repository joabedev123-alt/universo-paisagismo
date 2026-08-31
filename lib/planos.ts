export type Plano = {
  id: string;
  name: string;
  pitch: string;
  items: string[];
  highlight?: boolean;
};

export const planos: Plano[] = [
  {
    id: "essencial",
    name: "Essencial",
    pitch: "Manutenção regular para manter o jardim limpo e saudável.",
    items: [
      "Poda e limpeza mensal",
      "Rega e cuidados básicos",
      "Remoção de invasoras",
      "Relatório mensal",
      "Consultoria básica incluída",
    ],
  },
  {
    id: "projeto-3d",
    name: "Projeto 3D",
    pitch: "Antes da obra, você enxerga o resultado com precisão.",
    items: [
      "Projeto 3D detalhado",
      "Consultoria especializada",
      "Lista de materiais",
      "Planta baixa técnica",
      "Três revisões incluídas",
      "Acompanhamento na execução",
    ],
    highlight: true,
  },
  {
    id: "completo",
    name: "Completo",
    pitch: "Projeto, obra e arranque da manutenção com equipe dedicada.",
    items: [
      "Projeto 3D completo",
      "Execução integral",
      "Materiais inclusos no escopo acordado",
      "Três meses de manutenção inicial",
      "Garantia de seis meses",
      "Equipe especializada",
    ],
  },
];
