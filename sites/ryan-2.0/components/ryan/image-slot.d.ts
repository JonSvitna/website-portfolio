import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ImageSlotAttributes {
  id?: string;
  shape?: "rect" | "rounded" | "circle" | "pill";
  radius?: number;
  mask?: string;
  fit?: "cover" | "contain" | "fill";
  position?: string;
  placeholder?: string;
  src?: string;
  style?: CSSProperties;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "image-slot": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & ImageSlotAttributes,
        HTMLElement
      >;
    }
  }
}

export {};
