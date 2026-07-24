import type { TranslationBundle } from "./bundle";

/** Simplified Chinese (zh) translations. */
const zh: TranslationBundle = {
  common: {
    tagline: "点击之前，就知道目的地。",
    nav: {
      docs: "文档",
      github: "GitHub",
    },
    footer: {
      tagline: "在点击之前预测目的地。采用 MIT 许可证。移动数据不离开设备。",
      groupTitles: {
        docs: "文档",
        resources: "资源",
        forAi: "面向 AI",
      },
      links: {
        quickstart: "快速上手",
        api: "API 参考",
        guides: "指南",
        github: "GitHub",
        npm: "npm",
        changelog: "更新日志",
        license: "许可证（MIT）",
        llmsText: "llms.txt",
      },
      builtLine: "采用预测式预取构建 — 文档也能感受到。",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "复制",
      copied: "✓ 已复制",
      getStarted: "开始使用",
    },
    docs: {
      copyForLlm: "复制给 LLM",
      viewMarkdown: "以 Markdown 查看",
      close: "关闭",
    },
    notFound: {
      title: "未找到页面",
      backHome: "返回首页",
    },
    language: {
      ariaLabel: "选择语言",
    },
    aria: {
      primaryNav: "主导航",
      docsNav: "文档",
      pageNav: "本页目录",
      toggleMenu: "切换菜单",
      loading: "加载中",
    },
  },
  metadata: {
    title: "intent-link — 点击之前，就知道目的地",
    description:
      "面向 React 与 Next.js 的目的地预测库。预测用户要去往何处，并在他们点击之前准备好下一次导航。",
    docs: {
      indexTitle: "文档 — intent-link",
      pageTitle: (title: string) => `${title} — intent-link 文档`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "首页",
      eyebrow: "面向 React 与 Next.js 的目的地预测",
      titleLead: "点击之前，就知道",
      titleEmphasis: "目的地。",
      subcopy:
        "实现 1.37 的 fetch:click 比率。Intent-link 利用运动速度和距离产生的动能与势能来计算概率。",
      getStarted: "开始使用",
      liveDemo: "在线演示",
      well: { caption: "像素具有引力" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / 在线演示",
      ariaLabel: "实时预测演示",
      heading: "移向一张卡片——看它如何被预取。",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count} 个分类`,

      reset: "重置",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "onIntent 数据流",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} 次触发`,
      streamEmpty: "// 移向一张卡片以触发信号…",
      levels: { low: "低", medium: "中", high: "高" },
      tiles: { women: "女装", men: "男装", kids: "童装", shoes: "鞋履", bags: "箱包", accessories: "配饰", sport: "运动", denim: "牛仔", outerwear: "外套", beauty: "美妆", home: "家居", sale: "特卖", electronics: "电子产品", watches: "手表", jewelry: "珠宝", furniture: "家具", gifts: "礼品", travel: "旅行" },
    },
    latencyRace: {
      eyebrow: "03 / 感受差异",
      ariaLabel: "延迟竞速",
      heading: "同样的点击。无需等待。",
      body:
        "一个页面等待网络请求，另一个则在用户移动轨迹期间被获取。",
      timeSavedLabel: "本次会话节省的时间",
      milliseconds: (value: number) => `${value} ms`,
      instant: (value: number) => `${value} ms · 瞬时`,
      withoutTitle: "不用 intent-link",
      withTitle: "使用 intent-link",
      notLoaded: "未加载",
      idle: "空闲",
      prefetching: "预取中…",
      ready: "已预取 ✓ 就绪",
      fetching: "加载中…",
      productName: "绗缝夹克",
      productPrice: "$148.00",
      productPath: "/product/quilted-jacket",
      addToCart: "加入购物车",
      open: "打开商品 →",
      opening: "打开中…",
      replay: "↻ 重放",
    },
    whyDifferent: {
      eyebrow: "04 / 与众不同",
      ariaLabel: "为何不同",
      heading: "不是可见性，不是悬停，而是意图。",
      body: "其他方法要么太晚，要么浪费资源。",
      columns: {
        approach: "方案",
        timing: "时机",
        selective: "选择性",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "沿轨迹", selective: "目的地" },
        { name: "instant.page", timing: "悬停时", selective: "一个" },
        { name: "Next.js prefetch", timing: "进入视口时", selective: "所有可见项" },
        { name: "Guess.js", timing: "预先计算", selective: "最佳猜测" },
        { name: "intent-link", timing: "到达之前", selective: "目的地" },
      ],
      benefits: [
        { stat: "即时导航", title: "在点击前预取下一页" },
        { stat: "1.37", title: "Fetch:Click 比率" },
        { stat: "可调节", title: "配置 importance 和 cost 权重" },
        { stat: "useIntentTarget", title: "构建自定义组件" },
        { stat: "React · Next", title: "适用于最流行的框架" },
        { stat: "MIT", title: "开源，不收集数据" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / 应用",
      ariaLabel: "超越预取",
      heading: "一个信号。多种用途。",
      uses: [
        { tag: "// 分析", title: "意图，而不只是点击", body: "记录放弃的靠近与犹豫，而不只是动作。" },
        { tag: "// 揭示", title: "渐进式揭示", body: "用户一朝某处移动，就打开预览或提示框。" },
        { tag: "// 性能", title: "预取链接", body: "在用户点击前预取导航链接。" },
        { tag: "// 自适应 UI", title: "辅助瞄准", body: "在用户靠近目标时放大目标或将其移近。" },
      ],
      pattern: [
        { step: "01", title: "测量", body: "带噪声的轨迹" },
        { step: "02", title: "估计", body: "可能的目的地" },
        { step: "03", title: "准备", body: "在到达之前" },
      ],
    },
    ctaBand: {
      ariaLabel: "开始使用",
      heading: "交付感觉瞬时的导航。",
      getStarted: "开始使用",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "入门",
      apiReference: "API 参考",
      guides: "指南",
      more: "更多",
    },
    pageTitles: {
      quickstart: "快速上手",
      "how-it-works": "工作原理",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "自定义意图组件",
      examples: "示例",
      troubleshooting: "问题排查",
      changelog: "更新日志",
    },
  },
};

export { zh };
