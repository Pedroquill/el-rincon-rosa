import React, { useState } from 'react';
import { SECRET_LETTERS, SecretLetter } from '../data/cheerContent';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Mail, MailOpen, X, Heart, Sparkles } from 'lucide-react';

interface SecretLettersProps {
  userName: string;
}

export const SecretLetters: React.FC<SecretLettersProps> = ({ userName }) => {
  const [selectedLetter, setSelectedLetter] = useState<SecretLetter | null>(null);
  const [openedLetterIds, setOpenedLetterIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sofia_opened_letters');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleOpenLetter = (letter: SecretLetter) => {
    sounds.playChime();
    setSelectedLetter(letter);

    if (!openedLetterIds.includes(letter.id)) {
      const updated = [...openedLetterIds, letter.id];
      setOpenedLetterIds(updated);
      try {
        localStorage.setItem('sofia_opened_letters', JSON.stringify(updated));
      } catch {
        // Ignore
      }
    }

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fda4af', '#fbcfe8', '#fed7aa']
    });
  };

  const handleClose = () => {
    sounds.playPop();
    setSelectedLetter(null);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-3.5 pb-4">
      {/* View Header */}
      <div className="text-center space-y-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600">
          Buzón Postal de Hello Kitty 💌
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-pink-950">
          Cartitas Secretas para {userName}
        </h2>
        <p className="text-xs text-pink-700/80 max-w-xs mx-auto">
          Toca cualquier sobre para abrir su mensaje de consuelo y amor.
        </p>
      </div>

      {/* Envelopes Grid: 2 columns on mobile */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {SECRET_LETTERS.map((letter) => {
          const isOpened = openedLetterIds.includes(letter.id);
          return (
            <button
              key={letter.id}
              onClick={() => handleOpenLetter(letter)}
              className="group text-left bg-white rounded-2xl p-3 border-2 border-pink-200 hover:border-pink-300 shadow-xs active:scale-96 transition-all flex flex-col justify-between min-h-[130px] touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-300"
            >
              <div className="flex items-center justify-between w-full mb-1.5">
                <span className="text-xl p-1 bg-pink-100/70 rounded-xl">
                  {letter.sealIcon}
                </span>
                <span className="text-[10px] font-semibold text-pink-500 flex items-center gap-1">
                  {isOpened ? (
                    <MailOpen className="w-3.5 h-3.5 text-pink-400" />
                  ) : (
                    <Mail className="w-3.5 h-3.5 text-pink-600" />
                  )}
                </span>
              </div>

              <div>
                <h3 className="text-xs font-bold text-pink-950 group-hover:text-pink-600 transition-colors line-clamp-2 leading-snug">
                  {letter.title}
                </h3>
              </div>

              <div className="pt-1.5 border-t border-pink-100 flex items-center justify-between text-[10px] font-bold text-pink-600 w-full mt-1.5">
                <span>{isOpened ? 'Volver a leer' : 'Abrir carta'}</span>
                <span>→</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modal for Reading Opened Letter */}
      {selectedLetter && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 bg-pink-950/40 backdrop-blur-xs animate-fadeIn"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-sm bg-[#fffdf9] rounded-3xl p-5 border-3 border-pink-200 shadow-2xl overflow-y-auto max-h-[85vh] text-left animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full text-pink-400 hover:text-pink-700 hover:bg-pink-100 flex items-center justify-center transition-colors touch-manipulation focus:outline-hidden"
              title="Cerrar carta"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Letter Header Stamp */}
            <div className="flex items-center gap-2 border-b-2 border-dashed border-pink-200 pb-2.5 mb-3 pr-7">
              <span className="text-2xl p-1 bg-pink-100 rounded-xl shrink-0">
                {selectedLetter.sealIcon}
              </span>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-pink-500 font-bold">
                  Correo Postal del Corazón
                </span>
                <h4 className="text-sm font-extrabold text-pink-950 leading-tight">
                  {selectedLetter.title}
                </h4>
              </div>
            </div>

            {/* Letter Content */}
            <div className="space-y-2.5 text-xs text-pink-900/90 leading-relaxed font-normal">
              {selectedLetter.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-4 pt-2.5 border-t border-pink-200/80 text-right">
              <p className="text-xs font-bold text-pink-700 italic">
                {selectedLetter.signature}
              </p>
              <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-pink-500">
                <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                <span>Dedicada a {userName}</span>
              </div>
            </div>

            {/* Bottom modal button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleClose}
                className="w-full min-h-[42px] px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95 touch-manipulation focus:outline-hidden"
              >
                <Sparkles className="w-4 h-4" />
                <span>Guardar cartita en mi corazón</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
