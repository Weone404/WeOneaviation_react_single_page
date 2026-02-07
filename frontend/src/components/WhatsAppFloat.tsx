import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919355611996?text=Hi%2C%20I%20want%20to%20know%20about%20pilot%20training%20at%20We%20One%20Aviation"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-green animate-pulse-glow hover:scale-110 transition-transform"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground" />
    </a>
  );
};

export default WhatsAppFloat;
