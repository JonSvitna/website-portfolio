// @ts-nocheck
'use client';

import React from 'react';
import { SITE } from './site';

export function BrandMark({ size = 46, className = '' }) {
  return (
    <span
      className={`brand-lockup-mark ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="square">
        <g className="brand-lockup-stripes" strokeWidth="1.3">
          <line x1="2" y1="14" x2="46" y2="14" />
          <line x1="2" y1="24" x2="46" y2="24" />
          <line x1="2" y1="34" x2="46" y2="34" />
        </g>
        <g className="brand-lockup-r" strokeWidth="2.2" fill="none" strokeLinejoin="miter">
          <path d="M11 8 L11 40" />
          <path d="M11 8 L26 8 Q34 8 34 16 Q34 24 26 24 L11 24" />
          <path d="M22 24 L34 40" />
        </g>
      </svg>
    </span>
  );
}

export default function BrandLockup({
  size = 46,
  variant = 'light',
  href = '#',
  className = '',
  onClick = undefined,
}) {
  return (
    <a
      href={href}
      className={`brand-lockup brand-lockup--${variant} ${className}`.trim()}
      onClick={onClick}
    >
      <BrandMark size={size} />
      <span className="brand-lockup-text">
        <span className="brand-lockup-name">{SITE.brand}</span>
        <span className="brand-lockup-role">{SITE.driverTitle}</span>
      </span>
    </a>
  );
}
