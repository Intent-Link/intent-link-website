import type { TranslationBundle } from "./bundle";

/** Korean (ko) translations. */
const ko: TranslationBundle = {
  common: {
    tagline: "클릭하기 전에 목적지를 알아냅니다.",
    nav: {
      docs: "문서",
      github: "GitHub",
    },
    footer: {
      tagline: "클릭하기 전에 목적지를 예측합니다. MIT 라이선스. 움직임은 기기 밖으로 나가지 않습니다.",
      groupTitles: {
        docs: "문서",
        resources: "리소스",
        forAi: "AI를 위한",
      },
      links: {
        quickstart: "빠른 시작",
        api: "API 레퍼런스",
        guides: "가이드",
        github: "GitHub",
        npm: "npm",
        changelog: "변경 내역",
        license: "라이선스 (MIT)",
        llmsText: "llms.txt",
      },
      builtLine: "예측 프리페치로 제작 — 문서도 그것을 느낍니다.",
      copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: {
      copy: "복사",
      copied: "✓ 복사됨",
      getStarted: "시작하기",
    },
    docs: {
      copyForLlm: "LLM용 복사",
      viewMarkdown: "Markdown으로 보기",
      close: "닫기",
    },
    notFound: {
      title: "페이지를 찾을 수 없습니다",
      backHome: "홈으로 돌아가기",
    },
    language: {
      ariaLabel: "언어 선택",
    },
    aria: {
      primaryNav: "메인",
      docsNav: "문서",
      pageNav: "이 페이지에서",
      toggleMenu: "메뉴 전환",
      loading: "불러오는 중",
    },
  },
  metadata: {
    title: "intent-link — 클릭하기 전에 목적지를 알아냅니다",
    description:
      "React와 Next.js를 위한 목적지 예측 라이브러리입니다. 사용자가 어디로 향하는지 예측하고 클릭하기 전에 다음 이동을 준비합니다.",
    docs: {
      indexTitle: "문서 — intent-link",
      pageTitle: (title: string) => `${title} — intent-link 문서`,
    },
  },
  sections: {
    hero: {
      ariaLabel: "표지",
      eyebrow: "React와 Next.js를 위한 목적지 예측",
      titleLead: "목적지를 알아냅니다",
      titleEmphasis: "클릭하기 전에.",
      subcopy:
        "1.39의 fetch:click 비율을 달성하세요. Intent-link는 움직임의 속도와 거리에서 발생하는 운동 에너지와 위치 에너지를 사용해 확률을 계산합니다.",
      getStarted: "시작하기",
      liveDemo: "라이브 데모",
    },
    predictionFieldDemo: {
      eyebrow: "02 / 라이브 데모",
      ariaLabel: "라이브 예측 데모",
      heading: "카드 쪽으로 움직여 보세요 — 어떻게 미리 가져오는지 확인하세요.",
      addressBar: "shop.example/new-in",
      categories: (count: number) => `${count}개 카테고리`,

      reset: "초기화",
      importanceLabel: "importance",
      costLabel: "cost",
      streamTitle: "onIntent 스트림",
      firedCount: (count: number) =>
        `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}회 실행`,
      streamEmpty: "// 카드 쪽으로 움직여 신호를 실행하세요…",
      levels: { low: "낮음", medium: "중간", high: "높음" },
      tiles: { women: "여성", men: "남성", kids: "키즈", shoes: "신발", bags: "가방", accessories: "액세서리", sport: "스포츠", denim: "데님", outerwear: "아우터", beauty: "뷰티", home: "홈", sale: "세일", electronics: "전자제품", watches: "시계", jewelry: "주얼리", furniture: "가구", gifts: "선물", travel: "여행" },
    },
    latencyRace: {
      eyebrow: "03 / 차이를 느껴 보세요",
      ariaLabel: "지연 시간 경쟁",
      heading: "같은 클릭. 기다림은 건너뛰세요.",
      body:
        "한 페이지는 네트워크 요청을 기다리고, 다른 페이지는 사용자의 이동 궤적 중에 가져옵니다.",
      timeSavedLabel: "이번 세션에서 절약한 시간",
      milliseconds: (value: number) => `${value} ms`,
      instant: (value: number) => `${value} ms · 즉시`,
      withoutTitle: "intent-link 없이",
      withTitle: "intent-link 사용",
      notLoaded: "로드되지 않음",
      idle: "대기",
      prefetching: "미리 가져오는 중…",
      ready: "미리 가져옴 ✓ 준비됨",
      fetching: "불러오는 중…",
      productName: "퀼팅 재킷",
      productPrice: "₩198,000",
      productPath: "/product/quilted-jacket",
      addToCart: "장바구니에 담기",
      open: "제품 열기 →",
      opening: "여는 중…",
      replay: "↻ 다시 재생",
    },
    whyDifferent: {
      eyebrow: "04 / 무엇이 다른가",
      ariaLabel: "무엇이 다른가",
      heading: "가시성도, 호버도 아닌 의도입니다.",
      body: "다른 모든 방식은 너무 늦거나 리소스를 낭비합니다.",
      columns: {
        approach: "방식",
        timing: "시점",
        selective: "선택성",
      },
      highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "궤적을 따라", selective: "그 목적지" },
        { name: "instant.page", timing: "마우스를 올릴 때", selective: "하나" },
        { name: "Next.js prefetch", timing: "화면에 들어올 때", selective: "보이는 모든 것" },
        { name: "Guess.js", timing: "사전 계산", selective: "최선의 추측" },
        { name: "intent-link", timing: "도착하기 전", selective: "그 목적지" },
      ],
      benefits: [
        { stat: "즉각적인 이동", title: "클릭 전에 다음 페이지를 미리 가져옵니다" },
        { stat: "1.39", title: "Fetch:Click 비율" },
        { stat: "조정 가능", title: "importance와 cost 가중치를 설정합니다" },
        { stat: "useIntentTarget", title: "사용자 정의 의도 예측 컴포넌트를 만듭니다" },
        { stat: "React · Next", title: "가장 인기 있는 프레임워크에 최적화" },
        { stat: "MIT", title: "오픈 소스, 데이터 수집 없음" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / 활용",
      ariaLabel: "미리 가져오기를 넘어",
      heading: "하나의 신호. 다양한 활용.",
      uses: [
        { tag: "// 분석", title: "클릭이 아닌 의도", body: "행동뿐 아니라 포기한 접근과 망설임도 기록합니다." },
        { tag: "// 노출", title: "점진적 노출", body: "사용자가 향하는 즉시 미리보기나 툴팁을 엽니다." },
        { tag: "// 성능", title: "링크 미리 가져오기", body: "사용자가 클릭하기 전에 탐색 링크를 미리 가져옵니다." },
        { tag: "// 적응형 UI", title: "보조 조준", body: "사용자가 다가갈수록 대상을 확대하거나 더 가까이 가져옵니다." },
      ],
      pattern: [
        { step: "01", title: "측정", body: "잡음이 섞인 궤적을" },
        { step: "02", title: "추정", body: "유력한 목적지를" },
        { step: "03", title: "준비", body: "도착하기 전에" },
      ],
    },
    ctaBand: {
      ariaLabel: "시작하기",
      heading: "즉각적으로 느껴지는 내비게이션을 제공하세요.",
      getStarted: "시작하기",
      github: "GitHub",
      install: "$ npm install intent-link",
    },
  },
  docs: {

    groupTitles: {
      gettingStarted: "시작하기",
      apiReference: "API 레퍼런스",
      guides: "가이드",
      more: "더 보기",
    },
    pageTitles: {
      quickstart: "빠른 시작",
      "how-it-works": "작동 원리",
      "intent-provider": "IntentProvider",
      "intent-link": "IntentLink",
      "use-intent-target": "useIntentTarget",
      "custom-intent-components": "사용자 정의 인텐트 컴포넌트",
      examples: "예제",
      troubleshooting: "문제 해결",
      changelog: "변경 내역",
    },
  },
};

export { ko };
