export const WHATSAPP_NUMBER = '919760262277';

export const sendWhatsAppMessage = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

export const createProductInquiry = (productName: string, productType: string = 'mobile') => {
  const message = `Hello, I'm interested in the ${productName} ${productType}. Please provide more details.`;
  sendWhatsAppMessage(message);
};

export const createServiceInquiry = (serviceName: string, details: string = '') => {
  const message = `Hello, I would like to inquire about ${serviceName}. ${details}`;
  sendWhatsAppMessage(message);
};

export const createContactFormMessage = (name: string, phone: string, email: string, message: string) => {
  const formattedMessage = `*New Contact Form Submission*\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
  sendWhatsAppMessage(formattedMessage);
};

export const createRepairInquiry = (phoneModel: string, issue: string) => {
  const message = `Hello, I need repair service for my ${phoneModel}. Issue: ${issue}`;
  sendWhatsAppMessage(message);
};
