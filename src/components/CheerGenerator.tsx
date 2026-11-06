import React, { useState } from 'react';
import { CHEER_MESSAGES, CheerMessage } from '../data/cheerContent';
import { sounds } from '../utils/soundEffects';
import { Copy, Check, Star, RefreshCw } from 'lucide-react';

interface CheerGeneratorProps {
  userName: string;
}

export const CheerGenerator: React.FC<CheerGeneratorProps> = ({ userName }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sofia_favorite_messages');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);

  // Filter messages based on category
  const filteredMessages = CHEER_MESSAGES.filter((msg) => {
    if (showFavoritesOnly) {
      return favorites.includes(msg.id);
    }
    if (selectedCategory === 'all') return true;
    return msg.category === selectedCategory;
  });

  const currentMessage: CheerMessage | undefined = filteredMessages[currentIndex % Math.max(1, filteredMessages.length)];

  const handleNextMessage = () => {
    sounds.playChime();
    setCurrentIndex((prev) => (prev + 1) % filteredMessages.length);
    setCopied(false);
  };

  const handleCopy = () => {
    if (!currentMessage) return;
    sounds.playPop();
    const fullText = `"${currentMessage.message}" — Con cariño para ${userName} 🌸`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleFavorite = () => {
    if (!currentMessage) return;
    sounds.playPop();
    const msgId = currentMessage.id;
    let updated: string[];
    if (favorites.includes(msgId)) {
      updated = favorites.filter((id) => id !== msgId);
    } else {
      updated = [...favorites, msgId];
    }
    setFavorites(updated);
    try {
      localStorage.setItem('sofia_favorite_messages', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'dias_dificiles', label: 'Días difíciles' },
    { id: 'fuerza', label: 'Fuerza & Valentía' },
    { id: 'mimos', label: 'Mimos felinos' },
    { id: 'autoamor', label: 'Autoamor' },
    { id: 'sonrisas', label: 'Sonrisas' },
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-3.5 pb-4">
      {/* Category Pills Scroller */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none px-0.5">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id && !showFavoritesOnly;
          return (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playPop();
                setShowFavoritesOnly(false);
                setSelectedCategory(cat.id);
                setCurrentIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all whitespace-nowrap shrink-0 min-h-[36px] touch-manipulation active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-pink-300 ${
                isActive
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'bg-white border border-pink-200/90 text-pink-800 hover:bg-pink-50'
              }`}
            >
              {cat.label}
            </button>
          );
        })}

        {/* Favorites button */}
        <button
          onClick={() => {
            sounds.playPop();
            setShowFavoritesOnly(!showFavoritesOnly);
            setCurrentIndex(0);
          }}
          className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1 whitespace-nowrap shrink-0 min-h-[36px] touch-manipulation active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-pink-300 ${
            showFavoritesOnly
              ? 'bg-amber-400 text-amber-950 shadow-xs'
              : 'bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100'
          }`}
        >
          <Star className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-amber-950' : 'text-amber-600'}`} />
          <span>Favoritos ({favorites.length})</span>
        </button>
      </div>

      {/* Message Card: beautifully proportioned */}
      {filteredMessages.length === 0 ? (
        <div className="text-center p-6 bg-white rounded-3xl border border-pink-200 shadow-pink-soft">
          <span className="text-3xl block mb-2">⭐</span>
          <p className="text-xs sm:text-sm text-pink-800 font-semibold mb-1">No tienes favoritos en esta lista.</p>
          <button
            onClick={() => setShowFavoritesOnly(false)}
            className="text-xs font-bold text-pink-600 underline min-h-[44px] flex items-center justify-center mx-auto focus:outline-hidden"
          >
            Ver todos los mensajes
          </button>
        </div>
      ) : currentMessage && (
        <div className="bg-white rounded-3xl p-4 sm:p-6 border-2 border-pink-200/80 shadow-pink-soft space-y-3.5">
          
          {/* Card Header: Category + Action Icons */}
          <div className="flex items-center justify-between border-b border-pink-100 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentMessage.kittyIcon}</span>
              <span className="text-[11px] font-bold text-pink-700 uppercase tracking-wider">
                {currentMessage.categoryLabel}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleToggleFavorite}
                title="Favorito"
                className={`w-8 h-8 rounded-full transition-all flex items-center justify-center touch-manipulation active:scale-90 focus:outline-hidden focus:ring-2 focus:ring-pink-300 ${
                  favorites.includes(currentMessage.id)
                    ? 'bg-amber-100 text-amber-600'
                    : 'text-pink-400 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                <Star className={`w-4 h-4 ${favorites.includes(currentMessage.id) ? 'fill-amber-500' : ''}`} />
              </button>

              <button
                onClick={handleCopy}
                title="Copiar"
                className="w-8 h-8 rounded-full text-pink-400 hover:text-pink-600 hover:bg-pink-50 transition-all flex items-center justify-center touch-manipulation active:scale-90 focus:outline-hidden focus:ring-2 focus:ring-pink-300"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Title & Prose */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-pink-950 leading-snug">
              {currentMessage.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-pink-900/90 leading-relaxed font-normal">
              {currentMessage.message}
            </p>

            {currentMessage.quote && (
              <div className="pt-1.5 text-xs font-medium italic text-pink-700/80 flex items-center gap-1.5">
                <span>🌸</span>
                <span>"{currentMessage.quote}"</span>
              </div>
            )}
          </div>

          {/* Bottom Button Bar */}
          <div className="pt-2 border-t border-pink-100 flex flex-col gap-2 items-center">
            <button
              onClick={handleNextMessage}
              className="w-full min-h-[44px] px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 active:scale-98 touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-400"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Siguiente mensaje de ánimo</span>
            </button>

            <span className="text-[11px] text-pink-500 font-medium">
              Mensaje {((currentIndex % filteredMessages.length) + 1)} de {filteredMessages.length}
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
