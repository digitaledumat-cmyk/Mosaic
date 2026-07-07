import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppBadge } from "./WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 block rounded-full shadow-lg transition hover:scale-105 hover:shadow-xl"
      aria-label="WhatsApp"
    >
      <WhatsAppBadge size={56} />
    </a>
  );
}
