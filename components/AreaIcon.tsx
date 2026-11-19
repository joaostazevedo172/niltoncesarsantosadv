import { Scale, TrendingUp, Lightbulb, Handshake, Receipt, Landmark, Leaf, Vote, Gavel, Trophy, ShoppingBag, Users, House, HeartPulse, RadioTower, Banknote, type LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { Scale, TrendingUp, Lightbulb, Handshake, Receipt, Landmark, Leaf, Vote, Gavel, Trophy, ShoppingBag, Users, House, HeartPulse, RadioTower, Banknote };

export default function AreaIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = map[name] ?? Scale;
  return <Icon size={size} strokeWidth={1.6} aria-hidden />;
}
