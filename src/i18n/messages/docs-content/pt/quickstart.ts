import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "Instalar",
  "toc.2-wrap": "Envolva seu app",
  "toc.3-links": "Troque seus links",
  "intro": "Vá da instalação a uma previsão funcionando em poucos minutos. O intent-link observa como o ponteiro está se movendo e dispara `onIntent` assim que um link é o alvo provável, antes do clique.",
  "installHeading": "1 · Instalar",
  "peerDeps": "Dependências de par: `react ≥ 18`, `react-dom ≥ 18`, `next ≥ 13`.",
  "wrapHeading": "2 · Envolva seu app uma vez",
  "wrapBody": "Monte o `IntentProvider` no seu `app/layout.jsx`. Ele executa o motor de previsão e calcula uma probabilidade ao vivo para cada alvo registrado. Ele carrega a sua própria diretiva `\"use client\"`, então cai direto no layout de servidor sem nenhum wrapper extra.",
  "linksHeading": "3 · Troque seus links",
  "linksBody": "Use o `IntentLink`, um substituto direto do `next/link`, e faça algo em `onIntent`. Ele dispara uma vez, na primeira vez que a utilidade do link cruza zero.",
  "closing": "Isso é pré-carregamento preditivo. A seguir: ajuste [importância e custo](importance-and-cost), ou leia as probabilidades brutas para criar o seu próprio comportamento.",
};

export { quickstart };
