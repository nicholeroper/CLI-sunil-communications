import { MessageCircle } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';

const WhatsAppFloat = () => {
  const handleClick = () => {
    sendWhatsAppMessage('Hello! I would like to know more about your services.');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppFloat;
