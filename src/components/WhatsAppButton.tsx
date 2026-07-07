import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppBadge } from "./WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 block rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.5)] transition hover:scale-105 hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)]"
      aria-label="WhatsApp"
    >
      <WhatsAppBadge size={56} />
    </a>
  );
}
