import React, { useState } from 'react';
import { NameGate } from './components/NameGate';
import { HeaderNav } from './components/HeaderNav';
import { WelcomeCard } from './components/WelcomeCard';
import { CheerGenerator } from './components/CheerGenerator';
import { SecretLetters } from './components/SecretLetters';
import { FeelingsHelper } from './components/FeelingsHelper';
import { StickerCanvas } from './components/StickerCanvas';

export default function App() {
  const [userName, setUserName] = useState<string | null>(() => {
    try {
      return localStorage.getItem('sofia_app_user_name');
    } catch {
      return null;
    }
  });

  // Default to 'inicio' so the big Hello Kitty greeting card is the main centerpiece
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const handleUnlock = (name: string) => {
    setUserName(name);
    try {
      localStorage.setItem('sofia_app_user_name', name);
    } catch {
      // Ignore
    }
  };

  const handleLogout = () => {
    setUserName(null);
    try {
      localStorage.removeItem('sofia_app_user_name');
    } catch {
      // Ignore
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user hasn't entered name, show the custom NameGate
  if (!userName) {
    return <NameGate onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen bg-[#fff5f7] text-[#4a2838] flex flex-col font-sans selection:bg-pink-200 selection:text-pink-900 pb-8">
      {/* Top Navigation Bar with buttons visible at the top */}
      <HeaderNav
        userName={userName}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />

      {/* Main Single-View Container: Perfectly proportioned for mobile without cuts or horizontal overflow */}
      <main className="flex-1 w-full max-w-xl mx-auto px-3 sm:px-4 py-3 sm:py-6">
        
        {/* Tab 0: Inicio - Big Prominent Hello Kitty Welcome Card */}
        {activeSection === 'inicio' && (
          <WelcomeCard
            userName={userName}
            onNavigate={handleNavigate}
          />
        )}

        {/* Tab 1: Mensajes de Ánimo */}
        {activeSection === 'mensajes' && (
          <div className="animate-fadeIn">
            <CheerGenerator userName={userName} />
          </div>
        )}

        {/* Tab 2: Cartitas Secretas */}
        {activeSection === 'cartitas' && (
          <div className="animate-fadeIn">
            <SecretLetters userName={userName} />
          </div>
        )}

        {/* Tab 3: Desahogo & Apoyo */}
        {activeSection === 'sentimientos' && (
          <div className="animate-fadeIn">
            <FeelingsHelper userName={userName} />
          </div>
        )}

        {/* Tab 4: Mural de Stickers */}
        {activeSection === 'stickers' && (
          <div className="animate-fadeIn">
            <StickerCanvas userName={userName} />
          </div>
        )}

      </main>
    </div>
  );
}
