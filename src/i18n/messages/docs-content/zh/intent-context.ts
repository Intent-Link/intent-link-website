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
  "field.probability": "这是目标的归一化似然。",
  "field.weight": "未归一化的得分（三个项的乘积）。",
  "field.kineticAgent": "相对于不确定度的智能体速度项。",
  "field.kineticTarget": "相对于目标的速度项。",
  "field.potential": "几何项（距离与尺寸）。",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "完整示例见 [自定义组件](custom-components)。",
};

export { intentContext };
