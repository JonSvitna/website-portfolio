'use client';

import {
  Airplane,
  Briefcase,
  Camera,
  Clock,
  GraduationCap,
  Heart,
  LockSimple,
  Moon,
  ShieldCheck,
  Sparkle,
  Star,
} from "@phosphor-icons/react";

const ic = (size: number) => ({
  weight: "duotone" as const,
  size,
  className: "shrink-0 text-champagne",
});

export function FlyerIcon({
  name,
  size = 28,
}: {
  name: "shield" | "clock" | "lock" | "star" | "heart" | "grad" | "plane" | "case" | "spark" | "cam" | "moon";
  size?: number;
}) {
  const p = ic(size);

  switch (name) {
    case "shield": return <ShieldCheck {...p} />;
    case "clock": return <Clock {...p} />;
    case "lock": return <LockSimple {...p} />;
    case "star": return <Star {...p} />;
    case "heart": return <Heart {...p} />;
    case "grad": return <GraduationCap {...p} />;
    case "plane": return <Airplane {...p} />;
    case "case": return <Briefcase {...p} />;
    case "spark": return <Sparkle {...p} />;
    case "cam": return <Camera {...p} />;
    case "moon": return <Moon {...p} />;
    default: return <Star {...p} />;
  }
}
