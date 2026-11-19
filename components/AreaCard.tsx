import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Area } from "@/lib/areas";
import AreaIcon from "./AreaIcon";

export default function AreaCard({ area }: { area: Area }) {
  return (
    <Link href={`/areas-de-atuacao/${area.slug}`} className="area-card" data-reveal>
      <span className="ico"><AreaIcon name={area.icone} /></span>
      <h3>{area.titulo}</h3>
      <p>{area.resumo}</p>
      <span className="more">Ver a área <ArrowRight size={16} aria-hidden /></span>
    </Link>
  );
}
