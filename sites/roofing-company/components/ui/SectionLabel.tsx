import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-gold ${className}`}
    >
      {children}
    </p>
  );
}
