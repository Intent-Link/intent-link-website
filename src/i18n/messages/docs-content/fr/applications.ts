import type { DocText } from "@/content/docs/types";

const applications: DocText = {
  "toc.route": "Précharger une route",
  "toc.data": "Précharger des données",
  "toc.asset": "Précharger une ressource",
  "intro": "`onIntent` n'est qu'un rappel qui se déclenche à l'instant où un lien devient la destination probable. Ce seul signal a de nombreux usages — en voici trois courants.",
  "routeHeading": "Précharger une route",
  "routeBody": "Le cas d'usage phare. `IntentLink` désactive le préchargement propre de `next/link`, de sorte que vous décidez quand préparer la route. Comme `router.prefetch` est peu coûteux, utilisez `importance=\"high\"` / `cost=\"low\"` pour déclencher tôt et souvent.",
  "dataHeading": "Précharger des données",
  "dataBody": "Les routes ne sont pas la seule chose que vous pouvez préparer. Lancez les données dont la page suivante a besoin — une requête, un appel d'API, une entrée de cache — pour qu'elles soient prêtes avant le clic.",
  "assetHeading": "Précharger une ressource",
  "assetBody": "Les médias lourds s'y prêtent parfaitement. Commencez à charger l'image principale, la vidéo ou la police de la destination dès que l'intention est détectée, afin qu'elles soient décodées et mises en cache au moment où la page s'affiche.",
};

export { applications };
