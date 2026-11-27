import { useState, useEffect } from 'react';
import {
  Smartphone,
  Wrench,
  Repeat,
  ShoppingBag,
  Shield,
  Clock,
  CheckCircle,
  Settings,
  Zap,
  Phone,
} from 'lucide-react';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';
import { createServiceInquiry, createRepairInquiry } from '../utils/whatsapp';

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Mobile Services in Karanprayag - Sunil Communication",
  "url": "https://sunilcommunication.com/services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Mobile Phone Screen Replacement Karanprayag",
        "description": "Professional cracked screen replacement for iPhone, Samsung, Xiaomi, Oppo, Vivo, OnePlus in Karanprayag. Same-day service with warranty.",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "telephone": "+91-9760262277"},
        "areaServed": {"@type": "City", "name": "Karanprayag"},
        "serviceType": "Mobile Repair"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Mobile Battery Replacement Karanprayag",
        "description": "Battery replacement for all smartphone brands in Karanprayag. Genuine batteries with 3-month warranty.",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "telephone": "+91-9760262277"},
        "areaServed": {"@type": "City", "name": "Karanprayag"},
        "serviceType": "Mobile Repair"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Charging Port Repair Karanprayag",
        "description": "Charging port repair and replacement for all phone brands in Karanprayag, Chamoli.",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "telephone": "+91-9760262277"},
        "areaServed": {"@type": "City", "name": "Karanprayag"},
        "serviceType": "Mobile Repair"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Water Damage Mobile Repair Karanprayag",
        "description": "Water damage repair and recovery for smartphones in Karanprayag, Chamoli, Uttarakhand.",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "telephone": "+91-9760262277"},
        "areaServed": {"@type": "City", "name": "Karanprayag"},
        "serviceType": "Mobile Repair"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "New Mobile Phone Sales Karanprayag",
        "description": "Buy latest smartphones in Karanprayag with genuine warranty from all major brands.",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "telephone": "+91-9760262277"},
        "areaServed": {"@type": "City", "name": "Karanprayag"},
        "serviceType": "Smartphone Sales"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Old Mobile Exchange Karanprayag",
        "description": "Best exchange value for old phones in Karanprayag. Instant price evaluation with fair transparent pricing.",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "telephone": "+91-9760262277"},
        "areaServed": {"@type": "City", "name": "Karanprayag"},
        "serviceType": "Phone Exchange"
      }
    }
  ]
};

const Services = () => {
  useEffect(() => {
    updatePageMeta(pageMeta.services.title, pageMeta.services.description, pageMeta.services.keywords, pageMeta.services.canonicalPath);
    injectStructuredData('page-schema-services', servicesSchema);
    return () => removeStructuredData('page-schema-services');
  }, []);
  const [repairForm, setRepairForm] = useState({
    phoneModel: '',
    issue: '',
  });

  const services = [
    {
      image: '/sunil-communication_2.jpeg',
      title: 'New Mobile Sale',
      color: 'from-blue-500 to-blue-700',
      features: [
        'Latest models from all major brands',
        '100% genuine products with warranty',
        'Competitive pricing',
        'Expert guidance in selection',
        'After-sales support',
        'EMI options available',
      ],
      description:
        'Get the latest smartphones from top brands including iPhone, Samsung, Oppo, Vivo, Xiaomi, and more. We offer genuine products with manufacturer warranty and the best prices in town.',
    },
    {
      image: '/sunil-communication_3.jpeg',
      title: 'Old Mobile Exchange & Purchase',
      color: 'from-green-500 to-green-700',
      features: [
        'Best exchange value for your old phone',
        'Instant price evaluation',
        'Fair and transparent pricing',
        'Exchange with any new purchase',
        'We buy phones in any condition',
        'Quick and hassle-free process',
      ],
      description:
        'Upgrade to your dream phone by exchanging your old device. We offer the best exchange value in the market. You can also sell your old phone directly to us for instant cash.',
    },
    {
      image: '/sunil-communication_6.jpeg',
      title: 'Mobile Repair Services',
      color: 'from-orange-500 to-red-600',
      features: [
        'Expert technicians',
        'Genuine spare parts',
        'Screen replacement',
        'Battery replacement',
        'Software issues',
        'Water damage repair',
        'Fast turnaround time',
        'Warranty on repairs',
      ],
      description:
        'Professional repair services for all mobile brands. From screen replacement to complex motherboard repairs, our experienced technicians can fix it all with genuine parts.',
    },
    {
      image: '/sunil-communication_4.jpeg',
      title: 'Mobile Accessories',
      color: 'from-purple-500 to-pink-600',
      features: [
        'Wide range of accessories',
        'Phone cases and covers',
        'Screen protectors',
        'Chargers and cables',
        'Power banks',
        'Earphones and headsets',
        'Memory cards',
        'All brands available',
      ],
      description:
        'Complete range of mobile accessories to enhance and protect your device. Quality products at affordable prices for all phone models.',
    },
  ];

  const repairServices = [
    'Screen Replacement',
    'Battery Replacement',
    'Charging Port Repair',
    'Speaker/Mic Repair',
    'Camera Repair',
    'Software Issues',
    'Water Damage',
    'Button Replacement',
  ];

  const handleRepairInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (repairForm.phoneModel && repairForm.issue) {
      createRepairInquiry(repairForm.phoneModel, repairForm.issue);
      setRepairForm({ phoneModel: '', issue: '' });
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Comprehensive mobile solutions for all your needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative h-[400px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}></div>
                    </div>
                    <div className="bg-white p-8">
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                      <p className="text-lg leading-relaxed text-gray-700">{service.description}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={28} />
                      What We Offer
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-orange-100 rounded-full p-1 mt-0.5">
                            <CheckCircle size={16} className="text-orange-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => createServiceInquiry(service.title)}
                      className="mt-6 w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Phone size={20} />
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Repair Services</h2>
              <p className="text-gray-300 text-lg">
                Professional repair for all mobile brands
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Settings className="text-orange-500" size={28} />
                  Common Repairs
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {repairServices.map((repair, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-700 px-4 py-3 rounded-lg text-center hover:bg-orange-600 transition-colors"
                    >
                      {repair}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="text-green-500" size={28} />
                  Our Promise
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Genuine spare parts only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Experienced technicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>90 days warranty on repairs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Quick turnaround time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Request Repair Service</h3>
              <form onSubmit={handleRepairInquiry} className="max-w-2xl mx-auto space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Model</label>
                  <input
                    type="text"
                    value={repairForm.phoneModel}
                    onChange={(e) =>
                      setRepairForm({ ...repairForm, phoneModel: e.target.value })
                    }
                    placeholder="e.g., iPhone 12, Samsung Galaxy S21"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Describe the Issue</label>
                  <textarea
                    value={repairForm.issue}
                    onChange={(e) => setRepairForm({ ...repairForm, issue: e.target.value })}
                    placeholder="e.g., Screen is cracked, battery drains quickly"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-orange-600 px-6 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Send Inquiry via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-blue-600" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Service</h3>
                <p className="text-gray-600">
                  Quick turnaround time for all services without compromising quality
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-green-600" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty</h3>
                <p className="text-gray-600">
                  All our services and products come with warranty for your peace of mind
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-orange-600" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced</h3>
                <p className="text-gray-600">
                  4+ years of experience serving thousands of satisfied customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
