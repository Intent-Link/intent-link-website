import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "Préchargement de route",
  "toc.data": "Données et cache",
  "intro": "Le cas d'usage phare. `IntentLink` désactive le préchargement propre de next/link, de sorte que vous décidez quand préparer la route dans `onIntent`.",
  "routeHeading": "Préchargement de route",
  "routeBody": "Comme `router.prefetch` est peu coûteux, utilisez `importance=\"high\"` / `cost=\"low\"` pour déclencher tôt et souvent.",
  "dataHeading": "Préparation des données et du cache",
  "dataBody": "`onIntent` n'est qu'un rappel — préparez ce que vous voulez : un chargement de données, une image, une entrée de cache, un client de requêtes.",
};

export { predictivePrefetch };
