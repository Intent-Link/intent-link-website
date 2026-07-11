import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "A superfície de baixo nível. Consuma-a para ler o fluxo bruto de probabilidades e registrar seus próprios elementos para previsão de alvo em um `<button>`, um card ou qualquer elemento que não seja um link.",
  "col.field": "Campo",
  "col.type": "Tipo",
  "col.meaning": "Significado",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "O estado ao vivo de um alvo, indexado por id em `probabilities`.",
  "field.probability": "Probabilidade normalizada em relação aos links vizinhos.",
  "field.weight": "Pontuação de probabilidade bruta não normalizada de que este é o alvo do usuário.",
  "field.kineticAgent": "Energia cinética da velocidade do usuário.",
  "field.kineticTarget": "Energia cinética da velocidade do alvo, se ele estiver em movimento.",
  "field.potential": "Energia potencial da distância entre o usuário e o alvo.",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "Veja [Componentes personalizados](custom-components) para um exemplo completo.",
};

export { intentContext };
