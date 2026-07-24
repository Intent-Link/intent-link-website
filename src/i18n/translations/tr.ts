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
      ariaLabel: "Giriş", eyebrow: "React ve Next.js için hedef tahmini", titleLead: "Hedefi bil", titleEmphasis: "tıklamadan önce.", subcopy: "1.37 fetch:click oranına ulaşın. Intent-link, hareket hızı ve mesafeden kaynaklanan kinetik ve potansiyel enerjiyi kullanarak olasılığı hesaplar.", getStarted: "Başlayın", liveDemo: "Canlı demo",
      well: { caption: "piksellerin yerçekimi var" },
    },
    predictionFieldDemo: {
      eyebrow: "02 / canlı demo", ariaLabel: "Canlı tahmin demosu", heading: "Bir karta yönelin ve önceden yüklenmesini izleyin.", addressBar: "shop.example/new-in", categories: (count: number) => `${count} kategori`, reset: "sıfırla", importanceLabel: "importance", costLabel: "cost", streamTitle: "onIntent akışı", firedCount: (count: number) => `${count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count} tetikleme`, streamEmpty: "// bir sinyal başlatmak için bir karta yönelin…", levels: { low: "düşük", medium: "orta", high: "yüksek" }, tiles: { women: "Kadın", men: "Erkek", kids: "Çocuk", shoes: "Ayakkabı", bags: "Çanta", accessories: "Aksesuar", sport: "Spor", denim: "Denim", outerwear: "Dış giyim", beauty: "Güzellik", home: "Ev", sale: "İndirim", electronics: "Elektronik", watches: "Saat", jewelry: "Mücevher", furniture: "Mobilya", gifts: "Hediye", travel: "Seyahat" },
    },
    latencyRace: {
      eyebrow: "03 / farkı hissedin", ariaLabel: "Gecikme karşılaştırması", heading: "Aynı tıklama. Beklemeyi atlayın.", body: "Bir sayfa ağ isteğini beklerken diğeri kullanıcının hareket yörüngesi sırasında getirilir.", timeSavedLabel: "bu oturumda kazanılan süre", milliseconds: (value: number) => `${value} ms`, instant: (value: number) => `${value} ms · anında`, withoutTitle: "intent-link olmadan", withTitle: "intent-link ile", notLoaded: "yüklenmedi", idle: "boşta", prefetching: "önceden yükleniyor…", ready: "önceden yüklendi ✓ hazır", fetching: "yükleniyor…", productName: "Kapitone ceket", productPrice: "₺5.900", productPath: "/product/quilted-jacket", addToCart: "Sepete ekle", open: "Ürünü aç →", opening: "açılıyor…", replay: "↻ Tekrarla",
    },
    whyDifferent: {
      eyebrow: "04 / farklı", ariaLabel: "Neden farklı", heading: "Görünürlük değil. Hover değil. Niyet.", body: "Diğer tüm yaklaşımlar ya geç kalır ya da kaynak israf eder.", columns: { approach: "Yaklaşım", timing: "Zamanlama", selective: "Seçicilik" }, highlightName: "intent-link",
      rows: [
        { name: "ForesightJS", timing: "rota üzerinde", selective: "hedef" },
        { name: "instant.page", timing: "hover sırasında", selective: "bir" },
        { name: "Next.js prefetch", timing: "görününce", selective: "görünen her şey" },
        { name: "Guess.js", timing: "önceden hesaplanmış", selective: "en iyi tahminler" },
        { name: "intent-link", timing: "ulaşmadan önce", selective: "hedef" },
      ],
      benefits: [
        { stat: "Anında gezinme", title: "Sonraki sayfayı tıklamadan önce getirin" },
        { stat: "1.37", title: "Fetch:Click oranı" },
        { stat: "Ayarlanabilir", title: "importance ve cost ağırlıklarını yapılandırın" },
        { stat: "useIntentTarget", title: "Özel bileşenler oluşturun" },
        { stat: "React · Next", title: "En popüler çatı için" },
        { stat: "MIT", title: "Açık kaynak, veri toplama yok" },
      ],
    },
    beyondPrefetch: {
      eyebrow: "01 / uygulamalar", ariaLabel: "Ön yüklemenin ötesi", heading: "Tek sinyal. Birçok kullanım.", uses: [
        { tag: "// analiz", title: "Yalnızca tıklamalar değil, niyet", body: "Yalnızca eylemleri değil, yarıda bırakılan yaklaşımları ve tereddütleri kaydedin." },
        { tag: "// gösterim", title: "Aşamalı gösterim", body: "Kullanıcı yöneldiği anda bir önizleme veya araç ipucu açın." },
        { tag: "// performans", title: "Bağlantıları önceden getirin", body: "Kullanıcı tıklamadan önce gezinme bağlantılarını önceden getirin." },
        { tag: "// uyarlanabilir UI", title: "Destekli hedefleme", body: "Kullanıcı yaklaştıkça hedefleri büyütün veya yakınlaştırın." },
      ], pattern: [{ step: "01", title: "Gözlemle", body: "hareketi" }, { step: "02", title: "Tahmin et", body: "olası hedefi" }, { step: "03", title: "Hazırla", body: "ulaşmadan önce" }]
    },
    ctaBand: { ariaLabel: "Başlayın", heading: "Anında hissedilen gezinme sunun.", getStarted: "Başlayın", github: "GitHub", install: "$ npm install intent-link" },
  },
  docs: {
    groupTitles: { gettingStarted: "Başlarken", apiReference: "API başvurusu", guides: "Kılavuzlar", more: "Diğer" },
    pageTitles: { quickstart: "Hızlı başlangıç", "how-it-works": "Nasıl çalışır", "intent-provider": "IntentProvider", "intent-link": "IntentLink", "use-intent-target": "useIntentTarget", "custom-intent-components": "Özel Intent bileşenleri", examples: "Örnekler", troubleshooting: "Sorun giderme", changelog: "Değişiklikler" },
  },
};

export { tr };
