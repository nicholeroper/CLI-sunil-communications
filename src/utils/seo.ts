export const updatePageMeta = (title: string, description: string, keywords?: string, canonicalPath?: string) => {
  document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  if (keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title);
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description);
  }

  if (canonicalPath !== undefined) {
    const canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = canonicalPath === '/' ? 'https://sunilcommunication.com/' : `https://sunilcommunication.com${canonicalPath}`;
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', fullUrl);
    }
  }
};

export const injectStructuredData = (id: string, schema: object) => {
  const existing = document.getElementById(id);
  if (existing) {
    existing.textContent = JSON.stringify(schema);
  } else {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};

export const removeStructuredData = (id: string) => {
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }
};

export const pageMeta = {
  home: {
    title: 'Sunil Communication - Best Mobile Shop in Karanprayag, Chamoli | Mobile Repair & Sales',
    description: 'Best mobile shop in Karanprayag, Chamoli. Expert mobile repair services, new & used phones, accessories, exchange offers, and Bajaj Finance EMI. Trusted since 2021. Call +91-9760262277',
    keywords: 'mobile shop karanprayag, mobile repair karanprayag, mobile shop chamoli, phone repair karanprayag, best mobile shop karanprayag, sunil communication karanprayag, mobile shop near me karanprayag, smartphone dealer karanprayag, मोबाइल शॉप करणप्रयाग, मोबाइल रिपेयर करणप्रयाग, mobile shop uttarakhand, phone dealer chamoli, electronics shop karanprayag, mobile repair near me chamoli, best phone shop chamoli district, mobile shop gauchar, mobile shop nandprayag, mobile shop joshimath, mobile shop gopeshwar, mobile shop tharali, iphone dealer karanprayag, samsung dealer karanprayag, second hand mobile karanprayag',
    canonicalPath: '/',
  },
  about: {
    title: 'About Sunil Communication | Trusted Mobile Shop Since 2021 | Karanprayag, Chamoli',
    description: 'Sunil Communication - Karanprayag\'s most trusted mobile shop since January 2021. Owner Mr. Sunil Thapliyal and expert team provide mobile repairs, sales & Bajaj Finance EMI. 5000+ happy customers in Chamoli.',
    keywords: 'about sunil communication karanprayag, sunil thapliyal mobile shop, mobile shop karanprayag history, trusted mobile dealer chamoli, best mobile shop chamoli since 2021, sunil communication owner, mobile repair expert karanprayag, phone shop chamoli uttarakhand, authorized mobile dealer karanprayag',
    canonicalPath: '/about',
  },
  services: {
    title: 'Mobile Repair Services Karanprayag | Screen, Battery, Charging Port Repair | Sunil Communication',
    description: 'Expert mobile repair in Karanprayag for iPhone, Samsung, Xiaomi, Oppo, Vivo, OnePlus, Realme. Screen replacement, battery, charging port, water damage repair with warranty. Same-day service available.',
    keywords: 'mobile repair karanprayag, phone repair karanprayag, mobile service center karanprayag, iphone repair karanprayag, samsung repair karanprayag, screen replacement karanprayag, battery replacement karanprayag, charging port repair karanprayag, water damage phone repair chamoli, cracked screen repair karanprayag, mobile repair near me chamoli, phone screen fix karanprayag, xiaomi repair karanprayag, oppo repair karanprayag, vivo repair karanprayag, oneplus repair karanprayag, realme repair karanprayag, motorola repair karanprayag, mobile software repair karanprayag, camera repair karanprayag, speaker repair phone chamoli, mobile repair uttarakhand, phone repair chamoli district, mobile exchange karanprayag, old mobile purchase karanprayag, used phone dealer karanprayag, sell old phone karanprayag',
    canonicalPath: '/services',
  },
  products: {
    title: 'Buy Mobile Phones in Karanprayag | Latest Smartphones with EMI | Sunil Communication',
    description: 'Buy latest smartphones in Karanprayag - iPhone, Samsung, Xiaomi, Oppo, Vivo, OnePlus, Realme. 100% genuine with warranty. Bajaj Finance EMI available. Best prices in Chamoli district.',
    keywords: 'buy mobile phone karanprayag, smartphones karanprayag, iphone karanprayag, iphone 16 pro karanprayag, iphone 17 karanprayag, samsung galaxy karanprayag, samsung s25 karanprayag, xiaomi karanprayag, redmi karanprayag, oneplus karanprayag, vivo karanprayag, realme karanprayag, oppo karanprayag, motorola karanprayag, nokia karanprayag, nothing phone karanprayag, mobile on emi karanprayag, bajaj finance mobile chamoli, budget phone under 10000 karanprayag, phone under 20000 chamoli, premium smartphone karanprayag, new phone karanprayag, latest phone chamoli, smartphone dealer chamoli, phone shop near me karanprayag, best price mobile karanprayag, genuine phone dealer karanprayag, refurbished phone karanprayag, second hand iphone karanprayag, used samsung karanprayag, 5g phone karanprayag, best 5g phone chamoli',
    canonicalPath: '/products',
  },
  accessories: {
    title: 'Mobile Accessories in Karanprayag | Cases, Chargers, Screen Guards | Sunil Communication',
    description: 'Buy mobile accessories in Karanprayag - phone cases, covers, chargers, Type-C cables, tempered glass screen guards, power banks, TWS earbuds, memory cards. Best prices in Chamoli district.',
    keywords: 'mobile accessories karanprayag, phone cases karanprayag, mobile covers karanprayag, chargers karanprayag, type-c charger karanprayag, fast charger karanprayag, screen protector karanprayag, tempered glass karanprayag, screen guard chamoli, power bank karanprayag, earphones karanprayag, tws earbuds karanprayag, bluetooth earphones chamoli, memory card karanprayag, 128gb memory card chamoli, mobile accessories shop chamoli, phone accessories near me karanprayag, silicone case karanprayag, back cover karanprayag, mobile cable karanprayag, usb cable karanprayag, phone stand karanprayag, wireless charger chamoli, pop socket karanprayag',
    canonicalPath: '/accessories',
  },
  gallery: {
    title: 'Gallery - Sunil Communication Mobile Shop | Store Photos | Karanprayag, Chamoli',
    description: 'View photos of Sunil Communication mobile shop in Karanprayag - our store, phones, happy customers and accessories collection. Visit us at Main Market, Karanprayag, Chamoli.',
    keywords: 'sunil communication gallery karanprayag, mobile shop photos karanprayag, store images chamoli, sunil communication store karanprayag, mobile shop interior karanprayag, happy customers karanprayag mobile shop, phone collection karanprayag, accessories display karanprayag',
    canonicalPath: '/gallery',
  },
  financing: {
    title: 'Mobile on Easy EMI in Karanprayag | Bajaj Finance Partner | Sunil Communication',
    description: 'Buy your dream phone on Bajaj Finance EMI at Sunil Communication, Karanprayag. No-cost EMI, quick approval, 3-24 months tenure, zero down payment options. Available for all brands in Chamoli.',
    keywords: 'bajaj finance emi karanprayag, mobile on emi karanprayag, phone financing chamoli, easy emi mobile karanprayag, no cost emi phone karanprayag, zero down payment mobile chamoli, bajaj finserv partner karanprayag, mobile loan karanprayag, emi without credit card chamoli, phone on installment karanprayag, buy now pay later phone karanprayag, affordable phone karanprayag, mobile finance chamoli district, bajaj finance mobile shop chamoli, easy finance smartphone karanprayag',
    canonicalPath: '/financing',
  },
  testimonials: {
    title: 'Customer Reviews - Sunil Communication | 5-Star Mobile Shop Karanprayag | Chamoli',
    description: 'Read 25+ genuine 5-star reviews of Sunil Communication, Karanprayag. Trusted by thousands across Chamoli district for mobile repair, sales, and accessories. Best rated mobile shop in Karanprayag.',
    keywords: 'sunil communication reviews karanprayag, mobile shop reviews karanprayag, best mobile shop chamoli reviews, customer testimonials karanprayag, 5 star mobile shop karanprayag, trusted mobile shop chamoli, sunil communication rating, best rated phone shop karanprayag, customer feedback mobile repair karanprayag, phone repair reviews chamoli',
    canonicalPath: '/testimonials',
  },
  contact: {
    title: 'Contact Sunil Communication | Mobile Shop Karanprayag | Call +91-9760262277',
    description: 'Contact Sunil Communication - Main Market, Karanprayag, Chamoli 246419. Call or WhatsApp +91-9760262277 for mobile repairs, sales, accessories. Open daily 9AM-9PM.',
    keywords: 'contact sunil communication karanprayag, mobile shop phone number karanprayag, sunil communication address, mobile shop location karanprayag, phone number karanprayag mobile shop, whatsapp mobile repair karanprayag, mobile shop main market karanprayag, directions to mobile shop karanprayag, chamoli mobile shop contact, karanprayag electronics shop address, sunil communication chamoli contact',
    canonicalPath: '/contact',
  },
};
