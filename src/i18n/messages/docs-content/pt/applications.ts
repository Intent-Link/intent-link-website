import type { DocText } from "@/content/docs/types";

const applications: DocText = {
  "toc.route": "Pré-carregar uma rota",
  "toc.data": "Pré-carregar dados",
  "toc.asset": "Pré-carregar um recurso",
  "intro": "`onIntent` é apenas um callback que dispara no momento em que um link se torna o destino provável. Esse único sinal tem muitos usos — aqui estão três comuns.",
  "routeHeading": "Pré-carregar uma rota",
  "routeBody": "O caso de uso principal. O `IntentLink` desativa o prefetch próprio do `next/link`, então você decide quando aquecer a rota. Como `router.prefetch` é barato, use `importance=\"high\"` / `cost=\"low\"` para disparar cedo e com frequência.",
  "dataHeading": "Pré-carregar dados",
  "dataBody": "Rotas não são a única coisa que você pode aquecer. Inicie os dados de que a próxima página precisa — uma consulta, uma chamada de API, uma entrada de cache — para que estejam prontos antes do clique.",
  "assetHeading": "Pré-carregar um recurso",
  "assetBody": "Mídia pesada é um ótimo caso. Comece a carregar a imagem de destaque, o vídeo ou a fonte do destino no momento em que a intenção é detectada, para que esteja decodificada e em cache quando a página renderizar.",
};

export { applications };
