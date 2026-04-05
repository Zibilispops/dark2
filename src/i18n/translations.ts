export type Lang = 'ja' | 'en';

export const translations = {
  // ── Navbar ──────────────────────────────────────────────
  'nav.shop':    { ja: 'ショップ',         en: 'Shop' },
  'nav.studio':  { ja: 'スタジオ',         en: 'Studio' },
  'nav.login':   { ja: 'ログイン',         en: 'Login' },
  'nav.account': { ja: 'アカウント',       en: 'Account' },
  'nav.cart':    { ja: 'カート',           en: 'Cart' },

  // ── Hero (home) ──────────────────────────────────────────
  'hero.eyebrow': {
    ja: '// [001] DTGスタジオ · 岐阜JP · 2024年創設',
    en: '// [001] DTG Studio · Gifu JP · Est. 2024',
  },
  'hero.line1': { ja: '未来を',     en: 'Wear The' },
  'hero.line2': { ja: '着こなせ',   en: 'Future'   },
  'hero.sub': {
    ja: 'デジタル最前線のための、本物のアパレル。\n岐阜でデザイン、オンデマンドで印刷、世界中へ発送。',
    en: 'High-fidelity garments for the digital vanguard.\nDesigned in Gifu, printed on demand, shipped globally.',
  },
  'hero.cta.shop':   { ja: 'コレクションを見る →', en: 'Shop Collection →' },
  'hero.cta.studio': { ja: 'スタジオ →',          en: 'Studio →' },

  // ── Hero Status Bar ──────────────────────────────────────
  'hero.status.on':       { ja: 'ファクトリー稼働中', en: 'Factory Online' },
  'hero.status.capacity': { ja: 'キャパシティ: 88%', en: 'Capacity: 88%' },
  'hero.status.queue':    { ja: 'キュー: 12件',      en: 'Queue: 12 orders' },

  // ── Marquee Ticker ───────────────────────────────────────
  'marquee.1': { ja: 'デジタル・ヴァンガード・アパレル', en: 'DIGITAL VANGUARD APPAREL' },
  'marquee.2': { ja: 'DTGプリント・オンデマンド',       en: 'DTG PRINT ON DEMAND' },
  'marquee.3': { ja: '岐阜スタジオ',                   en: 'GIFU STUDIO' },
  'marquee.4': { ja: 'コレクション 001',               en: 'COLLECTION 001' },
  'marquee.5': { ja: '限定数量',                       en: 'LIMITED AVAILABILITY' },
  'marquee.6': { ja: '世界発送',                       en: 'SHIPS WORLDWIDE' },
  'marquee.7': { ja: '日本デザイン',                   en: 'DESIGNED IN JAPAN' },

  // ── Dispatch (newsletter) section ─────────────────────────
  'dispatch.eyebrow': { ja: '// ファクトリー・ディスパッチ', en: '// FACTORY DISPATCH' },
  'dispatch.title':   { ja: 'ドロップアラートを受け取る',    en: 'RECEIVE DROP ALERTS' },
  'dispatch.sub': {
    ja: 'コレクション002 ロード中。最初に知ろう。',
    en: 'COLLECTION 002 LOADING. BE FIRST TO DEPLOY.',
  },
  'dispatch.cta':     { ja: 'ディスパッチに参加 →', en: 'JOIN DISPATCH →' },
  'dispatch.note':    { ja: '通知のみ。いつでも解除可。', en: 'NO NOISE. DROP ALERTS ONLY. UNSUBSCRIBE ANYTIME.' },
  'dispatch.placeholder': { ja: 'メールアドレス',   en: 'Email address' },

  // ── Footer ───────────────────────────────────────────────
  'footer.tagline':    { ja: '// DTGスタジオ · 岐阜、日本',  en: '// DTG Studio · Gifu, Japan' },
  'footer.auth':       { ja: '// Bad Printer 正規販売店',    en: '// Authorized Bad Printer Reseller' },
  'footer.collection': { ja: '// コレクション 001',          en: '// Collection 001' },
  'footer.nav.title':  { ja: '// ナビゲート',                en: '// Navigate' },
  'footer.nav.shop':   { ja: 'コレクションを見る',           en: 'Shop Collection' },
  'footer.nav.studio': { ja: 'スタジオ',                     en: 'Studio' },
  'footer.nav.shipping': { ja: '配送・返品',                 en: 'Shipping & Returns' },
  'footer.nav.login':  { ja: 'オペレーターログイン',         en: 'Operator Login' },
  'footer.contact.title':    { ja: '// コンタクト',          en: '// Contact' },
  'footer.contact.type':     { ja: '注文・返品',             en: 'Orders & Returns' },
  'footer.contact.response': { ja: '返信：1〜2営業日',       en: 'Response: 1–2 business days' },
  'footer.copy':  {
    ja: '© 2024 Dark Factory · 岐阜スタジオ · 全著作権所有',
    en: '© 2024 Dark Factory · Gifu Studio · All rights reserved',
  },
  'footer.print': {
    ja: 'オンデマンド印刷 · Bad Printer 6.6oz · 世界発送',
    en: 'Printed on demand · Bad Printer 6.6oz · Ships worldwide',
  },
} as const;

export type TranslationKey = keyof typeof translations;
