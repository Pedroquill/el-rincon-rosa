import React, { useState } from 'react';
import kittyCheeringImg from '../assets/images/kitty_cheering_flowers_1793936426490.jpg';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Heart, Mail, MessageCircleHeart, Palette, Sparkles, Cat, X } from 'lucide-react';

interface WelcomeCardProps {
  userName: string;
  onNavigate: (sectionId: string) => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ userName, onNavigate }) => {
  const [hugModalOpen, setHugModalOpen] = useState(false);
  const [purrToast, setPurrToast] = useState(false);

  // Quick Action 1: Virtual Hug
  const handleVirtualHug = () => {
    sounds.playChime();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#fda4af', '#fbcfe8'],
    });
    setHugModalOpen(true);
  };

  // Quick Action 2: Cat Mimo & Purr
  const handleCatMimo = () => {
    sounds.playPurr();
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([40, 80, 40]);
      } catch {
        // Ignore vibration errors
      }
    }
    setPurrToast(true);
    setTimeout(() => {
      setPurrToast(false);
    }, 3500);
  };

  // Quick Action 3: Read Secret Letter
  const handleReadLetter = () => {
    sounds.playPop();
    onNavigate('cartitas');
  };

  const navShortcuts = [
    {
      id: 'mensajes',
      label: 'Mensajes de Ánimo',
      desc: 'Palabras dulces y apoyo',
      icon: Heart,
      bg: 'bg-rose-50 hover:bg-rose-100 text-rose-900 border-rose-200',
      badgeBg: 'bg-rose-200/70 text-rose-700',
    },
    {
      id: 'cartitas',
      label: 'Cartitas Secretas',
      desc: 'Sobres de Hello Kitty',
      icon: Mail,
      bg: 'bg-pink-50 hover:bg-pink-100 text-pink-900 border-pink-200',
      badgeBg: 'bg-pink-200/70 text-pink-700',
    },
    {
      id: 'sentimientos',
      label: 'Desahogo & Apoyo',
      desc: 'Cuéntale a Kitty tu día',
      icon: MessageCircleHeart,
      bg: 'bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-900 border-fuchsia-200',
      badgeBg: 'bg-fuchsia-200/70 text-fuchsia-700',
    },
    {
      id: 'stickers',
      label: 'Mural de Stickers',
      desc: 'Pizarra interactiva Kitty',
      icon: Palette,
      bg: 'bg-purple-50 hover:bg-purple-100 text-purple-900 border-purple-200',
      badgeBg: 'bg-purple-200/70 text-purple-700',
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-4 animate-fadeIn pb-4">
      {/* Central Hero Card: Perfectly adapted to all mobile phone screens */}
      <div className="bg-gradient-to-b from-white via-pink-50/60 to-rose-50/70 rounded-3xl p-4 sm:p-6 border-2 border-pink-200/90 shadow-pink-soft text-center relative overflow-hidden">
        
        {/* Subtle decorative floating icons */}
        <div className="absolute top-3 left-3 text-xl opacity-30 select-none animate-float pointer-events-none">🌸</div>
        <div className="absolute top-3 right-3 text-xl opacity-35 select-none animate-float-delayed pointer-events-none">🎀</div>

        {/* Hello Kitty Centerpiece Image: Sized cleanly for mobile viewports */}
        <div className="relative mx-auto w-32 h-32 sm:w-44 sm:h-44 mb-3 sm:mb-4">
          <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-pink-300 shadow-md bg-white flex items-center justify-center transform transition-transform active:scale-95 duration-200">
            <img
              src={kittyCheeringImg}
              alt={`Hello Kitty con flores para ${userName}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-pink-500 text-white p-2 rounded-full shadow-md animate-bounce">
            <Heart className="w-4 h-4 fill-white" />
          </div>
        </div>

        {/* Kicker badge */}
        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/90 border border-pink-200 text-[11px] font-bold uppercase tracking-wider text-pink-700 mb-2">
          <span>🌸</span>
          <span>PARA TI CON TODO EL CORAZÓN</span>
          <span>🌸</span>
        </div>

        {/* Big Greeting Headline */}
        <h1 className="text-2xl sm:text-3xl font-black text-pink-950 tracking-tight leading-snug mb-1.5">
          ¡Hola, querida {userName}!
        </h1>

        {/* Warm uplifting message */}
        <p className="text-xs sm:text-sm text-pink-800/90 font-medium leading-relaxed max-w-xs sm:max-w-sm mx-auto mb-4">
          Hoy es un buen día para recordar lo especial, inteligente y valiosa que eres.
        </p>

        {/* Quick Comfort Actions: The 3 buttons requested by user */}
        <div className="flex flex-col gap-2 w-full max-w-xs mx-auto mb-4">
          {/* Action 1: Virtual Hug */}
          <button
            onClick={handleVirtualHug}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-97 transition-all flex items-center justify-center gap-2 touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-400"
          >
            <Heart className="w-4 h-4 fill-white text-white shrink-0" />
            <span>Dame un abrazo virtual</span>
          </button>

          {/* Action 2: Cat Mimo & Purr */}
          <button
            onClick={handleCatMimo}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-full bg-white hover:bg-pink-50/80 text-pink-900 border-2 border-pink-300 font-bold text-xs sm:text-sm shadow-xs active:scale-97 transition-all flex items-center justify-center gap-2 touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-400"
          >
            <Cat className="w-4 h-4 text-pink-600 shrink-0" />
            <span>Mimo y ronroneo felino</span>
          </button>

          {/* Action 3: Secret Letter */}
          <button
            onClick={handleReadLetter}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-full bg-white hover:bg-pink-50/80 text-pink-900 border-2 border-pink-300 font-bold text-xs sm:text-sm shadow-xs active:scale-97 transition-all flex items-center justify-center gap-2 touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-400"
          >
            <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
            <span>Leer una cartita secreta</span>
          </button>
        </div>

        {/* Section Shortcuts Grid (2x2 on mobile) */}
        <div className="pt-3 border-t border-pink-200/70">
          <span className="text-[11px] font-bold text-pink-600 uppercase tracking-wider block mb-2.5">
            Explora tus rinconcitos:
          </span>

          <div className="grid grid-cols-2 gap-2 text-left">
            {navShortcuts.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sounds.playPop();
                    onNavigate(item.id);
                  }}
                  className={`p-2.5 rounded-2xl border transition-all active:scale-96 flex flex-col justify-between min-h-[72px] touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-400 ${item.bg}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className={`p-1.5 rounded-xl ${item.badgeBg}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] opacity-70 font-bold">→</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold leading-tight">
                      {item.label}
                    </h3>
                    <p className="text-[10px] opacity-75 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Virtual Hug Modal */}
      {hugModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pink-950/40 backdrop-blur-xs animate-fadeIn"
          onClick={() => setHugModalOpen(false)}
        >
          <div
            className="relative w-full max-w-sm bg-white rounded-3xl p-5 border-3 border-pink-300 shadow-2xl text-center animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setHugModalOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full text-pink-400 hover:text-pink-700 hover:bg-pink-100 flex items-center justify-center transition-colors touch-manipulation"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-pink-100 flex items-center justify-center text-3xl animate-bounce">
              🤗
            </div>

            <h3 className="text-lg font-black text-pink-950 mb-1">
              ¡Abrazo virtual enviado! 💖
            </h3>

            <p className="text-xs text-pink-800 leading-relaxed mb-4">
              Hello Kitty te manda un achuchón gigante lleno de suavidad, olor a fresa y cariño sincero. Eres una persona extraordinaria, {userName}. Nunca olvides lo especial que eres.
            </p>

            <button
              onClick={() => {
                sounds.playPop();
                setHugModalOpen(false);
              }}
              className="w-full min-h-[42px] px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs shadow-xs active:scale-95 transition-all touch-manipulation"
            >
              ¡Gracias, Kitty! 🌸
            </button>
          </div>
        </div>
      )}

      {/* Cat Purr Toast */}
      {purrToast && (
        <div className="fixed bottom-6 left-4 right-4 z-50 flex justify-center animate-fadeIn pointer-events-none">
          <div className="bg-pink-900/95 text-white text-xs px-4 py-2.5 rounded-full shadow-lg border border-pink-300/40 flex items-center gap-2">
            <span className="text-base animate-pulse">🐱</span>
            <span className="font-medium">Purrr... Gatito acurrucado ronroneando para darte paz 🐾</span>
          </div>
        </div>
      )}

    </div>
  );
};
