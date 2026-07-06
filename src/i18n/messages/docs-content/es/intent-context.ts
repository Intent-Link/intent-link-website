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
  "field.probability": "Verosimilitud normalizada de que este sea el objetivo.",
  "field.weight": "Puntuación sin normalizar (producto de los tres términos).",
  "field.kineticAgent": "Término de velocidad del agente frente a la incertidumbre.",
  "field.kineticTarget": "Término de velocidad relativa al objetivo.",
  "field.potential": "Término geométrico (distancia y tamaño).",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "Consulta [Componentes personalizados](custom-components) para un ejemplo completo.",
};

export { intentContext };
