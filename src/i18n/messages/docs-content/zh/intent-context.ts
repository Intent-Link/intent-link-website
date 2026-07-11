import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "底层接口。消费它以读取原始概率流并注册你自己的元素——用于对一个 `<button>`、一张卡片，或任何非链接元素进行目标预测。",
  "col.field": "字段",
  "col.type": "类型",
  "col.meaning": "含义",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "单个目标的实时状态，在 `probabilities` 中按 id 键入。",
  "field.probability": "相对于相邻链接的归一化概率。",
  "field.weight": "表示这是用户目标的未归一化原始概率得分。",
  "field.kineticAgent": "来自用户速度的动能。",
  "field.kineticTarget": "来自目标速度的动能（当目标处于运动状态时）。",
  "field.potential": "来自用户与目标之间距离的势能。",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "完整示例见 [自定义组件](custom-components)。",
};

export { intentContext };
