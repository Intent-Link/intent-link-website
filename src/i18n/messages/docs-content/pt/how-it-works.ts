import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "Lendo seu movimento",
  "toc.scoring": "Seu alvo tem gravidade",
  "toc.probability": "Probabilidade",
  "intro": "O intent-link modela o movimento do ponteiro como um sistema físico. O `IntentProvider` executa um laço que, a cada quadro, lê como você está se movendo e pontua cada alvo registrado. O resultado é uma probabilidade ao vivo por alvo.",
  "estimateHeading": "Lendo seu movimento",
  "estimateBody": "A entrada bruta do ponteiro é trêmula, então o intent-link a suaviza em uma leitura estável do seu movimento — tanto o quão rápido você vai quanto o quão confiante ele pode estar nessa leitura neste momento. Um movimento rápido e decidido é lido com clareza; um movimento lento e errante permanece ambíguo.",
  "scoringHeading": "Seu alvo tem gravidade",
  "scoringBody": "Pense em cada alvo como tendo sua própria gravidade. Um alvo puxa com mais força quanto mais o seu movimento se compromete em direção a ele e quanto mais perto ele fica de onde você está indo. A cada quadro, o intent-link transforma essa atração em um único `weight` por alvo.",
  "scoringNote": "Um alvo alinhado com um movimento confiante pontua alto. Um que está para o lado — ou ao qual o seu movimento não está realmente se comprometendo — se aproxima de zero.",
  "probabilityHeading": "Probabilidade e a opção nula",
  "probabilityBody": "Os pesos se tornam probabilidades ao comparar cada alvo com os seus vizinhos, mais uma constante `1` no denominador:",
  "nullOption": "Esse `1` inicial é uma **opção de \"não indo a lugar nenhum\"**: as probabilidades nunca somam 1 entre os seus links, então o motor pode permanecer indeciso e simplesmente não disparar. O [PhysicsState](intent-context#physicsstate) ao vivo de cada alvo é exposto através do `IntentContext`.",
  "touch": "Em dispositivos de toque não há cursor, então o motor rastreia a [velocidade de rolagem](mobile-behavior) e pontua os alvos por proximidade vertical.",
};

export { howItWorks };
