/* ============================================================
   MLEA POS WEBSITE — CONTENT MODEL (site-content.js)
   Editable defaults for the MLEA POS landing page. The public
   page renders from this; the admin panel edits a copy and can
   export content.json to publish for everyone.
   ============================================================ */
window.SITE_DEFAULTS = {
  meta: {
    storeKey: 'mlea_site_content_v1',
    adminPass: 'mlea-admin-2026'   // change this in the admin panel
  },

  brand: { name: 'MLEA POS', icon: '🏪' },

  nav: [
    { label: 'The problem', href: '#problems', show: true },
    { label: 'Features', href: '#features', show: true },
    { label: 'Pricing', href: '#pricing', show: true },
    { label: 'Get MLEA POS', href: '#buy', cta: true, show: true }
  ],

  hero: {
    show: true,
    eyebrow: 'BIR-Ready Point of Sale · Philippines',
    title: 'Your store runs on guesswork. <em>Give it a real register.</em>',
    subtitle: 'MLEA POS turns any phone, tablet, or computer into a complete, BIR-compliant point of sale — that works even when the internet doesn\'t.',
    ctaPrimary: { label: 'Get MLEA POS', href: '#buy', show: true },
    ctaGhost: { label: 'Try 15 days free', href: '#trial', show: true },
    trust: [
      { text: 'Works fully offline', show: true },
      { text: 'No monthly fees', show: true },
      { text: 'One-time payment', show: true }
    ],
    // MLEA's hero signature is a receipt (values shown on the printed OR)
    receipt: {
      shopName: 'Cheche Cabalida',
      shopSub: 'Online Shop · Iligan City',
      tin: 'TIN: 362-031-432-00000',
      orNo: 'OR-0000255',
      lines: [
        { name: 'Beauty Mirror x2', amt: '₱356.00', show: true },
        { name: 'Hair Clip Set x1', amt: '₱  89.00', show: true },
        { name: 'Lip Tint x3', amt: '₱267.00', show: true }
      ],
      vatable: '₱635.71',
      vat: '₱ 76.29',
      total: '₱712.00',
      cash: '₱1,000.00',
      change: '₱288.00',
      birline: 'BIR Accredited · PTU-123456',
      poweredby: 'Powered by MLEA POS v6 · Gieo Software'
    }
  },

  spotlight: {
    show: true,
    eyebrow: 'Sound familiar?',
    title: 'Running a shop is hard enough <em>without these headaches.</em>',
    items: [
      { icon: '✕', title: 'Sales you can\'t account for', text: 'Cash goes in a drawer, totals live in your head, and at the end of the day the numbers never quite match.', show: true },
      { icon: '✕', title: 'BIR compliance stress', text: 'Official receipts, OR series, X and Z readings, VAT breakdowns — one mistake and you\'re exposed during an audit.', show: true },
      { icon: '✕', title: 'Stock that disappears', text: 'You only find out you\'re out of a fast-seller when a customer asks for it — and walks away empty-handed.', show: true },
      { icon: '✕', title: 'Expensive monthly software', text: 'Most POS systems charge every single month, need constant internet, and stop working the moment your subscription lapses.', show: true }
    ]
  },

  features: {
    show: true,
    eyebrow: 'The solution',
    title: 'Everything a Philippine business needs, <em>in one app you own.</em>',
    subtitle: 'MLEA POS handles the selling, the receipts, the stock, and the BIR paperwork — so you can run your shop with confidence instead of guesswork.',
    items: [
      { icon: '🧾', title: 'BIR-compliant receipts', text: 'Proper Official Receipts and Sales Invoices with VAT breakdown, sequential OR numbers, and X/Z readings — ready for audit, on thermal or A4.', show: true },
      { icon: '📴', title: 'Works fully offline', text: 'No internet? No problem. Every sale is saved on the device and keeps working during brownouts and dead zones. Sync to the cloud when you\'re back online.', show: true },
      { icon: '📦', title: 'Live inventory tracking', text: 'Stock updates with every sale. Low-stock alerts warn you before a best-seller runs out, and barcode scanning makes checkout fast.', show: true },
      { icon: '📊', title: 'Sales &amp; profit reports', text: 'See today\'s revenue, monthly trends, top products, expenses, and net profit at a glance — exportable to CSV for your accountant.', show: true },
      { icon: '👥', title: 'Staff with PIN logins', text: 'Give each cashier their own secure PIN. Track who sold what, set roles, and keep an audit trail of every action.', show: true },
      { icon: '📱', title: 'Runs on any device', text: 'Phone, tablet, laptop, or desktop. Install it like an app, use it on your existing hardware, and never buy a special register again.', show: true }
    ]
  },

  // MLEA has no fuel band — hidden by default (kept so the engine is shared)
  fuelband: { show: false, eyebrow: '', title: '', points: [], card: { title: '', rows: [] } },

  verticals: {
    show: true,
    items: [
      { emoji: '🏪', label: 'Sari-sari stores', show: true },
      { emoji: '💄', label: 'Beauty &amp; retail shops', show: true },
      { emoji: '🍴', label: 'Restaurants &amp; carinderias', show: true },
      { emoji: '💊', label: 'Pharmacies', show: true },
      { emoji: '🛒', label: 'Mini-marts', show: true }
    ]
  },

  pricing: {
    show: true,
    eyebrow: 'Pricing',
    title: 'Pay once. <em>Own it forever.</em>',
    subtitle: 'No monthly bills. No surprise lock-outs. Choose the plan that fits your shop and it\'s yours to keep.',
    note: 'Prices are introductory and may be customized for your needs. Not sure which fits? Message us and we\'ll help you choose.',
    plans: [
      { name: 'Starter', tag: 'For a single small shop or sari-sari store.', price: '₱1,500', unit: ' one-time', once: 'One device · lifetime', featured: false, buyStyle: 'dark',
        features: [ 'Full POS &amp; receipts', 'BIR-compliant OR / X / Z', 'Inventory &amp; low-stock alerts', 'Works offline', '1 device' ], show: true },
      { name: 'Business', tag: 'For a growing shop with staff and more stock.', price: '₱4,500', unit: ' one-time', once: 'Up to 3 devices · lifetime', featured: true, buyStyle: 'gold',
        features: [ 'Everything in Starter', 'Staff logins &amp; roles', 'Sales &amp; profit reports', 'Expenses &amp; net profit', 'Cloud sync across devices', 'Up to 3 devices' ], show: true },
      { name: 'Enterprise', tag: 'For multi-branch operations &amp; specialty retail.', price: '₱12,000', unit: ' one-time', once: 'Unlimited devices · lifetime', featured: false, buyStyle: 'dark',
        features: [ 'Everything in Business', 'Multi-branch management', 'Priority setup &amp; support', 'Data migration included', 'Unlimited devices' ], show: true }
    ]
  },

  steps: {
    show: true,
    eyebrow: 'Up and running today',
    title: 'From payment to first sale <em>in three steps.</em>',
    items: [
      { n: 'STEP 01', title: 'Pay &amp; receive', text: 'Send a one-time payment via PayPal. We send you the MLEA POS files and your license key.', show: true },
      { n: 'STEP 02', title: 'Set up your shop', text: 'Enter your business and BIR details, add your products, and create logins for your staff. We\'ll guide you through it.', show: true },
      { n: 'STEP 03', title: 'Start selling', text: 'Open the register, scan or tap a product, take payment, print the receipt. That\'s it — you\'re running a real POS.', show: true }
    ]
  },

  // MLEA-specific: a free-trial CTA band (uses the buy anchor)
  trial: {
    show: true,
    title: 'See it work in your own shop first.',
    subtitle: 'Try the full system free for 15 days — every feature, your real products, no commitment. When you\'re ready, one payment unlocks it for good.',
    btnText: 'Start your free trial →',
    btnHref: '#buy'
  },

  faq: {
    show: true,
    eyebrow: 'Questions',
    title: 'Good to know <em>before you buy.</em>',
    items: [
      { q: 'Do I need internet to use it?', a: 'No. MLEA POS works completely offline — perfect for brownouts and areas with weak signal. If you have internet, it can sync to the cloud automatically.', show: true },
      { q: 'Is it really BIR-compliant?', a: 'It produces Official Receipts, sequential OR numbers, VAT breakdowns, and X/Z readings in the BIR format. You\'ll still complete your own BIR registration and accreditation — we provide the document templates to help.', show: true },
      { q: 'What devices does it run on?', a: 'Any modern phone, tablet, laptop, or desktop with a web browser. You can install it like an app and use a Bluetooth or USB thermal printer.', show: true },
      { q: 'Are there monthly fees?', a: 'None. You pay once and own your copy. No subscriptions, no lock-outs, no surprise charges.', show: true },
      { q: 'How do I get it after paying?', a: 'Send your PayPal payment, then message us your email. We\'ll send the files, your license key, and setup help — usually the same day.', show: true },
      { q: 'Can I move my old data in?', a: 'Yes. If you have an existing product list or sales database, we can help convert it so you start with everything already loaded.', show: true }
    ]
  },

  buy: {
    show: true,
    title: 'Ready to give your store a real register?',
    subtitle: 'Pay securely with PayPal below, then message us your email and chosen plan. We\'ll send your files, license key, and setup guide — usually within the same day.',
    payIcon: '🅿️',
    payLabel: 'PayPal payment to',
    paypal: 'ogie613@hotmail.com',
    btnText: 'Buy MLEA POS',
    payHint: 'Send to <b>ogie613@hotmail.com</b> as "Goods &amp; Services".<br>Include your email in the PayPal note so we can reach you.',
    msgrText: '💬 Message us on Messenger →',
    msgrLink: 'https://m.me/',
    miniSteps: '<b>1.</b> Send your payment via PayPal &nbsp;→&nbsp; <b>2.</b> Message us your email + plan &nbsp;→&nbsp; <b>3.</b> Receive your POS &amp; license'
  },

  footer: {
    blurb: 'A BIR-ready, offline-first point of sale for Filipino small businesses. Built by Gieo Software, Iligan City.',
    col1title: 'Product',
    col1: [ { label: 'Features', href: '#features' }, { label: 'How it works', href: '#how' }, { label: 'Pricing', href: '#pricing' }, { label: 'Free trial', href: '#trial' } ],
    col2title: 'Get started',
    col2: [ { label: 'Buy now', href: '#buy' }, { label: 'FAQ', href: '#faq' }, { label: 'Messenger', href: 'https://m.me/' } ],
    col3title: 'Contact',
    col3: [ { label: 'ogie613@hotmail.com', href: 'mailto:ogie613@hotmail.com' }, { label: 'PayPal: ogie613@hotmail.com', href: '#buy' } ],
    copyright: '© 2026 Gieo Software · MLEA POS. All rights reserved.',
    location: 'Iligan City, Philippines 🇵🇭'
  }
};
