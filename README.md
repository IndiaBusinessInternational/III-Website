# India Intelligence International — Company Website v1.9

**intelligence for the World** · v1.9

**Edge to edge on every screen (v1.9, 27 Oct 2026)** — Founder: "Yes, make all the apps edge to edge on laptop too, each with its own version bump." The 1240px page column, the 920px hero column and the 520px / 760px pricing and FAQ columns are gone at every width: sections run full width with a 10px inner side inset, cards are full-bleed at the screen edges (no side border, radius or shadow) with 10px inner sides, wide screens show more cards per row, the pricing card puts its feature list beside the price (900px and wider) and the FAQ runs in two columns. `html, body { overflow-x: clip }` everywhere. Phones unchanged.

**WhatsApp link preview + Share (v1.8, 27 Oct 2026)** — the preview banner is now a 1200×630 JPEG under 300 KB (`og-banner.jpg`, `og:image:type` image/jpeg; `og-banner.png` kept), and a round Share button (`ibi-share.js`, IBI Share v1.0) at the end of the top bar shares the site link to WhatsApp, Facebook, X, Telegram, Email, Copy link or More apps (Founder: "all web apps should have a sharing link too").

**Long words (v1.7, 11 Oct 2026)** — phones use `overflow-wrap: break-word` (v1.6 used `anywhere`, which can split button text mid-word).

**Phones edge to edge (v1.6, 11 Oct 2026)** — on screens up to 640px the sections have no outer gutter, cards are full-bleed (no side border, radius or shadow) with 10px inner sides, and the page can never be wider than the screen (CEO rule).

**Own app identity (v1.5, 7 Oct 2026)** — the install manifest now carries `"id": "/III-Website/"`. Before, `"id": "./"` resolved to the bare origin `https://indiabusinessinternational.github.io/`, which every IBI app published under github.io shared — so Chrome treated installing a second such app as an UPDATE of the first and silently re-pointed it (an installed IBI Gold Mines icon opened Screen Recorder Studio). The new id is unique to this app. An install made before this release keeps the old shared id; uninstall it and install again from the page.


The official website of **India Intelligence International (III)** — a futuristic,
mobile-first, single-file site presenting the complete arsenal of 31 professional
eCommerce tools for Indian multi-marketplace sellers.

## Features
- 🟣 Violet (`#7F00FF`) / black futuristic design with animated neural-network hero
- 🛠️ All 31 IBI tools catalogued across 6 command domains, with search & filters
- 🔐 Members-only Core Area — single-user licence, client-side registration & login
- 💳 ₹299 / 30-day subscription via Google Pay (UPI QR + deep link, UTR activation)
- 📱 Fully responsive — phone, tablet and desktop
- 📊 Optional Google Sheet member/payment register via Apps Script
  (see `III Website Members - Sheet Logger.gs`)

## Owner notes
- UPI ID & payee name are set in `CONFIG` at the top of the `<script>` in `index.html`.
- To log registrations & payments to Google Sheets, deploy the `.gs` file
  (instructions inside it) and paste the `/exec` URL into `CONFIG.GAS_URL`.
- Version badge (top-left) must be bumped on every update per house convention.

© 2026 India Intelligence International. All rights reserved.
