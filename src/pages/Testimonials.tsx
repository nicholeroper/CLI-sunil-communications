import { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';

const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Customer Reviews - Sunil Communication Karanprayag",
  "url": "https://sunilcommunication.com/testimonials",
  "description": "Genuine customer reviews for Sunil Communication - best mobile shop in Karanprayag, Chamoli. 5-star rated by 25+ customers.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Review",
        "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
        "author": {"@type": "Person", "name": "Aarav Sharma"},
        "reviewBody": "Excellent service and genuine products! Bought my Samsung Galaxy S24 from here. Sunil ji was very helpful in explaining all features. Highly recommended!",
        "itemReviewed": {"@type": "LocalBusiness", "name": "Sunil Communication", "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag"}}
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Review",
        "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
        "author": {"@type": "Person", "name": "Saanvi Verma"},
        "reviewBody": "Best mobile shop in Karanprayag! Got my iPhone on easy EMI through Bajaj Finance. The whole process was smooth and hassle-free.",
        "itemReviewed": {"@type": "LocalBusiness", "name": "Sunil Communication", "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag"}}
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Review",
        "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
        "author": {"@type": "Person", "name": "Vihaan Chauhan"},
        "reviewBody": "Amazing repair service! My phone screen was broken and they fixed it in just 2 hours. Very professional and affordable pricing.",
        "itemReviewed": {"@type": "LocalBusiness", "name": "Sunil Communication", "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag"}}
      }
    }
  ]
};

const Testimonials = () => {
  useEffect(() => {
    updatePageMeta(pageMeta.testimonials.title, pageMeta.testimonials.description, pageMeta.testimonials.keywords, pageMeta.testimonials.canonicalPath);
    injectStructuredData('page-schema-testimonials', testimonialsSchema);
    return () => removeStructuredData('page-schema-testimonials');
  }, []);
  const testimonials = [
    {
      name: 'Aarav Sharma',
      location: 'Karanprayag',
      rating: 5,
      text: 'Excellent service and genuine products! Bought my Samsung Galaxy S24 from here. Sunil ji was very helpful in explaining all features. Highly recommended!',
    },
    {
      name: 'Saanvi Verma',
      location: 'Chamoli',
      rating: 5,
      text: 'Best mobile shop in Karanprayag! Got my iPhone on easy EMI through Bajaj Finance. The whole process was smooth and hassle-free.',
    },
    {
      name: 'Vihaan Chauhan',
      location: 'Gopeshwar',
      rating: 5,
      text: 'Amazing repair service! My phone screen was broken and they fixed it in just 2 hours. Very professional and affordable pricing.',
    },
    {
      name: 'Aadhya Rajput',
      location: 'Karanprayag',
      rating: 5,
      text: 'Great experience! Exchanged my old phone and got a fantastic deal on OnePlus 13R. The staff is knowledgeable and friendly.',
    },
    {
      name: 'Kairav Reddy',
      location: 'Nandprayag',
      rating: 5,
      text: 'Trusted shop with genuine products. Purchased Xiaomi 15 Pro with warranty. The after-sales support is excellent!',
    },
    {
      name: 'Aarohi Deshmukh',
      location: 'Chamoli',
      rating: 5,
      text: 'Very satisfied with the service. Got all mobile accessories at reasonable prices. Wide variety of products available.',
    },
    {
      name: 'Rajan Bhasin',
      location: 'Karanprayag',
      rating: 5,
      text: 'Best place for mobile repairs in the area. They fixed my charging port issue quickly with genuine parts. Highly professional!',
    },
    {
      name: 'Mishka Nair',
      location: 'Joshimath',
      rating: 5,
      text: 'Wonderful experience! Bought Vivo X200 and the owner provided great guidance. Fair pricing and authentic products.',
    },
    {
      name: 'Ishan Joshi',
      location: 'Karanprayag',
      rating: 5,
      text: 'Excellent customer service! Got my phone battery replaced with warranty. Very transparent pricing and quick service.',
    },
    {
      name: 'Ira Sathyan',
      location: 'Chamoli',
      rating: 5,
      text: 'Best mobile shop! Purchased Realme 15 Pro on EMI. The process was explained clearly and completed smoothly.',
    },
    {
      name: 'Avik Malhotra',
      location: 'Gopeshwar',
      rating: 5,
      text: 'Great shop with honest dealing. Exchanged my old phone and got excellent value. Would definitely recommend to everyone!',
    },
    {
      name: 'Riya Jindal',
      location: 'Karanprayag',
      rating: 5,
      text: 'Fantastic service! My phone had water damage and they repaired it perfectly. Experienced technicians and reasonable rates.',
    },
    {
      name: 'Atharv Saini',
      location: 'Nandprayag',
      rating: 5,
      text: 'Very professional service. Bought iPhone 16 Pro Max with full warranty. The owner is very knowledgeable about all products.',
    },
    {
      name: 'Ayana Pawar',
      location: 'Chamoli',
      rating: 5,
      text: 'Highly recommended! Got my phone repaired with genuine parts. Very happy with the quality of service and warranty provided.',
    },
    {
      name: 'Jaiveer Mehra',
      location: 'Karanprayag',
      rating: 5,
      text: 'Best shop for mobile accessories! Wide range of products at competitive prices. Owner is very helpful and friendly.',
    },
    {
      name: 'Prisha Iyer',
      location: 'Joshimath',
      rating: 5,
      text: 'Excellent experience! Purchased Oppo Reno 11 Pro with EMI facility. The entire process was very smooth and professional.',
    },
    {
      name: 'Ayaan Pillai',
      location: 'Karanprayag',
      rating: 5,
      text: 'Trusted shop with genuine products. Got my Motorola phone repaired quickly. Very satisfied with their service quality.',
    },
    {
      name: 'Kiara Menon',
      location: 'Chamoli',
      rating: 5,
      text: 'Great service and support! Bought Samsung Galaxy A54 with warranty. The staff explained everything clearly.',
    },
    {
      name: 'Vedansh Mathur',
      location: 'Gopeshwar',
      rating: 5,
      text: 'Best mobile repairing service in Chamoli region. Fixed my phone software issue efficiently. Very knowledgeable staff!',
    },
    {
      name: 'Bhavya Kapur',
      location: 'Karanprayag',
      rating: 5,
      text: 'Amazing shop! Exchanged my old phone and got the best deal. Transparent pricing and excellent customer service.',
    },
    {
      name: 'Nirbhay Baliga',
      location: 'Nandprayag',
      rating: 5,
      text: 'Very satisfied customer! Purchased Nothing Phone with EMI option. The process was hassle-free and quick.',
    },
    {
      name: 'Vedika Doshi',
      location: 'Chamoli',
      rating: 5,
      text: 'Excellent shop for all mobile needs! Got screen protector and phone case at great prices. Quality products available.',
    },
    {
      name: 'Ronit Dandekar',
      location: 'Karanprayag',
      rating: 5,
      text: 'Best place for mobile purchase and repair. Bought iQOO Neo 10R with full warranty. Highly professional service!',
    },
    {
      name: 'Meher Khanna',
      location: 'Joshimath',
      rating: 5,
      text: 'Wonderful experience! Got my phone repaired with genuine parts and warranty. Very trustworthy and reliable shop.',
    },
    {
      name: 'Pranay Shekhar',
      location: 'Karanprayag',
      rating: 5,
      text: 'Highly recommended for mobile purchases! Great collection of latest phones. Genuine products with manufacturer warranty.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Real experiences from our valued customers
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Sunil Communication for all their mobile needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote className="text-orange-600" size={32} />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Share Your Experience?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              We value your feedback and would love to hear from you
            </p>
            <a
              href="tel:+919760262277"
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
