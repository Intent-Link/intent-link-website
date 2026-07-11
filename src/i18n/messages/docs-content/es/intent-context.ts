import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "La superficie de bajo nivel. Consúmela para leer el flujo de probabilidades en bruto y registrar tus propios elementos — para predicción de objetivos en un `<button>`, una tarjeta o cualquier elemento que no sea un enlace.",
  "col.field": "Campo",
  "col.type": "Tipo",
  "col.meaning": "Significado",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "El estado en vivo de un objetivo, indexado por id en `probabilities`.",
  "field.probability": "Probabilidad normalizada frente a los enlaces vecinos.",
  "field.weight": "Puntuación de probabilidad en bruto, sin normalizar, de que este sea el objetivo del usuario.",
  "field.kineticAgent": "Energía cinética de la velocidad del usuario.",
  "field.kineticTarget": "Energía cinética de la velocidad del objetivo, si está en movimiento.",
  "field.potential": "Energía potencial de la distancia entre el usuario y el objetivo.",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "Consulta [Componentes personalizados](custom-components) para un ejemplo completo.",
};

export { intentContext };
