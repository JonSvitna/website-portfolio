// @ts-nocheck
"use client";

import Script from "next/script";
import { useState } from "react";
import RyanApp from "./RyanApp";
import "../../app/ryan.css";

export default function RyanSite() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Script
        src="/image-slot.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
      {ready ? <RyanApp /> : null}
    </>
  );
}
