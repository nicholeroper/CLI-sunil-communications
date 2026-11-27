import { useEffect } from 'react';
import { ShoppingBag, Shield, Headphones, Battery, Cable, Smartphone, MessageCircle } from 'lucide-react';
import { createProductInquiry } from '../utils/whatsapp';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';

const accessoriesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://sunilcommunication.com/accessories",
  "name": "Mobile Accessories in Karanprayag - Sunil Communication",
  "description": "Buy mobile accessories in Karanprayag - phone cases, chargers, screen protectors, power banks, earphones, memory cards at best prices in Chamoli district.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Sunil Communication",
    "telephone": "+91-9760262277",
    "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag", "addressRegion": "Chamoli, Uttarakhand"}
  },
  "about": [
    {"@type": "Product", "name": "Silicone Phone Case", "category": "Mobile Accessories", "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock"}},
    {"@type": "Product", "name": "Premium Tempered Glass Screen Protector", "category": "Mobile Accessories", "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock"}},
    {"@type": "Product", "name": "Fast Charger 33W", "category": "Mobile Accessories", "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock"}},
    {"@type": "Product", "name": "20000mAh Power Bank", "category": "Mobile Accessories", "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock"}},
    {"@type": "Product", "name": "TWS Earbuds", "category": "Mobile Accessories", "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock"}},
    {"@type": "Product", "name": "128GB Memory Card", "category": "Mobile Accessories", "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock"}}
  ]
};

const Accessories = () => {
  useEffect(() => {
    updatePageMeta(pageMeta.accessories.title, pageMeta.accessories.description, pageMeta.accessories.keywords, pageMeta.accessories.canonicalPath);
    injectStructuredData('page-schema-accessories', accessoriesSchema);
    return () => removeStructuredData('page-schema-accessories');
  }, []);
  const categories = [
    {
      icon: Shield,
      name: 'Cases & Covers',
      color: 'from-blue-500 to-blue-700',
      items: [
        { name: 'Silicone Cases', price: 'From ₹199' },
        { name: 'Hard Shell Cases', price: 'From ₹299' },
        { name: 'Leather Cases', price: 'From ₹599' },
        { name: 'Transparent Cases', price: 'From ₹149' },
        { name: 'Designer Cases', price: 'From ₹399' },
        { name: 'Wallet Cases', price: 'From ₹499' },
      ],
    },
    {
      icon: Shield,
      name: 'Screen Protectors',
      color: 'from-green-500 to-green-700',
      items: [
        { name: 'Tempered Glass', price: 'From ₹199' },
        { name: 'Anti-Glare Protector', price: 'From ₹249' },
        { name: 'Privacy Glass', price: 'From ₹399' },
        { name: 'Matte Finish', price: 'From ₹299' },
        { name: 'Full Coverage Glass', price: 'From ₹349' },
        { name: 'Camera Lens Protector', price: 'From ₹149' },
      ],
    },
    {
      icon: Cable,
      name: 'Chargers & Cables',
      color: 'from-orange-500 to-red-600',
      items: [
        { name: 'Fast Chargers', price: 'From ₹499' },
        { name: 'USB-C Cables', price: 'From ₹199' },
        { name: 'Lightning Cables', price: 'From ₹299' },
        { name: 'Wireless Chargers', price: 'From ₹799' },
        { name: 'Car Chargers', price: 'From ₹399' },
        { name: 'Multi-Port Chargers', price: 'From ₹999' },
      ],
    },
    {
      icon: Battery,
      name: 'Power Banks',
      color: 'from-purple-500 to-pink-600',
      items: [
        { name: '10000mAh Power Bank', price: 'From ₹999' },
        { name: '20000mAh Power Bank', price: 'From ₹1,499' },
        { name: 'Fast Charging Power Bank', price: 'From ₹1,799' },
        { name: 'Wireless Power Bank', price: 'From ₹1,999' },
        { name: 'Solar Power Bank', price: 'From ₹1,299' },
        { name: 'Mini Power Bank', price: 'From ₹699' },
      ],
    },
    {
      icon: Headphones,
      name: 'Audio Accessories',
      color: 'from-red-500 to-pink-600',
      items: [
        { name: 'Wired Earphones', price: 'From ₹299' },
        { name: 'Bluetooth Earphones', price: 'From ₹799' },
        { name: 'TWS Earbuds', price: 'From ₹1,299' },
        { name: 'Over-Ear Headphones', price: 'From ₹1,999' },
        { name: 'Neckband Earphones', price: 'From ₹999' },
        { name: 'Sports Earphones', price: 'From ₹699' },
      ],
    },
    {
      icon: Smartphone,
      name: 'Memory & Storage',
      color: 'from-indigo-500 to-purple-600',
      items: [
        { name: '32GB Memory Card', price: 'From ₹399' },
        { name: '64GB Memory Card', price: 'From ₹699' },
        { name: '128GB Memory Card', price: 'From ₹1,299' },
        { name: '256GB Memory Card', price: 'From ₹2,499' },
        { name: 'OTG Drives', price: 'From ₹499' },
        { name: 'Card Reader', price: 'From ₹199' },
      ],
    },
  ];

  const popularProducts = [
    {
      name: 'Premium Tempered Glass',
      price: '₹299',
      image: '/Premium Tempered Glass.jpg',
      description: '9H hardness, bubble-free installation',
    },
    {
      name: 'Fast Charger 33W',
      price: '₹699',
      image: '/Fast Charger 33W.jpg',
      description: 'Quick charge compatible, universal',
    },
    {
      name: 'TWS Earbuds',
      price: '₹1,499',
      image: '/TWS Earbuds.jpg',
      description: 'Bluetooth 5.0, 24hrs playback',
    },
    {
      name: 'Silicone Phone Case',
      price: '₹249',
      image: '/Silicone Phone Case.jpg',
      description: 'Shockproof, all colors available',
    },
    {
      name: '20000mAh Power Bank',
      price: '₹1,799',
      image: '/20000mAh Power Bank.webp',
      description: 'Fast charging, dual USB ports',
    },
    {
      name: '128GB Memory Card',
      price: '₹1,299',
      image: '/128GB Memory Card.jpg',
      description: 'Class 10, high speed',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <ShoppingBag size={64} className="mx-auto mb-6 text-purple-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile Accessories</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Complete range of accessories to enhance and protect your device
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-gray-600 text-lg">Best-selling accessories at great prices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <button
                    onClick={() => createProductInquiry(product.name, 'accessory')}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    Contact for Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to enhance your mobile experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
                  <category.icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-gray-700">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => createProductInquiry(category.name, 'accessory category')}
                    className="w-full mt-6 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Contact for Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Buy from Us?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Genuine Products</h3>
                <p className="text-gray-300">
                  100% authentic accessories with warranty
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                <p className="text-gray-300">
                  Largest collection of accessories in town
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-gray-300">
                  Competitive pricing on all products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Looking for Bulk Orders?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Special discounts available for retailers and bulk purchases. Contact us for
              wholesale pricing.
            </p>
            <a
              href="tel:+919760262277"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all shadow-xl"
            >
              <MessageCircle size={20} /> Contact for Wholesale
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
