"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint - 1}px)`;

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const check = () => setIsMobile(media.matches);
    check();
    media.addEventListener("change", check);
    return () => media.removeEventListener("change", check);
  }, [query]);

  return isMobile;
}
