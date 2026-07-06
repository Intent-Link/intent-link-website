import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "A superfície de baixo nível. Consuma-a para ler o fluxo bruto de probabilidades e registrar seus próprios elementos — para previsão de alvo em um `<button>`, um card ou qualquer elemento que não seja um link.",
  "col.field": "Campo",
  "col.type": "Tipo",
  "col.meaning": "Significado",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "O estado ao vivo de um alvo, indexado por id em `probabilities`.",
  "field.probability": "Verossimilhança normalizada de este ser o alvo.",
  "field.weight": "Pontuação não normalizada (produto dos três termos).",
  "field.kineticAgent": "Termo de velocidade do agente vs incerteza.",
  "field.kineticTarget": "Termo de velocidade relativa ao alvo.",
  "field.potential": "Termo de geometria (distância e tamanho).",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "Veja [Componentes personalizados](custom-components) para um exemplo completo.",
};

export { intentContext };
