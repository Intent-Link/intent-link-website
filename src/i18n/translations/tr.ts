import type { TranslationBundle } from "./bundle";

/** Turkish (tr) translations. */
const tr: TranslationBundle = {
  common: {
    tagline: "Tıklamadan önce hedefi bil.", nav: { docs: "Belgeler", github: "GitHub" },
    footer: {
      tagline: "Tıklamadan önce hedefi tahmin edin. MIT lisanslıdır.", groupTitles: { docs: "Belgeler", resources: "Kaynaklar", forAi: "Yapay zekâ için" }, links: { quickstart: "Hızlı başlangıç", api: "API başvurusu", guides: "Kılavuzlar", github: "GitHub", npm: "npm", changelog: "Değişiklikler", license: "Lisans (MIT)", llmsText: "llms.txt" }, builtLine: "Site, Intent Link ön yüklemesiyle oluşturuldu", copyright: (name: string) => `© 2026 ${name} · MIT`,
    },
    actions: { copy: "kopyala", copied: "✓ kopyalandı", getStarted: "Başlayın" }, docs: { copyForLlm: "LLM için kopyala", viewMarkdown: "Markdown olarak görüntüle", close: "kapat" }, notFound: { title: "Sayfa bulunamadı", backHome: "Ana sayfaya dön" }, language: { ariaLabel: "Dil seç" }, aria: { primaryNav: "Ana", docsNav: "Belgeler", pageNav: "Bu sayfada", toggleMenu: "Menüyü aç veya kapat", loading: "Yükleniyor" },
  },
  metadata: {
    title: "intent-link — Tıklamadan önce hedefi bil", description: "React ve Next.js için hedef tahmini kitaplığı. Kullanıcının nereye yöneldiğini tahmin eder ve sonraki gezinmeyi tıklamadan önce hazırlar.", docs: { indexTitle: "Belgeler — intent-link", pageTitle: (title: string) => `${title} — intent-link belgeleri` },
  },
  sections: {
    hero: {
      ariaLabel: "Giriş", eyebrow: "React ve Next.js için hedef tahmini", titleLead: "Hedefi bil", titleEmphasis: "tıklamadan önce.", subcopy: "intent-link, işaretçi veya kaydırma hareketini okuyarak kullanıcının yöneldiği öğeyi tahmin eder. Sonraki sayfayı önceden yükleyin, bir önizleme hazırlayın veya arayüzü uyarlayın. Tek sinyal, birçok kullanım.", getStarted: "Başlayın", liveDemo: "Canlı demo",
    },
    predictionFieldDemo: {
      eyebrow: "02 / canlı demo", ariaLabel: "Canlı tahmin demosu", heading: "Bir karta yönelin ve önceden yüklenmesini izleyin.", bodyTail: "Aşağıdaki konsol, aynı hareketi izleyen intent-link’tir.", modeHintCursor: "İşaretçiyi bir karta doğru hareket ettirin; siz ulaşmadan önce rotanıza göre hazırlanır.", modeHintTouch: "Bir karta doğru kaydırın; dokunmadan önce kaydırma hızınıza göre hazırlanır.", addressBar: "shop.example/new-in", categories: (count: number) => `${count} kategori`, storefrontIdle: "// ön yüklemeyi başlatmak için bir karta yönelin", consoleTitle: "intent-link", reset: "sıfırla", importanceLabel: "importance", costLabel: "cost", streamTitle: "onIntent akışı", firedCount: (count: number) => `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} tetikleme`, streamEmpty: "// bir sinyal başlatmak için bir karta yönelin…", levels: { low: "düşük", medium: "orta", high: "yüksek" }, tiles: { women: "Kadın", men: "Erkek", kids: "Çocuk", shoes: "Ayakkabı", bags: "Çanta", accessories: "Aksesuar", sport: "Spor", denim: "Denim", outerwear: "Dış giyim", beauty: "Güzellik", home: "Ev", sale: "İndirim", electronics: "Elektronik", watches: "Saat", jewelry: "Mücevher", furniture: "Mobilya", gifts: "Hediye", travel: "Seyahat" },
    },
    latencyRace: {
      eyebrow: "03 / farkı hissedin", ariaLabel: "Gecikme karşılaştırması", heading: "Aynı tıklama. Beklemenin yarısı.", body: "Bir sayfa ağı bekler. Diğeri siz yaklaşırken hazırlandı ve şimdi hazır. Açın ve görün.", timeSavedLabel: "bu oturumda kazanılan süre", milliseconds: (value: number) => `${value} ms`, instant: (value: number) => `${value} ms · anında`, withoutTitle: "intent-link olmadan", withTitle: "intent-link ile", notLoaded: "yüklenmedi", idle: "boşta", prefetching: "önceden yükleniyor…", ready: "önceden yüklendi ✓ hazır", fetching: "yükleniyor…", productName: "Kapitone ceket", productPrice: "₺5.900", productPath: "/product/quilted-jacket", addToCart: "Sepete ekle", open: "Ürünü aç →", opening: "açılıyor…", replay: "↻ Tekrarla", hintBefore: "İpucu: önce sağ panele yönelin; intent-link onu önceden yükler.", hintAfter: "Şimdi açın; önceden yüklenen sayfa hazır.",
    },
    codeExample: {
      eyebrow: "04 / entegre edin", ariaLabel: "Kod örneği", heading: "Yaygın kullanım için iki satır.", body: "Uygulamayı bir kez sarın ve bağlantıları değiştirin. Diğer öğeler için intent referansını kullanın.", tabs: { simple: "basit", custom: "özel" }, copyForLlm: "LLM için kopyala", fullApiLead: "Tam API ", fullApiLink: "belgelerde →", quickstartLabel: "hızlı başlangıç",
    },
    whyDifferent: {
      eyebrow: "05 / farklı", ariaLabel: "Neden farklı", heading: "Görünürlük değil. Hover değil. Niyet.", body: "Diğer yaklaşımlar kaba bir sinyalle tahmin yürütür. intent-link hedefi öngörür.", columns: { approach: "Yaklaşım", timing: "Zamanlama", selective: "Seçicilik", perUser: "Kullanıcıya özel", confidence: "Güven", setup: "Kurulum" }, highlightName: "intent-link",
      rows: [
        { name: "rel=prefetch", timing: "manuel, sabit", selective: "önceden siz seçersiniz", perUser: "—", confidence: "—", setup: "elle tanımlanır" },
        { name: "ForesightJS", timing: "rota üzerinde", selective: "hedef", perUser: "✓", confidence: "—", setup: "kayıt + callback" },
        { name: "instant.page", timing: "hover sırasında", selective: "bir, geç", perUser: "✓", confidence: "—", setup: "eklenebilir" },
        { name: "Next.js prefetch", timing: "görününce", selective: "görünen her şey", perUser: "—", confidence: "—", setup: "yerleşik" },
        { name: "Guess.js", timing: "önceden hesaplanmış", selective: "en iyi tahminler", perUser: "toplu", confidence: "—", setup: "derleme + veri" },
        { name: "intent-link", timing: "ulaşmadan önce", selective: "hedef", perUser: "✓", confidence: "✓", setup: "eklenebilir" },
      ],
      benefits: [
        { stat: "~anında", title: "Anında gezinme", body: "Sonraki sayfa tıklamadan önce yüklenir." },
        { stat: "~%98", title: "Yüksek doğruluk", body: "Rota ve güven doğru hedefi belirler." },
        { stat: "2 ayar", title: "Ayarlanabilir", body: "importance ve cost ne kadar erken davranılacağını kontrol eder." },
        { stat: "hazır / özel", title: "İki kullanım", body: "Bağlantılar için IntentLink, diğer öğeler için useIntentTarget." },
        { stat: "React · Next", title: "Çatıya özgü", body: "Next.js App Router’da next/link yerine doğrudan kullanılabilir." },
        { stat: "MIT", title: "Küçük ve açık", body: "Veri toplanmaz; hareket cihazdan çıkmaz." },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / ön yüklemenin ötesi", ariaLabel: "Ön yüklemenin ötesi", heading: "Tek sinyal. Birçok kullanım.", body: "Ön yükleme temel kullanımdır; onIntent verileri, görselleri ve bileşenleri de hazırlayabilir.", uses: [
        { tag: "// veri", title: "Verileri hazırlayın", body: "Sonraki ekran açılmadan veri önbelleğini doldurun." },
        { tag: "// önizleme", title: "Önizleme hazırlayın", body: "Kullanıcı bir öğeye yönelirken önizlemeyi hazırlayın." },
        { tag: "// kaynak", title: "Kaynakları yükleyin", body: "Büyük görselleri veya dosyaları erken yüklemeye başlayın." },
        { tag: "// bileşen", title: "Arayüzü hazırlayın", body: "Son etkileşimden önce güvenli ve tekrarlanabilir işleri başlatın." },
      ], pattern: [{ step: "01", title: "Gözlemle", body: "hareketi" }, { step: "02", title: "Tahmin et", body: "olası hedefi" }, { step: "03", title: "Hazırla", body: "ulaşmadan önce" }], patternLabel: "genel model", patternClose: "Hareket, olası hedef hakkında bilgi taşır. intent-link bu sinyali basit bir onIntent çağrısına dönüştürür.",
    },
    ctaBand: { ariaLabel: "Başlayın", heading: "Anında hissedilen gezinme sunun.", body: "Yaygın kullanım için iki bileşen. Özel öğeler için bir hook.", getStarted: "Başlayın", github: "GitHub", install: "$ npm install intent-link" },
  },
  docs: {
    groupTitles: { gettingStarted: "Başlarken", apiReference: "API başvurusu", guides: "Kılavuzlar", more: "Diğer" },
    pageTitles: { quickstart: "Hızlı başlangıç", "how-it-works": "Nasıl çalışır", "intent-provider": "IntentProvider", "intent-link": "IntentLink", "use-intent-target": "useIntentTarget", "custom-intent-components": "Özel Intent bileşenleri", examples: "Örnekler", troubleshooting: "Sorun giderme", changelog: "Değişiklikler" },
  },
};

export { tr };
