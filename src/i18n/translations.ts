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

  // ── About Page ───────────────────────────────────────────
  'about.h1':        { ja: 'ザ・スタジオ',    en: 'The Studio' },
  'about.eyebrow':   { ja: '// [001] 岐阜スタジオ · Bad Printer 公式販売店', en: '// [001] Gifu Studio · Official Bad Printer Reseller' },
  'about.comfort.h2': { ja: 'プレミアム・コンフォート', en: 'Premium Comfort' },
  'about.comfort.p1': {
    ja: 'Dark Factoryは岐阜の小さな独立スタジオ。ユニセックスに最適なHeavyweight 6.6oz（225 GSM）プレミアムコットンを専門とする、Bad Printer公式販売店だ。',
    en: 'Dark Factory is a small, independent studio in Gifu. We are the authorized reseller for Bad Printer, specializing in Heavyweight 6.6oz (225 GSM) premium cotton for a perfect unisex fit.',
  },
  'about.comfort.p2': {
    ja: 'Bad PrinterのTシャツを選ぶのは、ただの買い物じゃない。それはマニフェスト、デジタルの美学がリアルになる瞬間だ。私たちは機能的な鋭さより、肌に優しいDTGの感触を優先する。',
    en: "Choosing a Bad Printer tee isn't just a purchase; it's an act of manifestation. It's the moment your digital aesthetic finally becomes a physical reality. We prioritize skin-soft comfort above all else—intentionally choosing a soft, breathable DTG touch over clinical sharpness.",
  },
  'about.pillars.title': { ja: 'ザ・ピラーズ',  en: 'The Pillars' },
  'about.pillars.verified': { ja: '確認済み',   en: 'Verified' },
  'about.pillar.1.label':  { ja: '1. コンフォート', en: '1. Comfort' },
  'about.pillar.1.detail': { ja: 'DTGプリント、ゼロタッチ感覚。', en: 'DTG print for Zero touch feeling.' },
  'about.pillar.2.label':  { ja: '2. クオリティ',   en: '2. Quality' },
  'about.pillar.2.detail': { ja: '6.6oz (225 GSM) — ヘビーウェイト。', en: '6.6oz (225 GSM) — Heavyweight.' },
  'about.pillar.3.label':  { ja: '3. 信頼性',       en: '3. Authenticity' },
  'about.pillar.3.detail': { ja: 'Bad Printer 公式販売店。', en: 'Authorized Bad Printer reseller.' },
  'about.pillar.4.label':  { ja: '4. アイデンティティ', en: '4. Identity' },
  'about.pillar.4.detail': { ja: '小規模スタジオ、手作業ディスパッチ。', en: 'Small-studio, hand-dispatched craft.' },
  'about.pillar.5.label':  { ja: '5. アーカイブ',   en: '5. Archive' },
  'about.pillar.5.detail': { ja: 'デジタルから物理へ、ダウンロード済み。', en: 'Downloaded from digital to physical.' },
  'about.blank.eyebrow': { ja: '// ザ・ブランク', en: '// The Blank' },
  'about.blank.p1': {
    ja: 'すべてのブランクは同じじゃない。Bad Printer Heavyweightは225 GSM（6.6oz）、15/天糸使いのシングルジャージー素材。ドライでクリスプなテクスチャーと、クラシックなアメリカンスタイルを実現する。',
    en: 'Not all blanks are equal. The Bad Printer Heavyweight is 225 GSM (6.6oz) — 15/- Tenshiku Single Jersey woven with open-end yarn. That construction creates a dry, crisp texture with a classic American feel, holding shape wash after wash.',
  },
  'about.blank.p2': {
    ja: 'このブランクへのDTGプリントは白地でも透けゼロ。インクが繊維に染み込む。脇仕様（Waki-shiyo）構造で、洗っても体の歪みなし。二重ステッチのネックラインで長期伸び耐性を確保。',
    en: 'DTG printing on this blank produces zero transparency even on white — ink sits in the fiber, not on top of it. Side-seam (Waki-shiyo) construction prevents torso twisting after washing. The double-stitched neckline ensures long-term stretch resistance.',
  },
  'about.stat.heavyweight': { ja: 'ヘビーウェイト', en: 'Heavyweight' },
  'about.stat.heavyweight.d': { ja: '225 GSM — 天糸シングルジャージー', en: '225 GSM — Tenshiku Single Jersey' },
  'about.stat.cotton':   { ja: 'コットン',          en: 'Cotton' },
  'about.stat.cotton.d': { ja: '15/- ジャージー · オープンエンドヤーン', en: '15/- Jersey · Open-end yarn' },
  'about.stat.dtg':      { ja: 'コンフォートプリント', en: 'Comfort Print' },
  'about.stat.dtg.d':    { ja: 'ゼロタッチ · 自然なカラーフェード', en: 'Zero touch feel · Colors fade naturally' },
  'about.stat.waki':     { ja: '脇仕様ビルド',       en: 'Side-Seam Build' },
  'about.stat.waki.d':   { ja: '体の歪みなし · 二重ステッチネック', en: 'No torso twist · Double-stitched neck' },
  'about.philosophy.h2': {
    ja: 'スクリーンだけじゃ足りなかった。\n岐阜に根ざして。',
    en: 'The screen wasn\'t enough.\nRooted in Gifu.',
  },
  'about.philosophy.quote': {
    ja: '「Bad Printerが認めた。岐阜スタジオで具現化——スクリーンに留まるべきじゃないものがあるから。」',
    en: '"Authorized by Bad Printer. Manifest in our Gifu studio—because some things aren\'t meant to stay on a screen."',
  },
  'about.philosophy.cta': { ja: 'コレクションを見る', en: 'View Collection' },

  // ── Logistics Page ───────────────────────────────────────
  'logistics.eyebrow': { ja: '// [物流] 配送・配達ポリシー', en: '// [LOGISTICS] Shipping & Delivery Policy' },
  'logistics.h1':      { ja: 'ロジスティクス',      en: 'Logistics' },
  'logistics.s01':     { ja: '01 / 送料・お届け時間', en: '01 / Shipping Rates & Delivery Times' },
  'logistics.s02':     { ja: '02 / 荷物の追跡',      en: '02 / Tracking Your Order' },
  'logistics.s03':     { ja: '03 / 配達方法',         en: '03 / Delivery Methods' },
  'logistics.s04':     { ja: '04 / 重要なお知らせ',   en: '04 / Important Notices' },
  'logistics.s05':     { ja: '05 / 生産',             en: '05 / Production' },
  'logistics.s06':     { ja: '06 / 返品・交換',       en: '06 / Returns & Exchanges' },
  'logistics.s07':     { ja: '07 / お問い合わせ',     en: '07 / Contact' },
  'logistics.sector.mainland': { ja: '本州・四国・九州', en: 'Mainland Japan (Honshu, Shikoku, Kyushu)' },
  'logistics.sector.hokkaido': { ja: '北海道・沖縄',   en: 'Hokkaido & Okinawa' },
  'logistics.sector.remote':   { ja: '離島（離島）',  en: 'Remote Islands (Rito)' },
  'logistics.service.standard': { ja: '標準（ポストへ投函）', en: 'Standard (Mailbox)' },
  'logistics.service.express':  { ja: '速達（手渡し）',       en: 'Express (Hand-delivered)' },
  'logistics.sector.note': {
    ja: '*注：離島速達料金は目安です。お客さまの郵便番号によって中継料が発生する場合はご連絡します。',
    en: '*Note: Remote Island Express rates are estimates. We will contact you if your specific zip code requires an additional "Relay Fee" (Chūkei-ryō).',
  },
  'logistics.tracking.standard.type':    { ja: '標準（ゆうパケット）', en: 'Standard (Yu-Packet)' },
  'logistics.tracking.standard.details': {
    ja: 'ヤマト経由で輸送追跡可能。最終配達ステータスは日本郵便追跡で更新（12〜24時間のタイムラグあり）。',
    en: 'Track transit via Yamato; final delivery status updates through Japan Post tracking (12–24h sync delay).',
  },
  'logistics.tracking.express.type':    { ja: '速達（TA-Q-BIN）', en: 'Express (TA-Q-BIN)' },
  'logistics.tracking.express.details': {
    ja: 'ヤマト運輸システムでリアルタイム追跡可能。',
    en: 'Real-time tracking available exclusively through the Yamato Transport system.',
  },
  'logistics.tracking.note': {
    ja: '全注文に12桁のヤマト追跡番号をメールにてお知らせします。',
    en: 'Every order includes a 12-digit Yamato Tracking Number via email.',
  },
  'logistics.delivery.standard.method':  { ja: '標準（ゆうパケット）', en: 'Standard (Yu-Packet)' },
  'logistics.delivery.standard.details': {
    ja: 'ポストへ直接投函。サイン不要。厚さ3cm以内のパッケージを受け入れる必要あり。',
    en: 'Delivered directly to mailbox. Signature not required. Must accept a package 3cm thick.',
  },
  'logistics.delivery.express.method':  { ja: '速達（TA-Q-BIN）', en: 'Express (TA-Q-BIN)' },
  'logistics.delivery.express.details': {
    ja: '手渡し。サインまたは安全な置き配が必要。最大30万円の保険付き。',
    en: 'Hand-delivered. Requires signature or secure drop-off. Includes premium insurance up to ¥300,000.',
  },
  'logistics.notice.1.label': { ja: '「配達完了」の確定性', en: 'The "Delivered" Finality' },
  'logistics.notice.1.text':  {
    ja: '追跡は「ポストへ投函済み」で終了。配達後の盗難は保険対象外。鍵のないポストには速達を推奨。',
    en: 'Tracking ends at "Delivered to Mailbox." Theft after delivery is not insured. We recommend Express for unsecured mailboxes.',
  },
  'logistics.notice.2.label': { ja: '3cm超え返送', en: 'The 3cm Rejection' },
  'logistics.notice.2.text':  {
    ja: 'ポストに入らないサイズは当スタジオへ返送されます。再発送費はお客さまご負担。',
    en: "Items too bulky for full mailboxes may be returned to our studio. Re-shipping will be at the customer's expense.",
  },
  'logistics.production.1': { ja: '[+] 各Tシャツはご注文後、岐阜スタジオでオンデマンド印刷します。', en: '[+] Each tee is printed on demand in Gifu Studio after your order is placed.' },
  'logistics.production.2': { ja: '[+] 生産期間：発送前1〜3営業日。', en: '[+] Production time: 1–3 business days before shipping.' },
  'logistics.production.3': { ja: '[+] 合計所要時間 ＝ 生産期間 ＋ 上記配送時間。', en: '[+] Total delivery = production time + shipping time above.' },
  'logistics.production.4': { ja: '[+] Bad Printer 6.6oz（225 GSM）ヘビーウェイトブランクにDTGプリント。', en: '[+] DTG printing on Bad Printer 6.6oz (225 GSM) Heavyweight blanks.' },
  'logistics.returns.1': { ja: '[+] 返品：未着用・未洗濯・元の包装のまま14日以内に受付。', en: '[+] Returns: accepted within 14 days for unworn, unwashed items in original packaging.' },
  'logistics.returns.2': { ja: '[+] サイズ交換：14日以内にご連絡ください。返送費はお客さまご負担。', en: '[+] Size Exchanges: contact within 14 days. Return shipping cost is on the customer.' },
  'logistics.returns.3': { ja: '[+] 不良品：全額交換、費用不要。受取後7日以内にデータ/写真を送付してください。', en: '[+] Defective Items: full replacement at no cost. Send data/photo within 7 days of receipt.' },
  'logistics.returns.4': { ja: '[+] カスタム/オンデマンド：不良品以外の返品不可。', en: '[+] Custom/On-Demand: items cannot be returned unless defective.' },
  'logistics.contact.p':    { ja: 'サポート・お問い合わせ：', en: 'For support & inquiries:' },
  'logistics.contact.time': { ja: '返信時間：1〜2営業日（JST）', en: 'Response time: 1–2 business days (JST)' },
  'logistics.nav.shop':   { ja: '← コレクションを見る', en: '← Shop Collection' },
  'logistics.nav.studio': { ja: 'スタジオ →',          en: 'Studio →' },

  // ── ShopGrid UI ─────────────────────────────────────────
  'shop.eyebrow':       { ja: '// スタッフ・ピック',  en: '// STAFF PICKS' },
  'shop.staff_pick':    { ja: 'スタッフ推奨',         en: 'Staff Pick' },
  'shop.size.one':      { ja: 'フリーサイズ',         en: 'One Size' },
  'shop.size.range':    { ja: 'S · M · L · XL',      en: 'S · M · L · XL' },
  'shop.remaining':     { ja: '残り',                 en: 'remaining' },
  'shop.limited':       { ja: '限定',                 en: 'Limited' },
  'shop.filter.all':    { ja: 'すべて',               en: 'ALL' },
  'shop.filter.ramen':  { ja: 'ラーメン',             en: 'RAMEN' },
  'shop.filter.ice':    { ja: 'アイスクリーム',       en: 'ICE CREAM' },
  'shop.filter.cyber':  { ja: 'サイバーパンク',       en: 'CYBERPUNK' },
  'shop.filter.abstract': { ja: 'アブストラクト',     en: 'ABSTRACT' },
  'shop.filter.food':   { ja: 'フード＆ドリンク',     en: 'FOOD & DRINK' },
  'shop.count.items':   { ja: '件',                   en: 'items' },
  'shop.count.item':    { ja: '件',                   en: 'item' },
  'shop.count.in':      { ja: 'カテゴリ：',           en: 'in' },
  'shop.count.available': { ja: '取扱中',             en: 'available' },
} as const;

export type TranslationKey = keyof typeof translations;
