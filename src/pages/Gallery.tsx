import { useState, useEffect } from 'react';
import { X, Store, Users, Award, Smartphone } from 'lucide-react';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "url": "https://sunilcommunication.com/gallery",
  "name": "Sunil Communication Mobile Shop Gallery - Karanprayag",
  "description": "Photos of Sunil Communication mobile shop in Karanprayag, Chamoli - store interior, phone collection, happy customers, and accessories.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Sunil Communication",
    "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag", "addressRegion": "Chamoli, Uttarakhand"}
  },
  "image": [
    {"@type": "ImageObject", "url": "https://sunilcommunication.com/sunil-communication_10.jpeg", "name": "Sunil Communication Store - Karanprayag", "description": "Interior of Sunil Communication mobile shop at Main Market, Karanprayag"},
    {"@type": "ImageObject", "url": "https://sunilcommunication.com/sunil-communication_12.jpeg", "name": "Sunil Communication Phone Display", "description": "Mobile phone display at Sunil Communication, Karanprayag"},
    {"@type": "ImageObject", "url": "https://sunilcommunication.com/sunil-communication_2.jpeg", "name": "Happy Customer at Sunil Communication Karanprayag", "description": "Satisfied customer at Sunil Communication mobile shop"},
    {"@type": "ImageObject", "url": "https://sunilcommunication.com/sunil-communication_6.jpeg", "name": "Mobile Accessories at Sunil Communication", "description": "Mobile accessories collection at Sunil Communication, Karanprayag"}
  ]
};

const Gallery = () => {
  useEffect(() => {
    updatePageMeta(pageMeta.gallery.title, pageMeta.gallery.description, pageMeta.gallery.keywords, pageMeta.gallery.canonicalPath);
    injectStructuredData('page-schema-gallery', gallerySchema);
    return () => removeStructuredData('page-schema-gallery');
  }, []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      title: 'Our Store',
      icon: Store,
      images: [
        {
          url: '/sunil-communication_12.jpeg',
          caption: 'Store Front - Main Market, Karanprayag',
        },
        {
          url: '/sunil-communication_10.jpeg',
          caption: 'Inside View - Premium Displays',
        },
        {
          url: '/sunil-communication_6.jpeg',
          caption: 'Product Showcase Area',
        },
        {
          url: '/sunil-communication_4.jpeg',
          caption: 'Service Counter',
        },
      ],
    },
    {
      title: 'Phone Collection',
      icon: Smartphone,
      images: [
        {
          url: '/iPhone 16 Pro Max.webp',
          caption: 'iPhone 16 Pro Max',
        },
        {
          url: '/iphone-15-pro-max.png',
          caption: 'iPhone 15 Pro Max',
        },
        {
          url: '/iPhone 13.webp',
          caption: 'iPhone 13',
        },
        {
          url: '/Galaxy S25 Ultra.png',
          caption: 'Samsung Galaxy S25 Ultra',
        },
        {
          url: '/galaxy-s24-ultra-highlights-color-titanium-black-back-mo.jpg',
          caption: 'Samsung Galaxy S24 Ultra',
        },
        {
          url: '/Galaxy S24 FE.jpg',
          caption: 'Samsung Galaxy S24 FE',
        },
        {
          url: '/Galaxy A54.jpg',
          caption: 'Samsung Galaxy A54',
        },
        {
          url: '/Xiaomi 15 Ultra.jpg',
          caption: 'Xiaomi 15 Ultra',
        },
        {
          url: '/Xiaomi 15S Pro 5G.webp',
          caption: 'Xiaomi 15S Pro 5G',
        },
        {
          url: '/Xiaomi 14 Pro.png',
          caption: 'Xiaomi 14 Pro',
        },
        {
          url: '/Redmi Note 13 Pro.webp',
          caption: 'Redmi Note 13 Pro',
        },
        {
          url: '/OnePlus 13R.png',
          caption: 'OnePlus 13R',
        },
        {
          url: '/OnePlus 12.avif',
          caption: 'OnePlus 12',
        },
        {
          url: '/Vivo X200.webp',
          caption: 'Vivo X200',
        },
        {
          url: '/Vivo V30 Pro.jpg',
          caption: 'Vivo V30 Pro',
        },
        {
          url: '/Oppo Reno 11 Pro.png',
          caption: 'Oppo Reno 11 Pro',
        },
        {
          url: '/Realme 12 Proplus.jpg',
          caption: 'Realme 12 Pro+',
        },
        {
          url: '/Motorola Edge 50 Ultra.webp',
          caption: 'Motorola Edge 50 Ultra',
        },
        {
          url: '/Motorola Edge 40.png',
          caption: 'Motorola Edge 40',
        },
        {
          url: '/Nothing Phone (3a) Pro.jpg',
          caption: 'Nothing Phone (3a) Pro',
        },
        {
          url: '/iQOO Neo 10R.jpg',
          caption: 'iQOO Neo 10R',
        },
        {
          url: '/Nokia G42.jpg',
          caption: 'Nokia G42',
        },
      ],
    },
    {
      title: 'Happy Customers',
      icon: Users,
      images: [
        {
          url: '/sunil-communication_6 copy.jpeg',
          caption: 'Customer Experience',
        },
        {
          url: '/sunil-communication_7.jpeg',
          caption: 'Product Handover',
        },
        {
          url: '/sunil-communication_2.jpeg',
          caption: 'Customer Service',
        },
        {
          url: '/sunil-communication_3.jpeg',
          caption: 'Happy Buyer',
        },
      ],
    },
    {
      title: 'Accessories Collection',
      icon: Award,
      images: [
        {
          url: '/Premium Tempered Glass.jpg',
          caption: 'Premium Tempered Glass',
        },
        {
          url: '/Fast Charger 33W.jpg',
          caption: 'Fast Charger 33W',
        },
        {
          url: '/TWS Earbuds.jpg',
          caption: 'TWS Earbuds',
        },
        {
          url: '/Silicone Phone Case.jpg',
          caption: 'Silicone Phone Case',
        },
        {
          url: '/20000mAh Power Bank.webp',
          caption: '20000mAh Power Bank',
        },
        {
          url: '/128GB Memory Card.jpg',
          caption: '128GB Memory Card',
        },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Take a visual tour of our store, products, and happy customers
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {galleryCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <category.icon className="text-orange-600" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
                      onClick={() => setSelectedImage(image.url)}
                    >
                      <div className="aspect-square bg-gray-100">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white font-semibold text-sm">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Store</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience our collection firsthand at our store in Karanprayag. Our friendly staff
              is always ready to help you find the perfect phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919760262277"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                Call to Schedule Visit
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Main Market, Karanprayag, Chamoli (Uttarakhand)</p>
              <p className="mt-2">Open: Mon - Sat, 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
