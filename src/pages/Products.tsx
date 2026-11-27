import { useState, useEffect } from 'react';
import { Smartphone, Search, Filter, CheckCircle, Tag, MessageCircle, Phone } from 'lucide-react';
import { createProductInquiry } from '../utils/whatsapp';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://sunilcommunication.com/products",
  "name": "Buy Mobile Phones in Karanprayag - Sunil Communication",
  "description": "Buy latest smartphones in Karanprayag, Chamoli from all major brands with genuine warranty and Bajaj Finance EMI.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Sunil Communication",
    "telephone": "+91-9760262277",
    "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag", "addressRegion": "Chamoli, Uttarakhand", "postalCode": "246419"}
  },
  "about": [
    {"@type": "Product", "name": "iPhone 17 Pro", "brand": {"@type": "Brand", "name": "Apple"}, "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "LocalBusiness", "name": "Sunil Communication"}}},
    {"@type": "Product", "name": "Samsung Galaxy S25 Ultra", "brand": {"@type": "Brand", "name": "Samsung"}, "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "LocalBusiness", "name": "Sunil Communication"}}},
    {"@type": "Product", "name": "OnePlus 13R", "brand": {"@type": "Brand", "name": "OnePlus"}, "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "LocalBusiness", "name": "Sunil Communication"}}},
    {"@type": "Product", "name": "Vivo X200", "brand": {"@type": "Brand", "name": "Vivo"}, "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "LocalBusiness", "name": "Sunil Communication"}}},
    {"@type": "Product", "name": "Xiaomi 15 Ultra", "brand": {"@type": "Brand", "name": "Xiaomi"}, "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "LocalBusiness", "name": "Sunil Communication"}}},
    {"@type": "Product", "name": "Realme 15 Pro", "brand": {"@type": "Brand", "name": "Realme"}, "offers": {"@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "seller": {"@type": "LocalBusiness", "name": "Sunil Communication"}}}
  ]
};

const Products = () => {
  useEffect(() => {
    updatePageMeta(pageMeta.products.title, pageMeta.products.description, pageMeta.products.keywords, pageMeta.products.canonicalPath);
    injectStructuredData('page-schema-products', productsSchema);
    return () => removeStructuredData('page-schema-products');
  }, []);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const brands = [
    'All',
    'iPhone',
    'Samsung',
    'Oppo',
    'Vivo',
    'Xiaomi',
    'Realme',
    'OnePlus',
    'Motorola',
    'Nokia',
    'Nothing',
    'iQOO',
    'Sony',
    'Asus',
    'Infinix',
  ];

  const priceRanges = [
    'All',
    'Under ₹10,000',
    '₹10,000 - ₹20,000',
    '₹20,000 - ₹30,000',
    '₹30,000 - ₹50,000',
    'Above ₹50,000',
  ];

  const conditions = ['All', 'Brand New', 'Refurbished', 'Used'];

  const products = [
    {
      brand: 'iPhone',
      model: 'iPhone 17 Pro',
      price: '₹1,49,900',
      priceValue: 149900,
      condition: 'Brand New',
      image: '/iPhone-17-Pro.jpg',
      features: ['A19 Pro Chip', '256GB Storage', '48MP Camera', '5G Ready'],
    },
    {
      brand: 'iPhone',
      model: 'iPhone 17',
      price: '₹89,900',
      priceValue: 89900,
      condition: 'Brand New',
      image: '/iPhone-17.webp',
      features: ['A19 Chip', '128GB Storage', '48MP Camera', '5G Ready'],
    },
    {
      brand: 'Realme',
      model: 'Realme 15 Pro+',
      price: '₹27,999',
      priceValue: 27999,
      condition: 'Brand New',
      image: '/Realme-15-Pro.webp',
      features: ['Snapdragon 7s Gen 3', '8GB RAM', '108MP Camera', '80W Charging'],
    },
    {
      brand: 'Samsung',
      model: 'Samsung S25 Ultra',
      price: '₹1,29,999',
      priceValue: 129999,
      condition: 'Brand New',
      image: '/Samsung-S25-Ultra.png',
      features: ['Snapdragon 8 Gen 4', '12GB RAM', '256GB Storage', 'S Pen Included'],
    },
    {
      brand: 'Samsung',
      model: 'Samsung S25 FE',
      price: '₹49,999',
      priceValue: 49999,
      condition: 'Brand New',
      image: '/Samsung-S25-FE.webp',
      features: ['Exynos 2400e', '8GB RAM', '128GB Storage', '25W Charging'],
    },
    {
      brand: 'Vivo',
      model: 'Vivo X200',
      price: '₹65,999',
      priceValue: 65999,
      condition: 'Brand New',
      image: '/Vivo-X200.jpg',
      features: ['MediaTek 9400', '12GB RAM', '256GB Storage', '90W Charging'],
    },
    {
      brand: 'Vivo',
      model: 'Vivo Y400 Pro',
      price: '₹24,999',
      priceValue: 24999,
      condition: 'Brand New',
      image: '/Vivo-Y400-Pro.webp',
      features: ['Snapdragon 7 Gen 3', '8GB RAM', '50MP Camera', '44W Charging'],
    },
    {
      brand: 'Oppo',
      model: 'Oppo 31 Pro+',
      price: '₹42,999',
      priceValue: 42999,
      condition: 'Brand New',
      image: '/Oppo-f31-Pro-plus.png',
      features: ['MediaTek 9300', '12GB RAM', '50MP Camera', '100W Charging'],
    },
    {
      brand: 'OnePlus',
      model: 'OnePlus 15R',
      price: '₹39,999',
      priceValue: 39999,
      condition: 'Brand New',
      image: '/oneplus-15r-back-front.png',
      features: ['Snapdragon 8 Gen 3', '12GB RAM', '256GB Storage', '100W Charging'],
    },
    {
      brand: 'Motorola',
      model: 'Moto Edge 60 Pro',
      price: '₹59,999',
      priceValue: 59999,
      condition: 'Brand New',
      image: '/Moto-Edge-60-Pro.jpg',
      features: ['Snapdragon 8 Gen 3', '12GB RAM', '256GB Storage', '125W Charging'],
    },
    {
      brand: 'iQOO',
      model: 'Vivo iQOO',
      price: '₹29,999',
      priceValue: 29999,
      condition: 'Brand New',
      image: '/Vivo iQOO.png',
      features: ['Snapdragon 8s Gen 3', '8GB RAM', '128GB Storage', '120W Charging'],
    },
    {
      brand: 'iPhone',
      model: 'iPhone 15 Pro Max',
      price: '₹1,34,900',
      priceValue: 134900,
      condition: 'Brand New',
      image: '/iphone-15-pro-max.png',
      features: ['A17 Pro Chip', '256GB Storage', '48MP Camera', '5G Ready'],
    },
    {
      brand: 'Samsung',
      model: 'Galaxy S24 Ultra',
      price: '₹88,986 - ₹94,999',
      priceValue: 91992,
      condition: 'Brand New',
      image: '/galaxy-s24-ultra-highlights-color-titanium-black-back-mo.jpg',
      features: ['Snapdragon 8 Gen 3', '12GB RAM', '200MP Camera', 'S Pen Included'],
    },
    {
      brand: 'Xiaomi',
      model: 'Xiaomi 14 Pro',
      price: '₹69,999',
      priceValue: 69999,
      condition: 'Brand New',
      image: '/Xiaomi 14 Pro.png',
      features: ['Snapdragon 8 Gen 3', '12GB RAM', '50MP Camera', '120W Charging'],
    },
    {
      brand: 'Oppo',
      model: 'Oppo Reno 11 Pro',
      price: '₹34,999 - ₹39,999',
      priceValue: 37499,
      condition: 'Brand New',
      image: '/Oppo Reno 11 Pro.png',
      features: ['MediaTek 8200', '12GB RAM', '50MP Camera', '80W Charging'],
    },
    {
      brand: 'Vivo',
      model: 'Vivo V30 Pro',
      price: '₹46,999',
      priceValue: 46999,
      condition: 'Brand New',
      image: '/Vivo V30 Pro.jpg',
      features: ['MediaTek 9200+', '8GB RAM', '50MP Aura Light', '80W Charging'],
    },
    {
      brand: 'Realme',
      model: 'Realme 12 Pro+',
      price: '₹22,999 - ₹24,999',
      priceValue: 23999,
      condition: 'Brand New',
      image: '/Realme 12 Proplus.jpg',
      features: ['Snapdragon 7s Gen 2', '8GB RAM', '64MP Camera', '67W Charging'],
    },
    {
      brand: 'OnePlus',
      model: 'OnePlus 12',
      price: '₹64,999',
      priceValue: 64999,
      condition: 'Brand New',
      image: '/OnePlus 12.avif',
      features: ['Snapdragon 8 Gen 3', '12GB RAM', '50MP Camera', '100W Charging'],
    },
    {
      brand: 'Motorola',
      model: 'Motorola Edge 40',
      price: '₹26,999 - ₹29,999',
      priceValue: 28499,
      condition: 'Brand New',
      image: '/Motorola Edge 40.png',
      features: ['MediaTek 8200', '8GB RAM', '50MP Camera', '68W Charging'],
    },
    {
      brand: 'Samsung',
      model: 'Galaxy A54',
      price: '₹20,994 - ₹32,990',
      priceValue: 26992,
      condition: 'Brand New',
      image: '/Galaxy A54.jpg',
      features: ['Exynos 1380', '8GB RAM', '50MP Camera', '25W Charging'],
    },
    {
      brand: 'iPhone',
      model: 'iPhone 13',
      price: '₹41,999',
      priceValue: 41999,
      condition: 'Brand New',
      image: '/iPhone 13.webp',
      features: ['A15 Bionic', '128GB Storage', '12MP Camera', '5G Ready'],
    },
    {
      brand: 'Xiaomi',
      model: 'Redmi Note 13 Pro',
      price: '₹17,800',
      priceValue: 17800,
      condition: 'Brand New',
      image: '/Redmi Note 13 Pro.webp',
      features: ['Snapdragon 7s Gen 2', '8GB RAM', '200MP Camera', '67W Charging'],
    },
    {
      brand: 'Nokia',
      model: 'Nokia G42',
      price: '₹12,999',
      priceValue: 12999,
      condition: 'Brand New',
      image: '/Nokia G42.jpg',
      features: ['Snapdragon 480+', '6GB RAM', '50MP Camera', 'Stock Android'],
    },
    {
      brand: 'Samsung',
      model: 'Galaxy S25 Ultra',
      price: '₹1,29,999',
      priceValue: 129999,
      condition: 'Brand New',
      image: '/Galaxy S25 Ultra.png',
      features: ['Snapdragon 8 Gen 4', '12GB RAM', '256GB Storage', 'S Pen Included'],
    },
    {
      brand: 'iPhone',
      model: 'iPhone 16 Pro Max',
      price: '₹1,34,900',
      priceValue: 134900,
      condition: 'Brand New',
      image: '/iPhone 16 Pro Max.webp',
      features: ['A18 Pro Chip', '256GB Storage', '48MP Camera', '5G Ready'],
    },
    {
      brand: 'Xiaomi',
      model: 'Xiaomi 15 Ultra',
      price: '₹1,09,999',
      priceValue: 109999,
      condition: 'Brand New',
      image: '/Xiaomi 15 Ultra.jpg',
      features: ['Snapdragon 8 Elite', '16GB RAM', '512GB Storage', '120W Charging'],
    },
    {
      brand: 'Vivo',
      model: 'Vivo X200',
      price: '₹65,999',
      priceValue: 65999,
      condition: 'Brand New',
      image: '/Vivo X200.webp',
      features: ['MediaTek 9400', '12GB RAM', '256GB Storage', '90W Charging'],
    },
    {
      brand: 'Xiaomi',
      model: 'Xiaomi 15S Pro 5G',
      price: '₹66,990',
      priceValue: 66990,
      condition: 'Brand New',
      image: '/Xiaomi 15S Pro 5G.webp',
      features: ['Snapdragon 8 Gen 3', '12GB RAM', '50MP Camera', '120W Charging'],
    },
    {
      brand: 'Motorola',
      model: 'Motorola Edge 50 Ultra',
      price: '₹54,999',
      priceValue: 54999,
      condition: 'Brand New',
      image: '/Motorola Edge 50 Ultra.webp',
      features: ['Snapdragon 8s Gen 3', '12GB RAM', '256GB Storage', '125W Charging'],
    },
    {
      brand: 'Samsung',
      model: 'Galaxy S24 FE',
      price: '₹39,999 - ₹59,999',
      priceValue: 49999,
      condition: 'Brand New',
      image: '/Galaxy S24 FE.jpg',
      features: ['Exynos 2400e', '8GB RAM', '128GB Storage', '25W Charging'],
    },
    {
      brand: 'OnePlus',
      model: 'OnePlus 13R',
      price: '₹37,930 - ₹39,999',
      priceValue: 38964,
      condition: 'Brand New',
      image: '/OnePlus 13R.png',
      features: ['Snapdragon 8 Gen 3', '12GB RAM', '256GB Storage', '80W Charging'],
    },
    {
      brand: 'Nothing',
      model: 'Nothing Phone (3a) Pro',
      price: '₹27,995',
      priceValue: 27995,
      condition: 'Brand New',
      image: '/Nothing Phone (3a) Pro.jpg',
      features: ['Snapdragon 7s Gen 3', '8GB RAM', '128GB Storage', 'Glyph Interface'],
    },
    {
      brand: 'iQOO',
      model: 'iQOO Neo 10R',
      price: '₹24,998',
      priceValue: 24998,
      condition: 'Brand New',
      image: '/iQOO Neo 10R.jpg',
      features: ['Snapdragon 8s Gen 3', '8GB RAM', '128GB Storage', '80W Charging'],
    },
  ];

  const getPriceRange = (price: number) => {
    if (price < 10000) return 'Under ₹10,000';
    if (price >= 10000 && price < 20000) return '₹10,000 - ₹20,000';
    if (price >= 20000 && price < 30000) return '₹20,000 - ₹30,000';
    if (price >= 30000 && price < 50000) return '₹30,000 - ₹50,000';
    return 'Above ₹50,000';
  };

  const filteredProducts = products.filter((product) => {
    const brandMatch = selectedBrand === 'All' || product.brand === selectedBrand;
    const priceMatch =
      selectedPrice === 'All' || getPriceRange(product.priceValue) === selectedPrice;
    const conditionMatch = selectedCondition === 'All' || product.condition === selectedCondition;
    const searchMatch =
      searchQuery === '' ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    return brandMatch && priceMatch && conditionMatch && searchMatch;
  });

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Latest smartphones from all major brands at competitive prices
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for phones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900"
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Condition</label>
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900"
                >
                  {conditions.map((condition) => (
                    <option key={condition} value={condition}>
                      {condition}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <button
                onClick={() => {
                  setSelectedBrand('All');
                  setSelectedPrice('All');
                  setSelectedCondition('All');
                  setSearchQuery('');
                }}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.condition}
                    </span>
                  </div>
                  {product.condition === 'Brand New' && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        EMI Available
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                      {product.brand}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{product.model}</h3>

                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => createProductInquiry(product.model)}
                    className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Contact for Price
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Smartphone size={64} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSelectedBrand('All');
                  setSelectedPrice('All');
                  setSelectedCondition('All');
                  setSearchQuery('');
                }}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Tag size={48} className="mx-auto mb-6 text-orange-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for a specific model?</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              We have access to a wide range of models beyond what's listed here. Contact us for
              your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919760262277"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
