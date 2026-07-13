import type { DocsContentText } from "@/content/docs/types";
import type { PartialText } from "@/i18n/create-text-query";

const ko: PartialText<DocsContentText> = {
  quickstart: {
    "toc.1-install": "설치", "toc.2-wrap": "앱 감싸기", "toc.3-links": "IntentLink 사용", intro: "세 단계만으로 Next.js 앱에 의도 감지 동작을 추가할 수 있습니다.", installHeading: "1 · 설치", wrapHeading: "2 · 앱을 한 번 감싸기", wrapBody: "루트 레이아웃에 `IntentProvider`를 한 번 추가하세요. 그 안의 모든 항목에 하나의 공유 의도 엔진이 작동합니다.", linksHeading: "3 · IntentLink 사용", linksBody: "일반 Next.js 링크처럼 `IntentLink`를 사용하고, 미리 시작할 작업을 `onIntent`에 넣으세요.", closing: "대부분의 앱에는 이것으로 충분합니다. 라이브러리가 자동으로 프리페치하지 않으며, `onIntent`가 수행할 작업은 사용자가 정합니다.",
  },
  "how-it-works": {
    "toc.observe": "관찰", "toc.decide": "판단", "toc.fire": "작업 실행", "toc.devices": "데스크톱과 모바일", "toc.physics": "물리학 아이디어", intro: "intent-link는 페이지에서 사용자의 움직임을 관찰하고 어떤 보이는 대상에 가까워지는지 추정합니다. 신호가 충분히 강해지면 해당 대상의 `onIntent` 함수를 호출합니다.", observeHeading: "1 · 움직임 관찰", observeBody: "데스크톱에서는 포인터 움직임을, 터치 기기에서는 스크롤을 읽습니다. 사용자가 상호작용할 때만 깨어나며 움직임이 멈추면 다시 쉽니다.", decideHeading: "2 · 대상 판단", decideBody: "엔진은 사용자의 움직임과 현재 보이는 의도 대상을 비교합니다. 뷰포트 밖의 대상은 계산에 포함되지 않습니다.", fireHeading: "3 · 작업 실행", fireBody: "어떤 대상이 충분히 유력해지면 그 대상의 `onIntent` 콜백이 한 번 실행됩니다. 사용자가 멀어졌다가 나중에 다시 접근하면 다시 실행될 수 있습니다.", devicesHeading: "데스크톱과 모바일", "devices.desktop": "데스크톱에서는 포인터의 2차원 움직임을 추적합니다.", "devices.mobile": "모바일에서는 세로 스크롤을 추적하며 첫 스크롤에서 활성화됩니다.", "devices.visible": "반응형 CSS로 숨겨진 요소를 포함해 숨겨졌거나 화면 밖에 있는 대상은 무시됩니다.", physicsHeading: "물리학 아이디어", physicsEnergy: "각 대상을 작은 중력 우물이라고 생각해 보세요. 움직임은 **운동 에너지**를 만들고 대상까지의 거리는 **위치 에너지**를 만듭니다. 빠른 포인터나 스크롤에는 아직 이동할 힘이 있지만, 대상 근처의 느린 움직임은 그곳에 머무는 모습에 가깝습니다. 엔진은 열역학과 비슷한 규칙을 사용해 이런 낮은 에너지의 도착점을 더 가능성 높은 선택으로 봅니다.", physicsKalman: "브라우저의 움직임 데이터에는 작은 튐과 오차가 있습니다. **칼만 필터**는 물리 계산 전에 이 잡음을 부드럽게 합니다. 쉽게 말하면 의도한 움직임과 불안정한 측정값을 구분하도록 돕습니다. 이 과정은 모두 라이브러리 안에서 일어나며 앱에는 `onIntent`만 노출됩니다.", paperNote: "[연구 논문 보기](https://intentlink.dev/paper). ACM에 정식 게시되기 전까지는 임시 링크입니다.",
  },
  "intent-provider": {
    "toc.usage": "사용법", "toc.notes": "주의 사항", intro: "앱 루트 가까이에 `IntentProvider`를 한 번 추가하세요. `IntentLink`와 `useIntentTarget`을 위한 공유 의도 엔진을 실행합니다.", usageHeading: "사용법", notesHeading: "주의 사항", "notes.once": "앱마다 provider 하나만 사용하고 중첩하지 마세요.", "notes.props": "`children`만 필요하며 다른 설정은 없습니다.", "notes.client": "자체적으로 클라이언트 경계를 포함하므로 Next.js 서버 레이아웃에서 바로 가져올 수 있습니다.",
  },
  "intent-link": {
    "toc.props": "Props", "toc.onintent": "onIntent", "toc.tuning": "importance와 cost", "toc.example": "예제", intro: "일반적으로 Next.js `Link`를 사용하는 곳에 `IntentLink`를 사용하세요. 클릭 전에 시작할 작업을 `onIntent`에 추가합니다.", propsHeading: "Props", "col.prop": "Prop", "col.type": "타입", "col.default": "기본값", "col.description": "설명", "prop.href": "필수. Next.js Link와 같습니다.", "prop.importance": "작업이 얼마나 쉽게 실행될지 정합니다.", "prop.cost": "예측이 얼마나 신중할지 정합니다.", "prop.onIntent": "사용자가 이 링크를 선택할 가능성이 높을 때 한 번 호출됩니다.", "prop.rest": "className, style, ref를 포함한 모든 Next.js Link 또는 앵커 prop.", prefetchNote: "`IntentLink`는 Next.js 자동 프리페치를 끕니다. 예측 프리페치를 사용하려면 `onIntent` 안에서 `router.prefetch()`를 호출하세요.", onIntentHeading: "onIntent", onIntentBody: "이 콜백은 인수를 받지 않고 값을 반환하지 않습니다. 접근할 때마다 한 번 실행되고 사용자가 멀어지면 다시 실행할 수 있습니다.", tuningHeading: "importance와 cost", tuningBody: "이 설정은 선택 사항입니다. 대부분의 앱은 기본값을 유지하세요.", "tuning.importance": "`importance`는 작업이 얼마나 쉽게 시작되는지 제어합니다. 기본값: `medium`.", "tuning.cost": "`cost`는 예측이 얼마나 신중한지 제어합니다. 기본값: `low`.", "tuning.defaults": "실제 작업을 데스크톱과 모바일 모두에서 테스트한 뒤에만 값을 바꾸세요.", exampleHeading: "예제",
  },
  "use-intent-target": {
    "toc.button": "기본 사용법", "toc.options": "옵션", "toc.third-party": "서드파티 컴포넌트", intro: "`useIntentTarget`은 버튼, 카드 또는 다른 HTML 요소에 의도 감지를 추가합니다. 반환된 ref를 관찰할 요소에 연결하세요.", buttonHeading: "기본 사용법", buttonBody: "클라이언트 컴포넌트에서 hook을 호출하고 반환된 ref를 하나의 HTML 요소에 연결합니다.", optionsHeading: "옵션", "options.onIntent": "`onIntent`: 요소가 유력한 대상이 되었을 때 실행할 작업.", "options.importance": "`importance`: 선택 가능한 `high`, `medium`, `low`. 기본값: `medium`.", "options.cost": "`cost`: 선택 가능한 `high`, `medium`, `low`. 기본값: `low`.", thirdPartyHeading: "서드파티 컴포넌트", thirdPartyBody: "컴포넌트가 실제 HTML 요소로 ref를 전달한다면 직접 연결하세요.", wrapperBody: "ref를 전달하지 않는다면 네이티브 요소로 감싸고 그 래퍼에 ref를 연결하세요.",
  },
  "custom-intent-components": {
    "toc.intent-button": "IntentButton", "toc.intent-button-usage": "사용법", "toc.intent-article": "IntentArticle", "toc.intent-article-usage": "사용법", intro: "같은 종류의 대상이 많다면 `useIntentTarget`을 한 번 감싼 뒤 만들어진 컴포넌트를 재사용하세요.", buttonHeading: "재사용 가능한 IntentButton", buttonBody: "일반 버튼 props와 함께 `onIntent`, `importance`, `cost`를 받습니다.", articleHeading: "재사용 가능한 IntentArticle", articleBody: "같은 패턴을 상품 카드나 다른 의미 있는 컨테이너에도 사용할 수 있습니다.", usageHeading: "사용법",
  },
  examples: {
    "toc.route": "경로 프리페치", "toc.data": "데이터 준비", "toc.asset": "이미지 미리 로드", "toc.action": "컴포넌트 준비", intro: "`onIntent`로 안전하고 반복 가능한 준비 작업을 시작하세요. 구매, 메시지 전송, 폼 제출처럼 되돌릴 수 없는 작업은 실제 클릭 뒤에 실행해야 합니다.", routeHeading: "경로 프리페치", routeBody: "가장 일반적인 Next.js 사용 사례입니다.", dataHeading: "데이터 준비", dataBody: "다음 화면에 필요한 정보를 데이터 라이브러리의 캐시에 넣습니다.", assetHeading: "이미지 미리 로드", assetBody: "이동하기 전에 큰 에셋 로드를 시작합니다.", actionHeading: "컴포넌트 준비", actionBody: "대상이 링크가 아니라면 `useIntentTarget`을 사용하세요.",
  },
  troubleshooting: {
    "toc.nothing": "아무 일도 일어나지 않음", "toc.prefetch": "예상치 못한 프리페치", "toc.custom": "사용자 컴포넌트 ref", "toc.mobile": "모바일 테스트", "toc.development": "개발 모드", nothingHeading: "onIntent가 실행되지 않음", "nothing.provider": "이 링크들 위에 `IntentProvider`가 있나요?", "nothing.callback": "대상에 `onIntent` 콜백이 있나요? 콜백이 없는 대상은 등록되지 않습니다.", "nothing.input": "데스크톱에서는 포인터를 움직이고 모바일에서는 스크롤하세요. 첫 상호작용 전까지 엔진은 쉽니다.", "nothing.size": "대상이 보이며 실제 너비와 높이를 가지는지 확인하세요.", "nothing.wiring": "연결을 확인하기 위해 잠시 `importance=\"high\"`, `cost=\"low\"`를 사용한 뒤 기본값으로 되돌리세요.", prefetchHeading: "onIntent 없이 경로가 프리페치됨", prefetchBody: "반응형 레이아웃에 숨겨진 링크를 포함해 같은 경로를 가리키는 다른 Next.js `Link`가 있는지 확인하세요. `router.prefetch()`를 직접 호출하는 코드도 찾아보세요.", customHeading: "사용자 컴포넌트가 작동하지 않음", customBody: "컴포넌트는 실제 HTML 요소로 ref를 전달해야 합니다. 그렇지 않다면 `div` 같은 네이티브 래퍼에 의도 ref를 연결하세요.", mobileHeading: "모바일에서 테스트", mobileBody: "실제 터치 기기를 사용하거나 브라우저 개발자 도구에서 터치 에뮬레이션을 켠 뒤 스크롤하세요. 데스크톱 창을 좁히는 것만으로는 모바일 동작이 활성화되지 않을 수 있습니다.", developmentHeading: "개발 환경과 프로덕션 환경", developmentBody: "중요한 동작은 프로덕션 빌드에서도 확인하세요. React 개발 검사와 프레임워크 도구 때문에 콜백이나 네트워크 요청이 프로덕션과 다르게 보일 수 있습니다.",
  },
  changelog: {
    "toc.v1013": "1.0.13", v1013Heading: "1.0.13 (현재)", "v1013.api": "버튼, 카드, 서드파티 컴포넌트를 위한 `useIntentTarget`을 추가했습니다.", "v1013.visibility": "보이는 대상만 예측 작업에 참여합니다.", "v1013.behavior": "`onIntent`는 단순한 void 콜백이 되었고 내부 예측 상태는 더 이상 공개 API가 아닙니다.", "v1013.performance": "등록, 렌더링, 대상이 많은 페이지의 성능을 개선했습니다.", history: "npm에서 [전체 버전 기록](https://www.npmjs.com/package/intent-link?activeTab=versions)을 확인하세요.",
  },
};

export { ko };
