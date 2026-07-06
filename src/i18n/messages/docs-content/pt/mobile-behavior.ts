import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Modelo de rolagem",
  "toc.diff": "Diferenças",
  "intro": "Em dispositivos de toque (`pointer: coarse`) não há cursor, então o motor recorre à **velocidade de rolagem**, alimentada por um filtro de Kalman 1D.",
  "scrollHeading": "O modelo de rolagem",
  "scroll.origin": "A origem do “agente” é fixada perto da posição de leitura — `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Apenas o eixo **vertical** é pontuado (a distância horizontal é ignorada) — um usuário desacelerando perto de um alvo sinaliza intenção.",
  "scroll.weight": "As probabilidades **não** são normalizadas por softmax no toque; o `weight` de cada alvo é usado diretamente.",
  "diffHeading": "Diferenças em relação ao desktop",
  "diffBody": "Nenhuma alteração de código é necessária — o mesmo `IntentLink` e `onIntent` funcionam. Apenas ajuste as expectativas: a intenção por rolagem é mais grosseira que a trajetória do cursor, então considere uma `importance` ligeiramente maior para alvos importantes no mobile.",
};

export { mobileBehavior };
