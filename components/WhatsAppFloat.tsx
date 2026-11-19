import { whatsappLink, ctaPrincipal } from "@/lib/site";
import { FaWhatsapp } from "./Social";

export default function WhatsAppFloat() {
  return (
    <>
      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener" aria-label={`${ctaPrincipal} pelo WhatsApp`}>
        <FaWhatsapp size={26} aria-hidden />
      </a>
      <div className="mobile-bar">
        <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener">
          <FaWhatsapp size={18} aria-hidden /> {ctaPrincipal}
        </a>
      </div>
    </>
  );
}
