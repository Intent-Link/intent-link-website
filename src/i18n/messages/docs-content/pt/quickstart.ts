import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "Instalar",
  "toc.2-wrap": "Envolva seu app",
  "toc.3-links": "Troque seus links",
  "intro": "Vá da instalação a uma previsão funcionando em poucos minutos. O intent-link observa o movimento do ponteiro, estima para onde ele está indo com um filtro de Kalman e dispara onIntent assim que um link é o alvo provável — antes do clique.",
  "installHeading": "1 · Instalar",
  "peerDeps": "Dependências de par: `react ≥ 18`, `react-dom ≥ 18`, `next ≥ 13`.",
  "wrapHeading": "2 · Envolva seu app uma vez",
  "wrapBody": "Monte o `IntentProvider` perto da raiz. Ele executa o motor de previsão e calcula uma probabilidade ao vivo para cada alvo registrado. É um componente cliente, então no App Router ele precisa ficar dentro de uma fronteira `\"use client\"`.",
  "linksHeading": "3 · Troque seus links",
  "linksBody": "Use o `IntentLink` — um substituto direto do `next/link` — e faça algo em `onIntent`. Ele dispara uma vez, na primeira vez que a utilidade do link cruza zero.",
  "closing": "Isso é pré-carregamento preditivo. A seguir: ajuste [importância e custo](importance-and-cost), ou leia as probabilidades brutas para criar o seu próprio comportamento.",
};

export { quickstart };
