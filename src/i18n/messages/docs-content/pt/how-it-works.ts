import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "A estimativa",
  "toc.scoring": "Pontuar um alvo",
  "toc.probability": "Probabilidade",
  "intro": "O intent-link modela o movimento do ponteiro como um sistema físico. O `IntentProvider` executa um laço `requestAnimationFrame` que, a cada quadro, estima o seu movimento e pontua cada alvo registrado — o resultado é uma probabilidade ao vivo por alvo.",
  "estimateHeading": "A estimativa",
  "estimateBody": "As amostras brutas do ponteiro são ruidosas. Um **filtro de Kalman** (2D para o cursor, 1D para a rolagem no toque) as transforma em uma **velocidade** suavizada e, o mais importante, uma **incerteza** (σ) — o quanto confiar nessa estimativa neste momento. Um movimento rápido e reto gera uma estimativa confiante rapidamente; um movimento lento e errante permanece incerto.",
  "scoringHeading": "Pontuando um alvo",
  "scoringBody": "O `weight` de cada alvo combina três termos exponenciais — dois cinéticos (do movimento) e um potencial (da geometria):",
  "scoringNote": "Um alvo que é grande (grande `w`), próximo (pequeno `d`) e alinhado a um movimento confiante pontua alto. Um alvo minúsculo, distante ou fora da trajetória pontua perto de zero.",
  "probabilityHeading": "Probabilidade e a opção nula",
  "probabilityBody": "Os pesos são normalizados em probabilidades com um denominador no estilo softmax que inclui uma constante `1`:",
  "nullOption": "Esse `1` inicial é uma **opção de \"não indo a lugar nenhum\"** — as probabilidades nunca somam 1 entre os seus links, então o motor pode permanecer indeciso e simplesmente não disparar. O [PhysicsState](intent-context#physicsstate) ao vivo de cada alvo (probabilidade, peso e os três termos) é exposto através do `IntentContext`.",
  "touch": "Em dispositivos de toque não há cursor, então o motor rastreia a [velocidade de rolagem](mobile-behavior) e pontua os alvos por proximidade vertical.",
};

export { howItWorks };
