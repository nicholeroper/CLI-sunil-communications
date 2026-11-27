import { useEffect } from 'react';
import { Award, Target, Eye, Heart, Users, Clock, Shield, TrendingUp } from 'lucide-react';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://sunilcommunication.com/about",
  "name": "About Sunil Communication - Trusted Mobile Shop in Karanprayag",
  "description": "Sunil Communication was founded on January 14, 2021 by Mr. Sunil Thapliyal in Karanprayag, Chamoli, Uttarakhand. We are the most trusted mobile shop in the Chamoli district.",
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://sunilcommunication.com/#business",
    "name": "Sunil Communication",
    "foundingDate": "2021-01-14",
    "founder": {
      "@type": "Person",
      "name": "Sunil Thapliyal",
      "jobTitle": "Proprietor",
      "worksFor": {"@type": "Organization", "name": "Sunil Communication"}
    },
    "numberOfEmployees": {"@type": "QuantitativeValue", "value": "3"},
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Market, Karanprayag",
      "addressLocality": "Karanprayag",
      "addressRegion": "Chamoli, Uttarakhand",
      "postalCode": "246419",
      "addressCountry": "IN"
    },
    "telephone": "+91-9760262277",
    "url": "https://sunilcommunication.com/"
  }
};

const About = () => {
  useEffect(() => {
    updatePageMeta(pageMeta.about.title, pageMeta.about.description, pageMeta.about.keywords, pageMeta.about.canonicalPath);
    injectStructuredData('page-schema-about', aboutSchema);
    return () => removeStructuredData('page-schema-about');
  }, []);
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We believe in honest business practices and transparent dealings',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority in everything we do',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on the quality of products and services',
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Building long-term relationships based on trust and reliability',
    },
  ];

  const milestones = [
    { year: '2021', event: 'Started Sunil Communication in Karanprayag on 14 January' },
    { year: '2022', event: 'Became authorized dealer for major brands' },
    { year: '2023', event: 'Expanded to include repair services' },
    { year: '2024', event: 'Partnered with Bajaj Finance for EMI services' },
    { year: '2025', event: 'Serving thousands of satisfied customers' },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Your trusted mobile partner since 2021
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-2xl text-orange-600 font-bold mb-4">जय मां उफराई</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                Established on <strong>14 January 2021</strong>, <strong>Sunil Communication</strong> has been serving the community
                of Karanprayag and surrounding areas with dedication and excellence. What started as a
                small mobile shop has grown into a trusted destination for all mobile phone needs in
                the region.
              </p>
              <p className="text-lg">
                Located in the heart of Main Market, Karanprayag, we have built our reputation on the
                foundation of genuine products, expert service, and customer satisfaction. Our journey
                has been blessed by Maa Ufrai, and we continue to serve our customers with the same
                devotion and commitment.
              </p>
              <p className="text-lg">
                Under the guidance of our proprietor, <strong>Mr. Sunil Thapliyal</strong>, we have
                evolved with the changing technology landscape while maintaining our core values of
                honesty, quality, and customer-first approach. Today, we are proud to be the preferred
                choice for thousands of customers in Chamoli district.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/sunil-communication_11.jpeg"
                      alt="Mr. Sunil Thapliyal - Proprietor of Sunil Communication"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Meet Our Proprietor
                  </h2>
                  <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                    Mr. Sunil Thapliyal
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    With experience in the mobile industry, Mr. Sunil Thapliyal has
                    established himself as a trusted name in Karanprayag. His vision of providing
                    quality products and services at fair prices has been the driving force behind
                    Sunil Communication's success.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    His hands-on approach and personal attention to every customer has created a loyal
                    customer base that continues to grow. He believes in building relationships, not
                    just making sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border-2 border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-orange-600" size={36} />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide high-quality mobile products and services that enhance the lives of our
                  customers while maintaining the highest standards of integrity and customer service.
                  We strive to be the most trusted mobile shop in Uttarakhand.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-blue-600" size={36} />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading mobile retail and service destination in the region, known for
                  our exceptional customer experience, extensive product range, and expert technical
                  support.
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-300 text-lg">Years of growth and success</p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow pt-4">
                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                      <p className="text-lg text-gray-100">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Customers Trust Us
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <TrendingUp size={48} className="mx-auto mb-3 text-orange-200" />
                <div className="text-4xl font-bold mb-2">4+</div>
                <div className="text-orange-100">Years Experience</div>
              </div>
              <div>
                <Users size={48} className="mx-auto mb-3 text-orange-200" />
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-orange-100">Happy Customers</div>
              </div>
              <div>
                <Award size={48} className="mx-auto mb-3 text-orange-200" />
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-orange-100">Genuine Products</div>
              </div>
              <div>
                <Clock size={48} className="mx-auto mb-3 text-orange-200" />
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-orange-100">Support Available</div>
              </div>
            </div>
            <p className="text-xl text-orange-100 leading-relaxed">
              We are committed to providing you with the best mobile shopping and service
              experience in Karanprayag and beyond.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
