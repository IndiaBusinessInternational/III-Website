# India Intelligence International — Company Website v1.5

**intelligence for the World** · v1.5

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
