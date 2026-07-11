import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Modelo de rolagem",
  "toc.diff": "Diferenças",
  "intro": "Em dispositivos de toque não há cursor, então a intenção vem da **velocidade de rolagem**.",
  "scrollHeading": "O modelo de rolagem",
  "scroll.origin": "A origem do “agente” é fixada perto da posição de leitura: `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Apenas o eixo **vertical** é pontuado (a distância horizontal é ignorada). Um usuário desacelerando perto de um alvo sinaliza intenção.",
  "scroll.weight": "As probabilidades não são normalizadas comparando os links entre si. Em vez disso, a pontuação de probabilidade “weight” bruta é usada.",
  "diffHeading": "Diferenças em relação ao desktop",
  "diffBody": "Nenhuma alteração é necessária. O mesmo `IntentLink` e `onIntent` funcionam.",
};

export { mobileBehavior };
