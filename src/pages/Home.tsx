import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Wrench,
  ShoppingBag,
  Repeat,
  Star,
  Shield,
  Clock,
  Award,
  TrendingUp,
  Users,
  Phone,
  MapPin,
  ChevronRight,
  Zap,
  CreditCard,
  HeartHandshake,
  Camera,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { createProductInquiry, sendWhatsAppMessage } from '../utils/whatsapp';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services at Sunil Communication, Karanprayag",
  "description": "Mobile services available at Sunil Communication - best mobile shop in Karanprayag, Chamoli",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Mobile Phone Repair",
        "url": "https://sunilcommunication.com/services",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag", "addressRegion": "Chamoli, Uttarakhand"}},
        "description": "Expert mobile phone repair in Karanprayag for all brands - iPhone, Samsung, Xiaomi, Oppo, Vivo, OnePlus. Screen replacement, battery, charging port, water damage repair."
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Buy New & Used Smartphones",
        "url": "https://sunilcommunication.com/products",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag"}},
        "description": "Buy latest smartphones in Karanprayag from all major brands with genuine warranty and Bajaj Finance EMI."
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Mobile Accessories",
        "url": "https://sunilcommunication.com/accessories",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag"}},
        "description": "Wide range of mobile accessories in Karanprayag - cases, chargers, screen protectors, power banks, earphones."
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Mobile Exchange & Purchase",
        "url": "https://sunilcommunication.com/services",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag"}},
        "description": "Best value phone exchange in Karanprayag. Sell or exchange your old phone for a new one at fair prices."
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Bajaj Finance EMI",
        "url": "https://sunilcommunication.com/financing",
        "provider": {"@type": "LocalBusiness", "name": "Sunil Communication", "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag"}},
        "description": "Buy mobile on easy Bajaj Finance EMI in Karanprayag. Flexible 3-24 months tenure, quick approval."
      }
    }
  ]
};

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    updatePageMeta(pageMeta.home.title, pageMeta.home.description, pageMeta.home.keywords, pageMeta.home.canonicalPath);
    injectStructuredData('page-schema-home', homeSchema);

    const video = videoRef.current;
    if (!video) return () => removeStructuredData('page-schema-home');

    const handleLoadedData = () => {
      setTimeout(() => {
        setShowPoster(false);
        video.play();
      }, 333);
    };

    const handleEnded = () => {
      setShowPoster(true);
      setTimeout(() => {
        setShowPoster(false);
        video.currentTime = 0;
        video.play();
      }, 333);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
      removeStructuredData('page-schema-home');
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  const services = [
    {
      image: '/sunil-communication_2.jpeg',
      title: 'New Mobile Sale',
      description: 'Latest smartphones from all major brands at competitive prices',
      link: '/products',
    },
    {
      image: '/sunil-communication_3.jpeg',
      title: 'Old Mobile Exchange',
      description: 'Best value for your old phones. Buy, sell, and exchange easily',
      link: '/services',
    },
    {
      image: '/sunil-communication_6.jpeg',
      title: 'Mobile Repair',
      description: 'Expert repair services for all brands with genuine parts',
      link: '/services',
    },
    {
      image: '/sunil-communication_4.jpeg',
      title: 'Mobile Accessories',
      description: 'Wide range of accessories including cases, chargers, and more',
      link: '/accessories',
    },
  ];

  const brands = [
    'Nokia', 'Sony', 'Intex', 'iPhone', 'Samsung',
    'Oppo', 'Vivo', 'Xiaomi', 'Realme', 'OnePlus',
    'Motorola', 'Asus', 'Infinix', 'Tecno',
  ];

  const features = [
    {
      icon: Shield,
      title: 'Genuine Products',
      description: 'All products are 100% authentic with official warranty',
    },
    {
      icon: Award,
      title: 'Expert Service',
      description: 'Best mobile repairing service in Karanprayag, Chamoli with experienced technicians',
    },
    {
      icon: CreditCard,
      title: 'Easy Financing',
      description: 'Bajaj Finance EMI options available on all products',
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      description: 'Dedicated support and after-sales service',
    },
    {
      icon: MapPin,
      title: 'Best Mobile Shop in Karanprayag',
      description: 'Trusted by thousands of customers in the region',
    },
  ];

  const stats = [
    { icon: Users, value: '5,000+', label: 'Happy Customers' },
    { icon: Smartphone, value: '7,000+', label: 'Phones Sold' },
    { icon: Wrench, value: '3,000+', label: 'Repairs Done' },
    { icon: Clock, value: '4+', label: 'Years Experience' },
  ];

  const testimonials = [
    {
      name: 'Advik Joshi',
      location: 'Karanprayag',
      rating: 5,
      text: 'Excellent service! Bought my iPhone from here. Sunil ji provided great support and genuine product.',
    },
    {
      name: 'Anaya Pant',
      location: 'Chamoli',
      rating: 5,
      text: 'Best mobile shop in the area. They repaired my Samsung phone quickly and at reasonable price.',
    },
    {
      name: 'Shaurya Nautiyal',
      location: 'Karanprayag',
      rating: 5,
      text: 'Very helpful owner. Got my phone on EMI through Bajaj Finance. Smooth process!',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-2xl md:text-3xl font-bold mb-4 text-orange-100">
                जय मां उफराई
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                SUNIL COMMUNICATION
              </h1>
              <p className="text-xl md:text-2xl mb-3 text-orange-50">
                Your Trusted Mobile Partner Since 2021
              </p>
              <p className="text-lg md:text-xl mb-6 text-orange-100">
                Sales • Service • Accessories • Exchange
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Link
                  to="/products"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Browse Phones <ChevronRight size={20} />
                </Link>
                <a
                  href="tel:+919760262277"
                  className="bg-orange-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-900 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Call Now
                </a>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm">
                <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Shield size={16} />
                  <span>Authorized Dealer</span>
                </div>
                <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Award size={16} />
                  <span>4+ Years Trusted</span>
                </div>
                <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CreditCard size={16} />
                  <span>EMI Available</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                {showPoster && (
                  <img
                    src="/start.png"
                    alt="Sunil Communication"
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white border-opacity-20"
                  />
                )}
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  poster="/start.png"
                  className={`relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white border-opacity-20 ${showPoster ? 'hidden' : ''}`}
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-orange-600 p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete mobile solutions under one roof
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 text-orange-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Major Brands Available
            </h2>
            <p className="text-gray-600 text-lg">
              We deal in all mobile brands available in India
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-default"
              >
                <span className="text-gray-800 font-semibold text-lg">{brand}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-700 font-semibold mb-4">And many more...</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              View All Products <Smartphone size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference with Sunil Communication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon size={48} className="text-orange-200" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-orange-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg">Real experiences from real customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              View All Testimonials <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white text-blue-900 px-6 py-3 rounded-lg inline-block mb-6">
              <span className="text-2xl font-bold">Bajaj Finserv</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Easy EMI Options Available
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Own your dream phone today with flexible payment plans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/financing"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <CreditCard size={20} /> Learn More
              </Link>
              <button
                onClick={() => sendWhatsAppMessage('I want to know more about Bajaj Finance EMI options.')}
                className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-950 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera size={40} className="text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Gallery Preview
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Take a look at our store, products, and happy customers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square">
              <img
                src="/sunil-communication_12.jpeg"
                alt="Store Front"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">Our Store</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square">
              <img
                src="/sunil-communication_6.jpeg"
                alt="Phone Collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">Latest Phones</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square">
              <img
                src="/sunil-communication_6 copy.jpeg"
                alt="Happy Customer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square">
              <img
                src="/sunil-communication_7.jpeg"
                alt="Accessories"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">Accessories</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Camera size={20} /> View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Us on Social Media
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay connected for latest products, offers, and updates
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </h3>
              </div>
              <div className="h-[600px] overflow-auto bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-xl">Sunil Communication</h4>
                      <p className="text-gray-600 text-sm">Sunil Thapliyal</p>
                    </div>
                  </div>
                  <a
                    href="https://www.facebook.com/sunil.thapliyal.395"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Follow on Facebook
                  </a>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <p className="text-gray-700 text-sm mb-2">Connect with us on Facebook for:</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Daily updates on new mobile arrivals
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Special offers and discounts
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Customer testimonials and reviews
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Store announcements and events
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center">
                    <p className="text-gray-700 font-semibold mb-2">Stay Connected!</p>
                    <p className="text-gray-600 text-sm">Follow our Facebook profile to see the latest mobile phones, accessories, and exclusive deals available at our Karanprayag store.</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <p className="text-gray-700 text-sm font-semibold mb-2">Why Follow Us?</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span>
                        First to know about new launches
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span>
                        Exclusive Facebook-only promotions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span>
                        Quick customer support via messenger
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span>
                        Community of satisfied customers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </h3>
              </div>
              <div className="h-[600px] overflow-auto bg-gradient-to-br from-pink-50 to-purple-50 p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-xl">Sunil Communication</h4>
                      <p className="text-gray-600 text-sm">@thapliyalsunilthapliyal</p>
                    </div>
                  </div>
                  <a
                    href="https://www.instagram.com/thapliyalsunilthapliyal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow on Instagram
                  </a>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <p className="text-gray-700 text-sm mb-2">Visit our Instagram page to see:</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                        Latest mobile launches and offers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Customer reviews and testimonials
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                        Store updates and new arrivals
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Exclusive Instagram-only deals
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6 text-center">
                    <p className="text-gray-700 font-semibold mb-2">Stay Updated!</p>
                    <p className="text-gray-600 text-sm">Follow us on Instagram for daily updates on new phones, accessories, and exclusive offers available at our Karanprayag store.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Store
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Main Market, Karanprayag, Chamoli (Uttarakhand)
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.123!2d79.234!3d30.267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAxLjIiTiA3OcKwMTQnMDIuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunil Communication Location"
              ></iframe>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="tel:+919760262277"
                className="flex items-center justify-center gap-3 bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-lg"
              >
                <Phone size={20} /> Call Us
              </a>
              <button
                onClick={() => sendWhatsAppMessage('Hello! I would like to know more about your services.')}
                className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg"
              >
                <Phone size={20} /> WhatsApp
              </button>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 bg-gray-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all shadow-lg"
              >
                <MapPin size={20} /> Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
