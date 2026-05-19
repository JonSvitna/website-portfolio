"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "heroOutline" | "navy";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const variantClasses = {
  primary:
    "bg-gold text-navy font-semibold shadow-[0_12px_32px_-10px_rgba(245,184,0,0.55)] hover:bg-gold-dark",
  secondary:
    "border-2 border-navy bg-surface text-navy hover:bg-stone-deep",
  navy: "bg-navy text-white hover:bg-navy-mid",
  heroOutline:
    "border-2 border-white/90 bg-transparent text-white hover:bg-white/10",
  ghost: "text-ink hover:text-gold",
};

export default function MagneticButton({
  children,
  href,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });
  const transform = useMotionTemplate`translate(${springX}px, ${springY}px)`;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors active:scale-[0.98]";

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.12);
    y.set(offsetY * 0.12);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `${base} ${variantClasses[variant]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        style={{ transform }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      style={{ transform }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
