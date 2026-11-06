import React, { useState } from 'react';
import { KITTY_STICKER_ITEMS } from './KittyStickers';
import { sounds } from '../utils/soundEffects';
import { Trash2, RotateCcw } from 'lucide-react';

interface PlacedSticker {
  id: string;
  stickerId: string;
  x: number; // percentage
  y: number; // percentage
  rotation: number;
}

interface StickerCanvasProps {
  userName: string;
}

const DEFAULT_PLACED: PlacedSticker[] = [
  { id: '1', stickerId: 'hk-face', x: 22, y: 25, rotation: -6 },
  { id: '2', stickerId: 'hk-bow', x: 74, y: 22, rotation: 10 },
  { id: '3', stickerId: 'hk-milk', x: 24, y: 68, rotation: 5 },
  { id: '4', stickerId: 'hk-heart', x: 75, y: 68, rotation: -8 },
  { id: '5', stickerId: 'hk-donut', x: 50, y: 72, rotation: 4 },
];

export const StickerCanvas: React.FC<StickerCanvasProps> = ({ userName }) => {
  const [placed, setPlaced] = useState<PlacedSticker[]>(() => {
    try {
      const saved = localStorage.getItem('sofia_kitty_stickers_placed');
      return saved ? JSON.parse(saved) : DEFAULT_PLACED;
    } catch {
      return DEFAULT_PLACED;
    }
  });

  const handleAddSticker = (stickerId: string) => {
    sounds.playPop();
    const randomX = Math.floor(Math.random() * 55) + 20;
    const randomY = Math.floor(Math.random() * 50) + 20;
    const randomRot = Math.floor(Math.random() * 28) - 14;

    const newSticker: PlacedSticker = {
      id: Date.now().toString() + Math.random(),
      stickerId,
      x: randomX,
      y: randomY,
      rotation: randomRot,
    };

    const updated = [...placed, newSticker];
    setPlaced(updated);

    try {
      localStorage.setItem('sofia_kitty_stickers_placed', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleClear = () => {
    sounds.playPop();
    setPlaced([]);
    localStorage.removeItem('sofia_kitty_stickers_placed');
  };

  const handleReset = () => {
    sounds.playPop();
    setPlaced(DEFAULT_PLACED);
    localStorage.setItem('sofia_kitty_stickers_placed', JSON.stringify(DEFAULT_PLACED));
  };

  const handleRemoveSticker = (id: string, e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    sounds.playPop();
    const updated = placed.filter((s) => s.id !== id);
    setPlaced(updated);
    localStorage.setItem('sofia_kitty_stickers_placed', JSON.stringify(updated));
  };

  const handleRotateSticker = (id: string, e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    sounds.playPop();
    const updated = placed.map((s) => {
      if (s.id === id) {
        return { ...s, rotation: (s.rotation + 30) % 360 };
      }
      return s;
    });
    setPlaced(updated);
    localStorage.setItem('sofia_kitty_stickers_placed', JSON.stringify(updated));
  };

  const getStickerRenderer = (stickerId: string) => {
    const found = KITTY_STICKER_ITEMS.find((item) => item.id === stickerId);
    return found ? found.renderSvg : KITTY_STICKER_ITEMS[0].renderSvg;
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-3 pb-4">
      {/* Header */}
      <div className="text-center space-y-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600">
          Rincón Creativo Hello Kitty 🎀
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-pink-950">
          Mural de Stickers de {userName}
        </h2>
        <p className="text-xs text-pink-700/80 max-w-xs mx-auto">
          Toca un sticker para pegarlo. En la pizarra, tócalo para girarlo o usa × para quitarlo.
        </p>
      </div>

      {/* Stickers Palette */}
      <div className="bg-white rounded-2xl p-2.5 border-2 border-pink-200 shadow-xs">
        <div className="grid grid-cols-5 gap-1.5">
          {KITTY_STICKER_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleAddSticker(item.id)}
              title={item.name}
              className="flex flex-col items-center justify-center p-1 rounded-xl bg-pink-50/70 hover:bg-pink-100 active:scale-95 transition-all touch-manipulation min-h-[48px] focus:outline-hidden focus:ring-2 focus:ring-pink-300"
            >
              <div className="w-7 h-7 flex items-center justify-center">
                {item.renderSvg('w-6 h-6')}
              </div>
              <span className="text-[8px] font-bold text-pink-800 line-clamp-1 mt-0.5">
                {item.name.replace('Hello Kitty', 'Kitty').replace('de Kitty', '')}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Canvas Board: proportioned aspect ratio, no cuts, no overflow */}
      <div className="relative w-full aspect-[4/3] min-h-[240px] max-h-[360px] bg-gradient-to-br from-pink-100/90 via-rose-50/70 to-pink-50 rounded-3xl border-3 border-pink-300 shadow-pink-soft overflow-hidden p-2 select-none touch-pan-y">
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#f472b6_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-25 pointer-events-none"></div>

        {/* Central message */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 rounded-2xl p-2.5 border border-pink-200 shadow-xs max-w-[180px] text-center pointer-events-none z-0">
          <div className="w-5 h-5 mx-auto mb-0.5 flex items-center justify-center">
            {KITTY_STICKER_ITEMS[1].renderSvg('w-4 h-4')}
          </div>
          <h4 className="text-[11px] font-extrabold text-pink-900 leading-tight">
            Pizarra de {userName}
          </h4>
          <p className="text-[9px] text-pink-700/80 leading-tight mt-0.5">
            "Todo florece con amor y paciencia."
          </p>
        </div>

        {/* Placed Stickers */}
        {placed.map((item) => {
          const renderer = getStickerRenderer(item.stickerId);
          return (
            <div
              key={item.id}
              onClick={(e) => handleRotateSticker(item.id, e)}
              className="group absolute cursor-pointer transition-transform active:scale-110 z-10 touch-manipulation"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
              }}
            >
              <div className="relative">
                {renderer('w-12 h-12')}
                
                {/* Delete button */}
                <button
                  onClick={(e) => handleRemoveSticker(item.id, e)}
                  title="Quitar"
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-md touch-manipulation focus:outline-hidden"
                >
                  ×
                </button>
              </div>
            </div>
          );
        })}

        {/* Bottom controls */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 z-20">
          <button
            onClick={handleReset}
            className="px-2 py-1 rounded-full bg-white/95 text-[10px] font-bold text-pink-700 border border-pink-200 shadow-xs flex items-center gap-1 min-h-[30px] touch-manipulation active:scale-95 focus:outline-hidden"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Restablecer</span>
          </button>
          <button
            onClick={handleClear}
            className="px-2 py-1 rounded-full bg-white/95 text-[10px] font-bold text-rose-600 border border-pink-200 shadow-xs flex items-center gap-1 min-h-[30px] touch-manipulation active:scale-95 focus:outline-hidden"
          >
            <Trash2 className="w-3 h-3" />
            <span>Limpiar</span>
          </button>
        </div>

      </div>
    </div>
  );
};
