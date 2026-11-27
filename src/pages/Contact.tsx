import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { createContactFormMessage } from '../utils/whatsapp';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://sunilcommunication.com/contact",
  "name": "Contact Sunil Communication - Mobile Shop Karanprayag",
  "description": "Contact Sunil Communication at Main Market, Karanprayag, Chamoli. Call or WhatsApp +91-9760262277. Open daily 9AM-9PM.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "@id": "https://sunilcommunication.com/#business",
    "name": "Sunil Communication",
    "telephone": "+91-9760262277",
    "email": "sunilcommunication@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Market, Karanprayag",
      "addressLocality": "Karanprayag",
      "addressRegion": "Chamoli, Uttarakhand",
      "postalCode": "246419",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.267",
      "longitude": "79.234"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9760262277",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    }
  }
};

const Contact = () => {
  useEffect(() => {
    updatePageMeta(pageMeta.contact.title, pageMeta.contact.description, pageMeta.contact.keywords, pageMeta.contact.canonicalPath);
    injectStructuredData('page-schema-contact', contactSchema);
    return () => removeStructuredData('page-schema-contact');
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      createContactFormMessage(formData.name, formData.phone, formData.email, formData.message);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91-9760262277', '+91-7895491113', '+91-9837507206'],
      action: 'tel:+919760262277',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+91-9760262277'],
      action: 'https://wa.me/919760262277',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Main Market', 'Karanprayag, Chamoli', 'Uttarakhand, India'],
      action: 'https://maps.app.goo.gl/dMezhjjGMjFJacc77',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Sunday', '9:00 AM - 8:00 PM', 'Open 7 Days a Week'],
      action: null,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            We're here to help! Reach out to us anytime
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-br ${info.color} p-6 text-white`}>
                  <info.icon size={40} className="mb-3" />
                  <h3 className="text-xl font-bold">{info.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all text-sm"
                    >
                      {info.title === 'Call Us'
                        ? 'Call Now'
                        : info.title === 'WhatsApp'
                        ? 'Chat Now'
                        : 'Get Directions'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-orange-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email (optional)"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you"
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 text-gray-900 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send via WhatsApp
                  </button>
                  <p className="text-sm text-gray-600 text-center">
                    Your message will be sent to our WhatsApp for quick response
                  </p>
                </form>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-full min-h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.9769583333334!2d79.2225!3d30.2667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a743a4c3f0e5e9%3A0x9e8c3d8e9f0a1b2c!2sKaranprayag%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sunil Communication Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Store</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Come visit us at our store in Main Market, Karanprayag. Our team is always ready to
              assist you with all your mobile needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <MapPin size={32} className="text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-300 text-sm">
                  Main Market, Karanprayag, Chamoli, Uttarakhand
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <Clock size={32} className="text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-300 text-sm">Mon - Sun: 9 AM - 8 PM</p>
                <p className="text-gray-300 text-sm">Open 7 Days a Week</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <Phone size={32} className="text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-gray-300 text-sm">+91-9760262277</p>
                <p className="text-gray-300 text-sm">+91-7895491113</p>
              </div>
            </div>
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

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Question? We're Here to Help!
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Feel free to reach out to us through any channel. We typically respond within minutes
              during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919760262277"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
              <a
                href="https://wa.me/919760262277"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
