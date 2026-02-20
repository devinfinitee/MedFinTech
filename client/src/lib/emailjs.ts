// EmailJS Configuration
// Note: Install @emailjs/browser package: npm install @emailjs/browser
// Get your credentials from https://www.emailjs.com/

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export const whatsappConfig = {
  phoneNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '+2348012345678',
};

// Default site-wide contact email
export const defaultContactEmail = 'medfintech@gmail.com';

// Helper function to open WhatsApp chat
export const openWhatsApp = (message?: string) => {
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const url = `https://wa.me/${whatsappConfig.phoneNumber.replace(/\+/g, '')}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
  window.open(url, '_blank');
};
