import { useState, useEffect } from 'react';
import { CreditCard, CheckCircle, FileText, Calculator, Phone, AlertCircle } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';
import { updatePageMeta, pageMeta, injectStructuredData, removeStructuredData } from '../utils/seo';

const financingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://sunilcommunication.com/financing",
  "name": "Mobile on Easy EMI in Karanprayag - Bajaj Finance Partner",
  "description": "Buy smartphones on Bajaj Finance EMI at Sunil Communication, Karanprayag. No-cost EMI with 3-24 months flexible tenure.",
  "mainEntity": {
    "@type": "FinancialProduct",
    "name": "Bajaj Finance Mobile EMI",
    "description": "Easy no-cost EMI financing for smartphones through Bajaj Finance at Sunil Communication, Karanprayag. Available for all brands with quick approval and flexible 3-24 month tenure.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sunil Communication",
      "telephone": "+91-9760262277",
      "address": {"@type": "PostalAddress", "addressLocality": "Karanprayag", "addressRegion": "Chamoli, Uttarakhand", "postalCode": "246419"}
    },
    "feesAndCommissionsSpecification": "No cost EMI available on select products. Standard EMI with interest for other products.",
    "annualPercentageRate": {"@type": "QuantitativeValue", "value": "0", "unitText": "% for no-cost EMI"},
    "loanTerm": {"@type": "QuantitativeValue", "minValue": 3, "maxValue": 24, "unitText": "months"}
  }
};

const Financing = () => {
  useEffect(() => {
    updatePageMeta(pageMeta.financing.title, pageMeta.financing.description, pageMeta.financing.keywords, pageMeta.financing.canonicalPath);
    injectStructuredData('page-schema-financing', financingSchema);
    return () => removeStructuredData('page-schema-financing');
  }, []);
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(12);

  const calculateEMI = () => {
    const principal = loanAmount;
    const annualRate = 15;
    const monthlyRate = annualRate / 12 / 100;
    const months = tenure;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  const benefits = [
    'Zero down payment options available',
    'Flexible tenure from 3 to 24 months',
    'Quick approval process',
    'Minimal documentation required',
    'No hidden charges',
    'Pre-approved limits for existing customers',
  ];

  const documents = [
    'Valid Aadhaar Card',
    'PAN Card',
    'Recent passport size photograph',
    'Proof of income (Salary slip/Bank statement)',
    'Address proof',
  ];

  const steps = [
    {
      step: '1',
      title: 'Choose Your Phone',
      description: 'Select any phone from our extensive collection',
    },
    {
      step: '2',
      title: 'Provide Documents',
      description: 'Submit required documents for verification',
    },
    {
      step: '3',
      title: 'Get Instant Approval',
      description: 'Quick approval within minutes',
    },
    {
      step: '4',
      title: 'Take Your Phone',
      description: 'Walk out with your new phone today',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white text-blue-900 px-8 py-4 rounded-xl inline-block mb-6 shadow-xl">
            <span className="text-3xl font-bold">Bajaj Finserv</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Easy EMI Options</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Own your dream phone today with flexible payment plans
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Bajaj Finance?
              </h2>
              <p className="text-gray-600 text-lg">
                India's most trusted financial services partner
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-100"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Calculator size={48} className="text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">EMI Calculator</h2>
                <p className="text-gray-600">Calculate your monthly EMI instantly</p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Phone Price: ₹{loanAmount.toLocaleString('en-IN')}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="150000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>₹10,000</span>
                    <span>₹1,50,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Loan Tenure: {tenure} months
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="24"
                    step="3"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>3 months</span>
                    <span>24 months</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-blue-200 text-sm mb-2">Monthly EMI</p>
                    <p className="text-3xl md:text-4xl font-bold">
                      ₹{emi.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm mb-2">Total Interest</p>
                    <p className="text-3xl md:text-4xl font-bold">
                      ₹{totalInterest.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm mb-2">Total Amount</p>
                    <p className="text-3xl md:text-4xl font-bold">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-sm text-gray-700">
                    This is an approximate calculation. Actual EMI may vary based on final
                    approval and current interest rates. Contact us for exact details.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  sendWhatsAppMessage(
                    `I want to buy a phone worth ₹${loanAmount.toLocaleString('en-IN')} on EMI for ${tenure} months. Please provide more details.`
                  )
                }
                className="w-full mt-6 bg-green-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Apply Now via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 text-lg">
                Get your phone on EMI in 4 simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="text-blue-600" size={36} />
                <h2 className="text-3xl font-bold text-gray-900">Required Documents</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100"
                  >
                    <CheckCircle className="text-blue-600" size={20} />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Additional documents may be required based on your
                  employment status and credit profile. Our team will guide you through the
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CreditCard size={64} className="mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Your Dream Phone?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Visit our store or contact us to start your EMI application process today. Our team
              will assist you at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919760262277"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
              <button
                onClick={() =>
                  sendWhatsAppMessage('I want to know more about Bajaj Finance EMI options.')
                }
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} /> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financing;
