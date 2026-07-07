import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppMark } from "./WhatsAppIcon";

type HeaderWhatsAppCtaProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

export default function HeaderWhatsAppCta({ label, className = "", onClick }: HeaderWhatsAppCtaProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp-cta ${className}`}
      onClick={onClick}
    >
      <WhatsAppMark className="h-6 w-6 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
