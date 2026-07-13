import type { DocsContentText } from "@/content/docs/types";
import type { PartialText } from "@/i18n/create-text-query";

const zh: PartialText<DocsContentText> = {
  quickstart: {
    "toc.1-install": "安装", "toc.2-wrap": "包装应用", "toc.3-links": "使用 IntentLink", intro: "只需三步，即可为 Next.js 应用加入意图感知行为。", installHeading: "1 · 安装", wrapHeading: "2 · 包装应用一次", wrapBody: "在根布局中添加一次 `IntentProvider`。它会为其内部的所有内容运行一个共享的意图引擎。", linksHeading: "3 · 使用 IntentLink", linksBody: "像普通 Next.js 链接一样使用 `IntentLink`，并把你想提前开始的工作放入 `onIntent`。", closing: "对大多数应用来说，这就够了。库不会自行预取；`onIntent` 做什么完全由你决定。",
  },
  "how-it-works": {
    "toc.observe": "观察", "toc.decide": "判断", "toc.fire": "执行工作", "toc.devices": "桌面端与移动端", "toc.physics": "物理学思路", intro: "intent-link 会观察用户在页面上的移动，并估计用户正接近哪个可见目标。当信号足够强时，它会调用该目标的 `onIntent` 函数。", observeHeading: "1 · 观察移动", observeBody: "在桌面端，它读取指针移动；在触摸设备上，它读取滚动。只有用户交互后才会启动，移动停止时会再次休眠。", decideHeading: "2 · 判断目标", decideBody: "引擎会将用户的移动与当前可见的意图目标进行比较。视口外的目标不会参与计算。", fireHeading: "3 · 执行工作", fireBody: "当某个目标足够可能被选择时，它的 `onIntent` 回调会执行一次。用户移开后再靠近时，可以再次执行。", devicesHeading: "桌面端与移动端", "devices.desktop": "在桌面端，引擎跟踪指针的二维移动。", "devices.mobile": "在移动端，引擎跟踪垂直滚动，并在第一次滚动时启用。", "devices.visible": "隐藏或离屏的目标会被忽略，包括被响应式 CSS 隐藏的元素。", physicsHeading: "物理学思路", physicsEnergy: "可以把每个目标想成一个小小的引力井。移动产生**动能**，与目标的距离产生**势能**。快速的指针或滚动仍有前进的动力，而靠近目标时的缓慢移动更像正在停驻。引擎使用类似热力学的规则，把这些低能量的落点视为更可能的选择。", physicsKalman: "浏览器的移动数据会有细小跳动和误差。**卡尔曼滤波器**会在物理计算前平滑这些噪声。简单来说，它帮助区分有意的移动和不稳定的测量值。这些都发生在库内部，应用只会接触到 `onIntent`。", paperNote: "[点击阅读研究论文](https://intentlink.dev/paper)。在 ACM 正式发布前，这是一个占位链接。",
  },
  "intent-provider": {
    "toc.usage": "用法", "toc.notes": "注意事项", intro: "在应用根部附近添加一次 `IntentProvider`。它会为 `IntentLink` 和 `useIntentTarget` 运行共享的意图引擎。", usageHeading: "用法", notesHeading: "注意事项", "notes.once": "每个应用只使用一个 provider，不要嵌套。", "notes.props": "它只需要 `children`，没有其他配置。", "notes.client": "它自身包含客户端边界，因此可以直接从 Next.js 服务端布局导入。",
  },
  "intent-link": {
    "toc.props": "属性", "toc.onintent": "onIntent", "toc.tuning": "importance 与 cost", "toc.example": "示例", intro: "在通常使用 Next.js `Link` 的地方使用 `IntentLink`。把希望在点击前开始的工作加入 `onIntent`。", propsHeading: "属性", "col.prop": "属性", "col.type": "类型", "col.default": "默认值", "col.description": "说明", "prop.href": "必填，与 Next.js Link 相同。", "prop.importance": "工作应该多容易被触发。", "prop.cost": "预测应该多谨慎。", "prop.onIntent": "当用户很可能选择此链接时调用一次。", "prop.rest": "任何 Next.js Link 或锚点属性，包括 className、style 和 ref。", prefetchNote: "`IntentLink` 会关闭 Next.js 自动预取。若要进行预测式预取，请在 `onIntent` 中调用 `router.prefetch()`。", onIntentHeading: "onIntent", onIntentBody: "此回调不接收参数，也不返回值。每次接近只执行一次；用户移开后可以重新触发。", tuningHeading: "importance 与 cost", tuningBody: "这些设置是可选的。大多数应用应保留默认值。", "tuning.importance": "`importance` 控制工作多容易开始。默认值：`medium`。", "tuning.cost": "`cost` 控制预测的谨慎程度。默认值：`low`。", "tuning.defaults": "只有在桌面端和移动端都测试过真实工作后，再调整这些值。", exampleHeading: "示例",
  },
  "use-intent-target": {
    "toc.button": "基本用法", "toc.options": "选项", "toc.third-party": "第三方组件", intro: "`useIntentTarget` 可为按钮、卡片或任何其他 HTML 元素添加意图检测。把返回的 ref 附加到需要观察的元素。", buttonHeading: "基本用法", buttonBody: "在客户端组件中调用 hook，并把返回的 ref 附加到一个 HTML 元素。", optionsHeading: "选项", "options.onIntent": "`onIntent`：元素成为可能目标时运行的工作。", "options.importance": "`importance`：可选的 `high`、`medium` 或 `low`。默认值：`medium`。", "options.cost": "`cost`：可选的 `high`、`medium` 或 `low`。默认值：`low`。", thirdPartyHeading: "第三方组件", thirdPartyBody: "如果组件会把 ref 转发到真实 HTML 元素，可直接附加。", wrapperBody: "如果它不转发 ref，请用原生元素包装它，并把 ref 附加到包装元素。",
  },
  "custom-intent-components": {
    "toc.intent-button": "IntentButton", "toc.intent-button-usage": "用法", "toc.intent-article": "IntentArticle", "toc.intent-article-usage": "用法", intro: "如果有许多同类目标，可以包装一次 `useIntentTarget`，然后重复使用生成的组件。", buttonHeading: "可复用的 IntentButton", buttonBody: "它接收普通按钮属性以及 `onIntent`、`importance` 和 `cost`。", articleHeading: "可复用的 IntentArticle", articleBody: "同样的模式也适用于商品卡片或其他语义容器。", usageHeading: "用法",
  },
  examples: {
    "toc.route": "预取路由", "toc.data": "准备数据", "toc.asset": "预加载图片", "toc.action": "准备组件", intro: "使用 `onIntent` 启动安全、可重复的准备工作。购买、发送消息或提交表单等不可逆操作应等到真正点击后再执行。", routeHeading: "预取路由", routeBody: "最常见的 Next.js 用例。", dataHeading: "准备数据", dataBody: "将下一个界面需要的信息放入数据层缓存。", assetHeading: "预加载图片", assetBody: "在导航前开始加载大型资源。", actionHeading: "准备组件", actionBody: "目标不是链接时，请使用 `useIntentTarget`。",
  },
  troubleshooting: {
    "toc.nothing": "没有任何反应", "toc.prefetch": "意外预取", "toc.custom": "自定义组件 ref", "toc.mobile": "移动端测试", "toc.development": "开发模式", nothingHeading: "onIntent 没有执行", "nothing.provider": "这些链接上方是否有 `IntentProvider`？", "nothing.callback": "目标是否提供了 `onIntent` 回调？没有回调的目标不会注册。", "nothing.input": "在桌面端移动指针，在移动端滚动。第一次交互前，引擎处于休眠状态。", "nothing.size": "确认目标可见，并且有真实的宽度和高度。", "nothing.wiring": "暂时使用 `importance=\"high\"` 和 `cost=\"low\"` 检查连接，然后恢复默认值。", prefetchHeading: "没有 onIntent 也预取了路由", prefetchBody: "检查是否有另一个 Next.js `Link` 指向同一路由，包括响应式布局中隐藏的链接。也要查找直接调用 `router.prefetch()` 的代码。", customHeading: "自定义组件不工作", customBody: "组件必须把 ref 转发到真实 HTML 元素。否则，请把意图 ref 附加到 `div` 等原生包装元素。", mobileHeading: "移动端测试", mobileBody: "使用真实触摸设备，或在浏览器开发者工具中启用触摸模拟后滚动。仅缩窄桌面浏览器窗口不一定会启用移动端行为。", developmentHeading: "开发环境与生产环境", developmentBody: "请在生产构建中验证关键行为。React 开发检查和框架工具可能让回调或网络请求看起来与生产环境不同。",
  },
  changelog: {
    "toc.v1013": "1.0.13", v1013Heading: "1.0.13（当前）", "v1013.api": "新增 `useIntentTarget`，用于按钮、卡片和第三方组件。", "v1013.visibility": "只有可见目标会参与预测工作。", "v1013.behavior": "`onIntent` 现在是简单的 void 回调，内部预测状态不再属于公共 API。", "v1013.performance": "改进了注册、渲染以及大量目标页面的性能。", history: "在 npm 查看[完整版本历史](https://www.npmjs.com/package/intent-link?activeTab=versions)。",
  },
};

export { zh };
