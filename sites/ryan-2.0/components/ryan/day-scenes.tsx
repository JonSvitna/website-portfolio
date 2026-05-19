// @ts-nocheck
'use client';

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';

/* ================================================================
   DAYLIGHT SCENES — editorial line-art placeholders
   Each scene renders a stylised SVG over a warm parchment gradient.
   ================================================================ */

const SCENES = {
  /* Inner Harbor, sunrise — used in hero + waterfront */
  harbor: (
    <svg viewBox="0 0 200 120" fill="none" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sun-h" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="rgba(255, 222, 165, 0.7)" />
          <stop offset="100%" stopColor="rgba(255, 222, 165, 0)" />
        </linearGradient>
      </defs>
      {/* sun */}
      <circle cx="148" cy="42" r="14" fill="url(#sun-h)" />
      <circle cx="148" cy="42" r="6"  fill="currentColor" opacity="0.55"/>
      {/* skyline */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.7">
        <path d="M0 70 L18 70 L18 56 L30 56 L30 64 L44 64 L44 50 L52 50 L52 62 L66 62 L66 54 L82 54 L82 66 L96 66 L96 58 L110 58 L110 48 L120 48 L120 60 L138 60 L138 52 L156 52 L156 66 L172 66 L172 60 L186 60 L186 68 L200 68" />
        {/* windows hint */}
        <path d="M22 60 L22 66 M26 60 L26 66 M48 56 L48 60 M58 58 L58 64 M70 60 L70 64 M86 60 L86 64 M124 54 L124 60 M142 58 L142 64 M160 60 L160 66" />
      </g>
      {/* horizon */}
      <line x1="0" y1="72" x2="200" y2="72" stroke="currentColor" strokeWidth="0.4" opacity="0.55"/>
      {/* water ripples */}
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.45">
        <path d="M0 82 Q40 80 80 82 T160 82 T200 82" />
        <path d="M0 92 Q60 90 110 92 T200 92" />
        <path d="M0 102 Q40 101 80 102 T160 102 T200 102" />
      </g>
      {/* sun reflection */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.5">
        <line x1="146" y1="75" x2="146" y2="82"/>
        <line x1="148" y1="84" x2="148" y2="90"/>
        <line x1="150" y1="92" x2="150" y2="96"/>
      </g>
      {/* dock posts */}
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.5">
        <line x1="8"  y1="72" x2="8"  y2="84"/>
        <line x1="14" y1="74" x2="14" y2="84"/>
      </g>
    </svg>
  ),

  /* Daytime skyline — for business/board cells */
  cityDay: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.7">
        <path d="M0 80 L0 50 L14 50 L14 80 M22 80 L22 38 L36 38 L36 80 M44 80 L44 56 L60 56 L60 80 M68 80 L68 30 L84 30 L84 80 M92 80 L92 46 L108 46 L108 80 M116 80 L116 52 L128 52 L128 80 M136 80 L136 40 L152 40 L152 80 M160 80 L160 58 L176 58 L176 80 M184 80 L184 48 L200 48 L200 80" />
        {/* window grids */}
        <g opacity="0.6">
          <path d="M4 54 L4 78 M9 54 L9 78 M26 42 L26 78 M31 42 L31 78 M48 60 L48 78 M53 60 L53 78 M72 34 L72 78 M77 34 L77 78 M96 50 L96 78 M101 50 L101 78 M120 56 L120 78 M125 56 L125 78 M140 44 L140 78 M146 44 L146 78 M164 62 L164 78 M170 62 L170 78 M188 52 L188 78 M194 52 L194 78" />
        </g>
      </g>
      <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
      {/* sun */}
      <circle cx="166" cy="22" r="9" stroke="currentColor" strokeWidth="0.5" opacity="0.55" fill="none"/>
      <circle cx="166" cy="22" r="4" fill="currentColor" opacity="0.4"/>
    </svg>
  ),

  /* Airport — terminal + jet */
  airport: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.7">
        {/* control tower */}
        <path d="M148 80 L148 30 L156 30 L156 80" />
        <path d="M144 30 L160 30 L162 24 L142 24 Z" />
        <circle cx="152" cy="22" r="2" fill="currentColor" opacity="0.6"/>
        {/* terminal */}
        <path d="M0 80 L0 64 L40 60 L80 62 L120 60 L140 64 L140 80" />
        <path d="M10 80 L10 70 M22 80 L22 68 M34 80 L34 68 M46 80 L46 68 M58 80 L58 68 M70 80 L70 68 M82 80 L82 68 M94 80 L94 68 M106 80 L106 68 M118 80 L118 68 M130 80 L130 68" />
        {/* runway */}
        <line x1="0" y1="92" x2="200" y2="92" />
        <line x1="0" y1="100" x2="200" y2="100" strokeDasharray="4 4" opacity="0.55"/>
        {/* jet */}
        <g transform="translate(96 36) rotate(-12)">
          <path d="M0 0 L40 0 L48 -2 L54 0 L48 4 L40 4 L0 4 Z" fill="currentColor" opacity="0.55" stroke="none"/>
          <path d="M22 0 L26 -10 L32 -10 L34 0" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.5"/>
          <path d="M22 4 L26 14 L32 14 L34 4" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.4"/>
          {/* contrail */}
          <line x1="-30" y1="2" x2="-2" y2="2" stroke="currentColor" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 3"/>
        </g>
        {/* sun */}
        <circle cx="34" cy="22" r="7" stroke="currentColor" strokeWidth="0.5" opacity="0.55"/>
      </g>
    </svg>
  ),

  /* Wedding — floral arch */
  wedding: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.7" fill="none">
        {/* arch */}
        <path d="M40 100 L40 50 Q40 28 70 22 L130 22 Q160 28 160 50 L160 100" />
        {/* aisle */}
        <path d="M60 100 L80 70 M140 100 L120 70" opacity="0.4"/>
        {/* flowers on arch */}
        <g opacity="0.55">
          <circle cx="42" cy="34" r="3"/>
          <circle cx="48" cy="28" r="2.5"/>
          <circle cx="52" cy="36" r="2"/>
          <circle cx="60" cy="24" r="3"/>
          <circle cx="68" cy="22" r="2.5"/>
          <circle cx="74" cy="26" r="2"/>
          <circle cx="158" cy="34" r="3"/>
          <circle cx="152" cy="28" r="2.5"/>
          <circle cx="148" cy="36" r="2"/>
          <circle cx="140" cy="24" r="3"/>
          <circle cx="132" cy="22" r="2.5"/>
          <circle cx="126" cy="26" r="2"/>
          <circle cx="100" cy="22" r="3"/>
          <circle cx="92" cy="24" r="2.5"/>
          <circle cx="108" cy="24" r="2.5"/>
        </g>
        {/* horizon */}
        <line x1="0" y1="100" x2="200" y2="100"/>
        {/* sun */}
        <circle cx="100" cy="60" r="5" opacity="0.5" fill="currentColor" stroke="none"/>
      </g>
    </svg>
  ),

  /* Brunch — table with umbrella */
  brunch: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.7" fill="none">
        {/* umbrella */}
        <path d="M40 50 Q100 18 160 50" />
        <line x1="100" y1="34" x2="100" y2="80"/>
        <path d="M40 50 Q60 56 80 50 Q100 56 120 50 Q140 56 160 50" opacity="0.5"/>
        <line x1="40" y1="50" x2="44" y2="58" opacity="0.5"/>
        <line x1="160" y1="50" x2="156" y2="58" opacity="0.5"/>
        {/* table */}
        <ellipse cx="100" cy="80" rx="50" ry="6"/>
        <line x1="98" y1="86" x2="98" y2="104"/>
        <line x1="102" y1="86" x2="102" y2="104"/>
        <ellipse cx="100" cy="104" rx="14" ry="3" opacity="0.5"/>
        {/* glasses & plates */}
        <circle cx="72" cy="78" r="4"/>
        <circle cx="72" cy="78" r="2" opacity="0.5"/>
        <ellipse cx="100" cy="78" rx="10" ry="2.5"/>
        <ellipse cx="100" cy="78" rx="6" ry="1.5" opacity="0.5"/>
        <path d="M126 76 L126 70 L130 70 L130 76 Q130 80 128 80 Q126 80 126 76 Z"/>
        {/* sun */}
        <circle cx="170" cy="22" r="7" opacity="0.55"/>
      </g>
    </svg>
  ),

  /* Garden / family — leaves */
  garden: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.65" fill="none">
        {/* horizon */}
        <line x1="0" y1="80" x2="200" y2="80"/>
        {/* sun */}
        <circle cx="100" cy="48" r="9" opacity="0.55"/>
        {/* tree silhouettes */}
        <g opacity="0.6">
          <path d="M30 80 L30 60 Q22 56 24 50 Q16 48 22 42 Q24 36 32 38 Q34 32 40 36 Q46 34 46 42 Q52 46 46 52 Q50 58 42 60 L42 80 Z" fill="currentColor" opacity="0.45" stroke="none"/>
          <path d="M160 80 L160 64 Q150 62 152 54 Q144 50 152 44 Q156 38 164 42 Q168 36 174 40 Q180 40 180 48 Q186 52 180 58 Q184 64 174 64 L174 80 Z" fill="currentColor" opacity="0.45" stroke="none"/>
        </g>
        {/* lawn lines */}
        <path d="M0 92 Q50 90 100 92 T200 92" opacity="0.35"/>
        <path d="M0 102 Q60 101 120 102 T200 102" opacity="0.3"/>
        {/* leaves frame */}
        <g opacity="0.5">
          <path d="M4 16 Q14 8 24 14 Q22 24 12 22 Q4 22 4 16 Z" fill="currentColor" stroke="none"/>
          <path d="M180 12 Q190 4 198 10 Q196 22 188 20 Q180 18 180 12 Z" fill="currentColor" stroke="none"/>
        </g>
      </g>
    </svg>
  ),

  /* Boutique / errands — storefront awning */
  boutique: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.7" fill="none">
        {/* storefront */}
        <rect x="40" y="36" width="120" height="64" />
        {/* awning */}
        <path d="M30 50 L170 50 L160 36 L40 36 Z" />
        <path d="M40 50 L48 36 M54 50 L60 36 M68 50 L72 36 M82 50 L84 36 M96 50 L96 36 M110 50 L108 36 M124 50 L120 36 M138 50 L132 36 M152 50 L144 36" opacity="0.55"/>
        {/* door */}
        <rect x="92" y="64" width="16" height="36"/>
        <circle cx="104" cy="82" r="0.8" fill="currentColor"/>
        {/* display windows */}
        <rect x="50" y="64" width="32" height="32" opacity="0.5"/>
        <rect x="118" y="64" width="32" height="32" opacity="0.5"/>
        {/* mannequin hints */}
        <circle cx="66" cy="74" r="2" opacity="0.55"/>
        <path d="M66 78 L66 92" opacity="0.55"/>
        <circle cx="134" cy="74" r="2" opacity="0.55"/>
        <path d="M134 78 L134 92" opacity="0.55"/>
        {/* sign */}
        <line x1="84" y1="44" x2="116" y2="44" strokeWidth="0.4" opacity="0.6"/>
        {/* sun */}
        <circle cx="180" cy="22" r="6" opacity="0.55"/>
      </g>
    </svg>
  ),

  /* Hotel — porte cochère + doorman */
  hotel: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.7" fill="none">
        {/* hotel facade */}
        <path d="M20 100 L20 28 L180 28 L180 100" />
        <path d="M40 100 L40 28 M60 100 L60 28 M80 100 L80 28 M120 100 L120 28 M140 100 L140 28 M160 100 L160 28" opacity="0.45"/>
        {/* window rows */}
        <g opacity="0.55">
          <path d="M28 40 L52 40 M68 40 L88 40 M112 40 L132 40 M148 40 L172 40 M28 54 L52 54 M68 54 L88 54 M112 54 L132 54 M148 54 L172 54 M28 68 L52 68 M68 68 L88 68 M112 68 L132 68 M148 68 L172 68" />
        </g>
        {/* porte cochere */}
        <path d="M70 100 L70 78 Q70 70 80 70 L120 70 Q130 70 130 78 L130 100" />
        <line x1="62" y1="78" x2="138" y2="78"/>
        <line x1="60" y1="80" x2="140" y2="80" opacity="0.5"/>
        {/* doorman */}
        <circle cx="96" cy="88" r="2.5"/>
        <path d="M96 91 L96 98 M93 92 L93 96 M99 92 L99 96"/>
        {/* sign */}
        <rect x="86" y="60" width="28" height="6" opacity="0.55"/>
        {/* sun */}
        <circle cx="174" cy="14" r="6" opacity="0.5"/>
      </g>
    </svg>
  ),

  /* Corporate — building glass curtain */
  corporate: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.7" fill="none">
        {/* main tower */}
        <path d="M50 100 L50 14 L150 14 L150 100" />
        {/* window grid */}
        <g opacity="0.55">
          <path d="M50 24 L150 24 M50 34 L150 34 M50 44 L150 44 M50 54 L150 54 M50 64 L150 64 M50 74 L150 74 M50 84 L150 84 M50 94 L150 94" />
          <path d="M62 14 L62 100 M74 14 L74 100 M86 14 L86 100 M98 14 L98 100 M114 14 L114 100 M126 14 L126 100 M138 14 L138 100" />
        </g>
        {/* lit windows */}
        <g fill="currentColor" opacity="0.5" stroke="none">
          <rect x="63" y="36"  width="10" height="6" />
          <rect x="87" y="56"  width="10" height="6" />
          <rect x="115" y="46" width="10" height="6" />
          <rect x="127" y="76" width="10" height="6" />
          <rect x="75"  y="26" width="10" height="6" />
        </g>
        {/* adjacent shorter */}
        <path d="M14 100 L14 46 L42 46 L42 100" opacity="0.6"/>
        <path d="M158 100 L158 38 L188 38 L188 100" opacity="0.6"/>
        {/* sun */}
        <circle cx="100" cy="22" r="0" />
      </g>
    </svg>
  ),

  /* Pier / brunch circuit — promenade */
  pier: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.7" fill="none">
        {/* sun + horizon */}
        <line x1="0" y1="56" x2="200" y2="56"/>
        <circle cx="100" cy="40" r="10" opacity="0.55"/>
        {/* pier */}
        <path d="M0 80 L200 80" />
        <path d="M0 82 L200 82" opacity="0.6"/>
        <g opacity="0.6">
          <line x1="20" y1="82" x2="20" y2="98"/>
          <line x1="40" y1="82" x2="40" y2="98"/>
          <line x1="60" y1="82" x2="60" y2="98"/>
          <line x1="80" y1="82" x2="80" y2="98"/>
          <line x1="100" y1="82" x2="100" y2="98"/>
          <line x1="120" y1="82" x2="120" y2="98"/>
          <line x1="140" y1="82" x2="140" y2="98"/>
          <line x1="160" y1="82" x2="160" y2="98"/>
          <line x1="180" y1="82" x2="180" y2="98"/>
        </g>
        {/* lampposts */}
        <g opacity="0.6">
          <line x1="34" y1="62" x2="34" y2="80"/>
          <circle cx="34" cy="60" r="1.5" fill="currentColor"/>
          <line x1="166" y1="62" x2="166" y2="80"/>
          <circle cx="166" cy="60" r="1.5" fill="currentColor"/>
        </g>
        {/* water */}
        <path d="M0 100 Q50 98 100 100 T200 100" opacity="0.45"/>
        <path d="M0 108 Q60 106 120 108 T200 108" opacity="0.4"/>
      </g>
    </svg>
  ),

  /* BMW side silhouette in daylight (Fleet) */
  bmwSide: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.7" fill="none">
        {/* horizon hint */}
        <line x1="0" y1="76" x2="200" y2="76" opacity="0.45"/>
        {/* car body */}
        <path d="M14 80 Q20 70 32 68 L60 60 Q70 52 88 50 L130 50 Q146 52 156 60 L182 64 Q190 66 192 76 Q192 84 184 84 L168 84 Q166 92 158 92 Q150 92 148 84 L66 84 Q64 92 56 92 Q48 92 46 84 L22 84 Q14 84 14 80 Z" fill="currentColor" opacity="0.4" stroke="none"/>
        <path d="M14 80 Q20 70 32 68 L60 60 Q70 52 88 50 L130 50 Q146 52 156 60 L182 64 Q190 66 192 76 Q192 84 184 84 L14 84 Q14 84 14 80 Z" />
        {/* greenhouse */}
        <path d="M70 60 L84 52 L130 52 L146 60 Z" opacity="0.5"/>
        <line x1="100" y1="52" x2="100" y2="60" opacity="0.45"/>
        {/* wheels */}
        <circle cx="56" cy="86" r="8"/>
        <circle cx="56" cy="86" r="4" opacity="0.5"/>
        <circle cx="158" cy="86" r="8"/>
        <circle cx="158" cy="86" r="4" opacity="0.5"/>
        {/* shadow */}
        <ellipse cx="108" cy="100" rx="80" ry="3" opacity="0.3" fill="currentColor" stroke="none"/>
      </g>
    </svg>
  ),

  /* BMW cabin daylight — seat + window */
  bmwCabin: (
    <svg viewBox="0 0 200 120" fill="none">
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.7" fill="none">
        {/* window */}
        <path d="M14 16 L186 16 L186 56 L14 56 Z" />
        <path d="M14 56 L186 56" opacity="0.6"/>
        {/* outside hint */}
        <path d="M14 44 Q60 40 100 44 T186 44" opacity="0.45"/>
        <circle cx="146" cy="30" r="6" opacity="0.55"/>
        {/* seat back */}
        <path d="M30 100 L30 64 Q30 60 34 60 L94 60 Q98 60 98 64 L98 100 Z" fill="currentColor" opacity="0.45" stroke="none"/>
        <path d="M30 100 L30 64 Q30 60 34 60 L94 60 Q98 60 98 64 L98 100" />
        {/* headrest */}
        <path d="M44 60 L44 52 Q44 48 50 48 L78 48 Q84 48 84 52 L84 60" />
        {/* seat seam */}
        <line x1="64" y1="60" x2="64" y2="100" opacity="0.6"/>
        {/* console */}
        <path d="M108 100 L108 70 L172 70 L172 100" />
        <line x1="108" y1="80" x2="172" y2="80" opacity="0.55"/>
        <rect x="124" y="84" width="32" height="10" opacity="0.5"/>
        {/* ceiling line */}
        <line x1="0" y1="16" x2="14" y2="20" />
        <line x1="200" y1="16" x2="186" y2="20" />
      </g>
    </svg>
  ),

  /* Final CTA — golden afternoon city + car */
  goldenHour: (
    <svg viewBox="0 0 200 120" fill="none">
      <defs>
        <linearGradient id="sun-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="rgba(255, 222, 165, 0.8)" />
          <stop offset="100%" stopColor="rgba(255, 222, 165, 0)" />
        </linearGradient>
      </defs>
      {/* big sun */}
      <circle cx="100" cy="50" r="22" fill="url(#sun-g)" />
      <circle cx="100" cy="50" r="10" fill="currentColor" opacity="0.55"/>
      {/* skyline */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.7">
        <path d="M0 78 L10 78 L10 70 L20 70 L20 76 L30 76 L30 62 L42 62 L42 72 L54 72 L54 66 L70 66 L70 56 L82 56 L82 68 L94 68 L94 60 L106 60 L106 52 L118 52 L118 64 L130 64 L130 58 L146 58 L146 70 L160 70 L160 64 L172 64 L172 72 L184 72 L184 68 L200 68" />
      </g>
      <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="0.4" opacity="0.55"/>
      {/* reflection */}
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.4">
        <path d="M0 90 Q40 88 80 90 T160 90 T200 90"/>
        <path d="M0 100 Q60 98 110 100 T200 100"/>
      </g>
      {/* small car */}
      <g transform="translate(82 104)" stroke="currentColor" strokeWidth="0.5" opacity="0.65" fill="none">
        <path d="M0 6 L4 0 L26 0 L30 6 Z" fill="currentColor" opacity="0.55" stroke="none"/>
        <circle cx="6" cy="6" r="2"/>
        <circle cx="24" cy="6" r="2"/>
      </g>
    </svg>
  ),
};

/* Scene component */
function Scene({ kind, tone, label, sublabel, withHorizon = false, className = '' }) {
  return (
    <div className={'scene' + (tone ? ' scene-' + tone : '') + (className ? ' ' + className : '')}>
      {withHorizon && <div className="scene-horizon" style={{ top: '64%' }}></div>}
      <div className="scene-art">{SCENES[kind]}</div>
      {(label || sublabel) && (
        <div className="scene-caption">
          {label && <span className="scene-label">{label}</span>}
          {sublabel && <span className="scene-sub">{sublabel}</span>}
        </div>
      )}
    </div>
  );
}

export { Scene, SCENES };
