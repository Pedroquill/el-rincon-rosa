import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/soundEffects';
import { Volume2, VolumeX, Music, LogOut } from 'lucide-react';

interface HeaderNavProps {
  userName: string;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onLogout: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  userName,
  activeSection,
  onNavigate,
  onLogout,
}) => {
  const [isMuted, setIsMuted] = useState(sounds.isMuted);
  const [isMusicPlaying, setIsMusicPlaying] = useState(sounds.isAmbientPlaying);

  useEffect(() => {
    setIsMuted(sounds.isMuted);
    setIsMusicPlaying(sounds.isAmbientPlaying);
  }, []);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) sounds.playPop();
  };

  const handleToggleMusic = () => {
    sounds.playPop();
    const playing = sounds.toggleAmbientMusic((state) => setIsMusicPlaying(state));
    setIsMusicPlaying(playing);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', shortLabel: 'Inicio', icon: '🌸' },
    { id: 'mensajes', label: 'Mensajes', shortLabel: 'Mensajes', icon: '💌' },
    { id: 'cartitas', label: 'Cartitas', shortLabel: 'Cartitas', icon: '✉️' },
    { id: 'sentimientos', label: 'Desahogo', shortLabel: 'Desahogo', icon: '🐱' },
    { id: 'stickers', label: 'Stickers', shortLabel: 'Stickers', icon: '🎀' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-pink-200/80 shadow-xs transition-all">
      {/* Tier 1: Brand & Audio / User Controls */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 h-12 sm:h-14 flex items-center justify-between gap-2">
        {/* Brand Wordmark */}
        <button
          onClick={() => {
            sounds.playPop();
            onNavigate('inicio');
          }}
          className="text-xs sm:text-base font-extrabold tracking-tight text-pink-900 hover:text-pink-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 min-h-[40px] focus:outline-hidden"
        >
          <span className="text-base sm:text-lg">🌸</span>
          <span className="truncate max-w-[150px] xs:max-w-none">
            Rinconcito de {userName}
          </span>
        </button>

        {/* Desktop inline nav buttons */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  sounds.playPop();
                  onNavigate(item.id);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 min-h-[36px] touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-xs'
                    : 'text-pink-800 hover:bg-pink-100/70 hover:text-pink-950'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </nav>

        {/* Audio controls & logout */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <button
            onClick={handleToggleMusic}
            title={isMusicPlaying ? 'Pausar música relajante Lofi' : 'Música relajante Lofi'}
            className={`min-h-[34px] px-2 sm:px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 transition-all active:scale-95 touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-300 ${
              isMusicPlaying
                ? 'bg-pink-500 text-white shadow-xs'
                : 'bg-pink-100 text-pink-800 hover:bg-pink-200'
            }`}
          >
            <Music className={`w-3 h-3 ${isMusicPlaying ? 'animate-bounce' : ''}`} />
            <span className="whitespace-nowrap shrink-0">
              {isMusicPlaying ? 'Lofi' : 'Música'}
            </span>
          </button>

          <button
            onClick={handleToggleSound}
            title={isMuted ? 'Activar efectos de sonido' : 'Silenciar'}
            className="w-8 h-8 rounded-full text-pink-700 bg-pink-100 hover:bg-pink-200 active:scale-95 transition-all flex items-center justify-center touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-300"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-pink-400" /> : <Volume2 className="w-3.5 h-3.5 text-pink-600" />}
          </button>

          <button
            onClick={() => {
              sounds.playPop();
              onLogout();
            }}
            title="Cambiar de nombre"
            className="w-8 h-8 rounded-full text-pink-500 hover:text-pink-800 hover:bg-pink-100/60 active:scale-95 transition-all flex items-center justify-center touch-manipulation focus:outline-hidden focus:ring-2 focus:ring-pink-300"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tier 2: Top Button Bar - ALWAYS VISIBLE AT THE TOP ON MOBILE */}
      <div className="md:hidden border-t border-pink-100 bg-pink-50/70 px-2 py-1.5 overflow-x-auto scrollbar-none flex items-center gap-1.5 justify-start xs:justify-center">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                sounds.playPop();
                onNavigate(item.id);
              }}
              className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all whitespace-nowrap shrink-0 min-h-[36px] flex items-center gap-1 touch-manipulation active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-pink-300 ${
                isActive
                  ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-xs'
                  : 'bg-white text-pink-800 border border-pink-200/90 hover:bg-pink-100/80'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
