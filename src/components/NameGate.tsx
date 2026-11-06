import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/soundEffects';
import { Heart, Sparkles, ArrowRight, Smile } from 'lucide-react';
import kittyCheeringImg from '../assets/images/kitty_cheering_flowers_1793936426490.jpg';

interface NameGateProps {
  onUnlock: (name: string) => void;
}

export const NameGate: React.FC<NameGateProps> = ({ onUnlock }) => {
  const [inputName, setInputName] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanName = inputName.trim();

    if (!cleanName) {
      setErrorMsg('Por favor escribe tu nombre para abrir la puertita 🐾');
      sounds.playPop();
      return;
    }

    // Check if name is Sofia (case and accent insensitive)
    const normalized = cleanName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (normalized === 'sofia' || normalized === 'sofi') {
      triggerSuccess('Sofía');
    } else {
      sounds.playPop();
      setErrorMsg(`¡Hola ${cleanName}! Este rinconcito secreto con temática rosa y de Hello Kitty fue preparado especialmente con mucho amor para Sofía 🌸.`);
    }
  };

  const handleEnterAsSofia = () => {
    setInputName('Sofía');
    triggerSuccess('Sofía');
  };

  const triggerSuccess = (finalName: string) => {
    setIsSuccess(true);
    setErrorMsg(null);
    sounds.playChime();

    // Trigger sweet confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#ec4899', '#fb7185', '#fbcfe8', '#fed7aa']
    });

    setTimeout(() => {
      onUnlock(finalName);
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-100/60 to-rose-100 flex flex-col items-center justify-center p-3 sm:p-6 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-8 left-6 text-2xl sm:text-3xl opacity-35 select-none animate-float pointer-events-none">🌸</div>
      <div className="absolute top-14 right-8 text-3xl sm:text-4xl opacity-40 select-none animate-float-delayed pointer-events-none">🎀</div>
      <div className="absolute bottom-12 left-8 text-2xl sm:text-3xl opacity-35 select-none animate-float-delayed pointer-events-none">🐱</div>
      <div className="absolute bottom-16 right-8 text-2xl sm:text-3xl opacity-35 select-none animate-float pointer-events-none">🍓</div>

      {/* Main Login Card: responsive for mobile screens */}
      <div className="w-full max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-pink-200/90 shadow-pink-soft text-center relative z-10 mx-auto">
        {/* Kitty illustration / emblem */}
        <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 mb-3">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-pink-300 shadow-sm bg-pink-50 flex items-center justify-center">
            <img 
              src={kittyCheeringImg} 
              alt="Hello Kitty con flores de bienvenida" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-pink-500 text-white p-1.5 rounded-full shadow-md animate-bounce">
            <Heart className="w-3.5 h-3.5 fill-white" />
          </div>
        </div>

        {/* Welcome titles */}
        <span className="text-[10px] uppercase tracking-widest text-pink-600 font-bold inline-block mb-1">
          Un rincón secreto de calma y mimos
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-pink-900 tracking-tight mb-1.5">
          ¡Bienvenida a tu espacio! 🌸
        </h1>
        <p className="text-xs text-pink-700/80 mb-4 leading-relaxed">
          Para abrir la puertita a este mundo de gatitos, Hello Kitty y mensajes llenos de amor, ingresa tu nombre:
        </p>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <div className="relative">
            <input
              type="text"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
                if (errorMsg) setErrorMsg(null);
              }}
              placeholder="Escribe tu nombre aquí..."
              autoFocus
              className="w-full px-4 py-3 pl-10 rounded-full bg-pink-50/80 border-2 border-pink-200 focus:border-pink-500 focus:bg-white text-pink-900 placeholder-pink-400 font-medium text-xs sm:text-sm outline-none transition-all shadow-inner min-h-[44px] focus:outline-hidden focus:ring-2 focus:ring-pink-300"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-pink-400 select-none text-sm">
              🐾
            </div>
          </div>

          <button
            type="submit"
            disabled={isSuccess}
            onClick={() => sounds.playPop()}
            className={`w-full min-h-[44px] py-2.5 px-5 rounded-full font-bold text-white transition-all shadow-sm flex items-center justify-center gap-2 select-none touch-manipulation text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-pink-400 ${
              isSuccess 
                ? 'bg-emerald-500 scale-95' 
                : 'bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 active:scale-98'
            }`}
          >
            {isSuccess ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>¡Abriendo el refugio de Sofía...!</span>
              </>
            ) : (
              <>
                <span>Entrar al rincón rosa</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Error / Non-Sofia prompt */}
        {errorMsg && (
          <div className="mt-3 p-3 bg-rose-50 border border-rose-200 rounded-2xl text-left animate-fadeIn">
            <div className="flex items-start gap-2">
              <span className="text-base leading-none mt-0.5">🎀</span>
              <div className="text-xs text-rose-800 leading-relaxed">
                <p className="mb-1.5">{errorMsg}</p>
                <button
                  type="button"
                  onClick={handleEnterAsSofia}
                  className="font-bold text-pink-600 hover:text-pink-800 underline inline-flex items-center gap-1 min-h-[32px] touch-manipulation focus:outline-hidden"
                >
                  <Smile className="w-3.5 h-3.5" />
                  <span>Soy Sofía (o quiero ver su sorpresa)</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick hint */}
        <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-center gap-1.5 text-xs text-pink-500">
          <span>Pista: Este rincón fue soñado para</span>
          <button 
            type="button" 
            onClick={handleEnterAsSofia}
            className="font-bold text-pink-700 bg-pink-100 hover:bg-pink-200 px-2.5 py-0.5 rounded-full transition-colors inline-flex items-center gap-1 min-h-[28px] touch-manipulation active:scale-95 focus:outline-hidden"
          >
            <span>Sofía</span>
            <span>🎀</span>
          </button>
        </div>
      </div>
    </div>
  );
};
