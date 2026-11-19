import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { site, whatsappLink } from "@/lib/site";

export const redes = [
  { href: site.redes.instagram, label: "Instagram", handle: "@niltonadvocacia", Icon: FaInstagram },
  { href: site.redes.facebook, label: "Facebook", handle: "/niltonadvocacia", Icon: FaFacebookF },
  { href: site.redes.youtube, label: "YouTube", handle: "Canal no YouTube", Icon: FaYoutube },
  { href: site.redes.linkedin, label: "LinkedIn", handle: "Nilton Cesar dos Santos", Icon: FaLinkedinIn },
];

export function SocialIcons() {
  return (
    <div className="social">
      {redes.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}>
          <Icon size={18} aria-hidden />
        </a>
      ))}
    </div>
  );
}

export function ContactList() {
  return (
    <ul className="contact-list">
      <li>
        <a href={whatsappLink()} target="_blank" rel="noopener">
          <FaWhatsapp size={22} aria-hidden />
          <span>WhatsApp<small>{site.whatsapp.exibicao}</small></span>
        </a>
      </li>
      {redes.map(({ href, label, handle, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener">
            <Icon size={20} aria-hidden />
            <span>{label}<small>{handle}</small></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export { FaWhatsapp };
