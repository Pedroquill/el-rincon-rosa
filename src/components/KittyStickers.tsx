import React from 'react';

export interface StickerDefinition {
  id: string;
  name: string;
  renderSvg: (className?: string) => React.ReactNode;
}

export const KITTY_STICKER_ITEMS: StickerDefinition[] = [
  // 1. Hello Kitty Face with Signature Pink Bow
  {
    id: 'hk-face',
    name: 'Carita Hello Kitty',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 100 90" className={`${className} filter drop-shadow-md select-none`}>
        {/* Die-cut white border */}
        <path
          d="M20,40 C14,24 25,12 36,22 C44,19 56,19 64,22 C75,12 86,24 80,40 C92,54 88,74 72,82 C60,86 40,86 28,82 C12,74 8,54 20,40 Z"
          fill="#ffffff"
          stroke="#382129"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Whiskers Left */}
        <line x1="8" y1="52" x2="22" y2="53" stroke="#382129" strokeWidth="3" strokeLinecap="round" />
        <line x1="6" y1="60" x2="22" y2="59" stroke="#382129" strokeWidth="3" strokeLinecap="round" />
        <line x1="9" y1="68" x2="23" y2="65" stroke="#382129" strokeWidth="3" strokeLinecap="round" />
        {/* Whiskers Right */}
        <line x1="78" y1="53" x2="92" y2="52" stroke="#382129" strokeWidth="3" strokeLinecap="round" />
        <line x1="78" y1="59" x2="94" y2="60" stroke="#382129" strokeWidth="3" strokeLinecap="round" />
        <line x1="77" y1="65" x2="91" y2="68" stroke="#382129" strokeWidth="3" strokeLinecap="round" />
        {/* Eyes */}
        <ellipse cx="36" cy="56" rx="3.5" ry="5" fill="#382129" />
        <ellipse cx="64" cy="56" rx="3.5" ry="5" fill="#382129" />
        {/* Yellow Nose */}
        <ellipse cx="50" cy="63" rx="4" ry="2.8" fill="#facc15" stroke="#382129" strokeWidth="2" />
        {/* Iconic Pink Bow on Left Ear */}
        <g transform="translate(18, 14) rotate(-15)">
          <path
            d="M12,12 C4,4 -2,14 6,20 C-2,26 4,36 12,28 Z"
            fill="#ff69b4"
            stroke="#382129"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M20,12 C28,4 34,14 26,20 C34,26 28,36 20,28 Z"
            fill="#ff69b4"
            stroke="#382129"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Bow knot */}
          <circle cx="16" cy="20" r="5.5" fill="#ff4398" stroke="#382129" strokeWidth="2.5" />
          <circle cx="14.5" cy="18.5" r="1.5" fill="#ffffff" />
        </g>
      </svg>
    ),
  },

  // 2. Giant Hello Kitty Iconic Bow
  {
    id: 'hk-bow',
    name: 'Moño Rosa Clásico',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 100 80" className={`${className} filter drop-shadow-md select-none`}>
        {/* Left wing */}
        <path
          d="M40,40 C15,20 0,45 20,62 C38,72 45,55 45,45 Z"
          fill="#ff69b4"
          stroke="#382129"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Left inner fold */}
        <path d="M25,48 C30,45 35,46 38,48" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Right wing */}
        <path
          d="M60,40 C85,20 100,45 80,62 C62,72 55,55 55,45 Z"
          fill="#ff69b4"
          stroke="#382129"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Right inner fold */}
        <path d="M75,48 C70,45 65,46 62,48" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Central knot */}
        <ellipse cx="50" cy="46" rx="12" ry="11" fill="#ff4398" stroke="#382129" strokeWidth="3.5" />
        <circle cx="46" cy="42" r="3" fill="#ffffff" />
      </svg>
    ),
  },

  // 3. Hello Kitty Strawberry Milk Carton
  {
    id: 'hk-milk',
    name: 'Leche de Fresa Kitty',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 80 100" className={`${className} filter drop-shadow-md select-none`}>
        {/* Carton body */}
        <polygon points="15,35 65,35 65,92 15,92" fill="#ffd1dc" stroke="#382129" strokeWidth="3" strokeLinejoin="round" />
        {/* Carton roof */}
        <polygon points="15,35 40,18 65,35" fill="#ffb6c1" stroke="#382129" strokeWidth="3" strokeLinejoin="round" />
        {/* Top ridge */}
        <polygon points="25,18 55,18 55,10 25,10" fill="#ff69b4" stroke="#382129" strokeWidth="3" strokeLinejoin="round" />
        {/* Strawberry icon */}
        <path d="M40,55 C34,48 46,48 40,55 C32,60 35,72 40,76 C45,72 48,60 40,55 Z" fill="#ff4398" stroke="#382129" strokeWidth="1.8" />
        {/* Mini bow on carton */}
        <circle cx="40" cy="42" r="3" fill="#ff69b4" stroke="#382129" strokeWidth="1.5" />
        <ellipse cx="34" cy="42" rx="4" ry="2.5" fill="#ff69b4" stroke="#382129" strokeWidth="1.5" />
        <ellipse cx="46" cy="42" rx="4" ry="2.5" fill="#ff69b4" stroke="#382129" strokeWidth="1.5" />
        {/* Text 'MILK' */}
        <text x="40" y="87" textAnchor="middle" fontSize="9" fontWeight="900" fill="#382129" fontFamily="sans-serif">
          MILK ♡
        </text>
      </svg>
    ),
  },

  // 4. Hello Kitty Hugging a Sparkling Heart
  {
    id: 'hk-heart',
    name: 'Kitty con Gran Corazón',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 100 100" className={`${className} filter drop-shadow-md select-none`}>
        {/* Heart */}
        <path
          d="M50,42 C40,24 16,30 20,54 C24,72 50,90 50,90 C50,90 76,72 80,54 C84,30 60,24 50,42 Z"
          fill="#ff4d88"
          stroke="#382129"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Heart shine */}
        <path d="M30,42 C30,36 38,34 42,38" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Kitty peeking from top */}
        <path
          d="M32,32 C26,18 35,8 44,16 C50,14 58,14 64,16 C73,8 82,18 76,32 Z"
          fill="#ffffff"
          stroke="#382129"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Eyes */}
        <ellipse cx="46" cy="24" rx="2" ry="3" fill="#382129" />
        <ellipse cx="62" cy="24" rx="2" ry="3" fill="#382129" />
        <ellipse cx="54" cy="28" rx="2.5" ry="1.8" fill="#facc15" stroke="#382129" strokeWidth="1.5" />
        {/* Bow */}
        <circle cx="70" cy="16" r="3" fill="#ff4398" stroke="#382129" strokeWidth="1.5" />
        <ellipse cx="65" cy="16" rx="3.5" ry="2" fill="#ff4398" stroke="#382129" strokeWidth="1.5" />
        <ellipse cx="75" cy="16" rx="3.5" ry="2" fill="#ff4398" stroke="#382129" strokeWidth="1.5" />
        {/* Paws on Heart */}
        <ellipse cx="32" cy="52" rx="5" ry="4" fill="#ffffff" stroke="#382129" strokeWidth="2.5" />
        <ellipse cx="68" cy="52" rx="5" ry="4" fill="#ffffff" stroke="#382129" strokeWidth="2.5" />
      </svg>
    ),
  },

  // 5. Hello Kitty's Red Apple
  {
    id: 'hk-apple',
    name: 'Manzanita de Kitty',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 80 80" className={`${className} filter drop-shadow-md select-none`}>
        {/* Stem */}
        <path d="M40,24 C40,16 46,12 50,10" stroke="#5c3818" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Leaf */}
        <path d="M42,16 C48,12 58,14 56,22 C48,22 44,20 42,16 Z" fill="#84cc16" stroke="#382129" strokeWidth="2" />
        {/* Apple body */}
        <path
          d="M40,26 C30,22 14,28 14,46 C14,64 28,74 40,74 C52,74 66,64 66,46 C66,28 50,22 40,26 Z"
          fill="#ef4444"
          stroke="#382129"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Apple shine */}
        <path d="M24,36 C22,42 22,50 26,56" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Mini Hello Kitty Bow on the Apple */}
        <g transform="translate(42, 28) scale(0.65)">
          <ellipse cx="8" cy="8" rx="8" ry="5" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
          <ellipse cx="24" cy="8" rx="8" ry="5" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
          <circle cx="16" cy="8" r="4" fill="#ff4398" stroke="#382129" strokeWidth="2" />
        </g>
      </svg>
    ),
  },

  // 6. Sweet Strawberry Donut with Cat Ears & Bow
  {
    id: 'hk-donut',
    name: 'Dona Kitty de Fresa',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 90 90" className={`${className} filter drop-shadow-md select-none`}>
        {/* Cat Ears */}
        <polygon points="22,35 15,16 35,24" fill="#ffccd5" stroke="#382129" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="68,35 75,16 55,24" fill="#ffccd5" stroke="#382129" strokeWidth="3" strokeLinejoin="round" />
        {/* Outer Donut */}
        <ellipse cx="45" cy="50" rx="36" ry="32" fill="#fed7aa" stroke="#382129" strokeWidth="3.5" />
        {/* Pink Frosting */}
        <path
          d="M12,48 C14,30 30,22 45,22 C60,22 76,30 78,48 C76,58 72,54 68,62 C64,68 58,58 52,64 C46,70 42,60 36,66 C30,70 24,58 18,66 C14,60 11,54 12,48 Z"
          fill="#ff69b4"
          stroke="#382129"
          strokeWidth="3"
        />
        {/* Inner Donut hole */}
        <ellipse cx="45" cy="48" rx="12" ry="10" fill="#fff5f7" stroke="#382129" strokeWidth="3.5" />
        {/* Bow on right ear */}
        <circle cx="68" cy="22" r="3.5" fill="#ff4398" stroke="#382129" strokeWidth="2" />
        <ellipse cx="62" cy="22" rx="4" ry="2.5" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
        <ellipse cx="74" cy="22" rx="4" ry="2.5" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
        {/* Sprinkles */}
        <line x1="30" y1="34" x2="35" y2="36" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <line x1="55" y1="34" x2="60" y2="33" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
        <line x1="26" y1="46" x2="30" y2="50" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },

  // 7. Kawaii Kitty Band-Aid
  {
    id: 'hk-bandaid',
    name: 'Curita de Amor Kitty',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 100 70" className={`${className} filter drop-shadow-md select-none`}>
        <g transform="rotate(-18 50 35)">
          {/* Main Bandage */}
          <rect x="10" y="20" width="80" height="30" rx="15" fill="#fbcfe8" stroke="#382129" strokeWidth="3.5" />
          {/* Pad */}
          <rect x="35" y="20" width="30" height="30" fill="#ffffff" stroke="#382129" strokeWidth="2.5" />
          {/* Heart on pad */}
          <path d="M50,28 C47,24 41,26 43,31 C45,36 50,42 50,42 C50,42 55,36 57,31 C59,26 53,24 50,28 Z" fill="#ff4398" />
          {/* Pores */}
          <circle cx="22" cy="30" r="1.5" fill="#f472b6" />
          <circle cx="28" cy="35" r="1.5" fill="#f472b6" />
          <circle cx="22" cy="40" r="1.5" fill="#f472b6" />
          <circle cx="78" cy="30" r="1.5" fill="#f472b6" />
          <circle cx="72" cy="35" r="1.5" fill="#f472b6" />
          <circle cx="78" cy="40" r="1.5" fill="#f472b6" />
        </g>
      </svg>
    ),
  },

  // 8. Kitty Paw Pad with Pink Beans
  {
    id: 'hk-paw',
    name: 'Patita Rosa de Kitty',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 80 80" className={`${className} filter drop-shadow-md select-none`}>
        {/* Outer White Paw */}
        <ellipse cx="40" cy="44" rx="34" ry="30" fill="#ffffff" stroke="#382129" strokeWidth="3.5" />
        {/* Main Pad (Bean) */}
        <path
          d="M40,36 C30,36 22,46 25,56 C28,64 36,66 40,66 C44,66 52,64 55,56 C58,46 50,36 40,36 Z"
          fill="#ff69b4"
          stroke="#382129"
          strokeWidth="2.5"
        />
        {/* Toe Beans */}
        <circle cx="22" cy="26" r="6" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
        <circle cx="34" cy="20" r="6.5" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
        <circle cx="46" cy="20" r="6.5" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
        <circle cx="58" cy="26" r="6" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
        {/* Mini bow at bottom */}
        <g transform="translate(32, 60) scale(0.55)">
          <ellipse cx="6" cy="8" rx="7" ry="4" fill="#ff4398" stroke="#382129" strokeWidth="2" />
          <ellipse cx="22" cy="8" rx="7" ry="4" fill="#ff4398" stroke="#382129" strokeWidth="2" />
          <circle cx="14" cy="8" r="3.5" fill="#ffffff" stroke="#382129" strokeWidth="2" />
        </g>
      </svg>
    ),
  },

  // 9. Hello Kitty Cupcake
  {
    id: 'hk-cupcake',
    name: 'Cupcake Hello Kitty',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 80 90" className={`${className} filter drop-shadow-md select-none`}>
        {/* Cup base */}
        <polygon points="20,50 60,50 54,84 26,84" fill="#fbcfe8" stroke="#382129" strokeWidth="3" strokeLinejoin="round" />
        {/* Cup stripes */}
        <line x1="32" y1="52" x2="34" y2="82" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="52" x2="40" y2="82" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
        <line x1="48" y1="52" x2="46" y2="82" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
        {/* Whipped Cream with Kitty ears */}
        <path
          d="M16,52 C12,38 24,28 32,32 C36,24 44,24 48,32 C56,28 68,38 64,52 Z"
          fill="#ffffff"
          stroke="#382129"
          strokeWidth="3"
        />
        {/* Whiskers */}
        <line x1="18" y1="42" x2="26" y2="42" stroke="#382129" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="18" y1="46" x2="26" y2="45" stroke="#382129" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="54" y1="42" x2="62" y2="42" stroke="#382129" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="54" y1="45" x2="62" y2="46" stroke="#382129" strokeWidth="1.8" strokeLinecap="round" />
        {/* Eyes & nose */}
        <ellipse cx="34" cy="42" rx="2" ry="2.5" fill="#382129" />
        <ellipse cx="46" cy="42" rx="2" ry="2.5" fill="#382129" />
        <ellipse cx="40" cy="46" rx="2" ry="1.5" fill="#facc15" stroke="#382129" strokeWidth="1" />
        {/* Bow */}
        <circle cx="56" cy="28" r="3.5" fill="#ff4398" stroke="#382129" strokeWidth="1.5" />
        <ellipse cx="51" cy="28" rx="4" ry="2" fill="#ff69b4" stroke="#382129" strokeWidth="1.5" />
        <ellipse cx="61" cy="28" rx="4" ry="2" fill="#ff69b4" stroke="#382129" strokeWidth="1.5" />
      </svg>
    ),
  },

  // 10. Hello Kitty Sakura Blossom
  {
    id: 'hk-sakura',
    name: 'Flor Sakura con Moño',
    renderSvg: (className = 'w-16 h-16') => (
      <svg viewBox="0 0 90 90" className={`${className} filter drop-shadow-md select-none`}>
        {/* 5 Petals */}
        <g transform="translate(45, 45)">
          {[0, 72, 144, 216, 288].map((angle) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <path
                d="M-12,-16 C-18,-32 -4,-40 0,-34 C4,-40 18,-32 12,-16 Z"
                fill="#ffd1dc"
                stroke="#382129"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              <path d="M0,-16 L0,-26" stroke="#ff85a2" strokeWidth="2" strokeLinecap="round" />
            </g>
          ))}
          {/* Center Bow */}
          <circle cx="0" cy="0" r="5" fill="#ff4398" stroke="#382129" strokeWidth="2.5" />
          <ellipse cx="-8" cy="0" rx="6" ry="4" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
          <ellipse cx="8" cy="0" rx="6" ry="4" fill="#ff69b4" stroke="#382129" strokeWidth="2" />
          <circle cx="-2" cy="-2" r="1.5" fill="#ffffff" />
        </g>
      </svg>
    ),
  },
];
