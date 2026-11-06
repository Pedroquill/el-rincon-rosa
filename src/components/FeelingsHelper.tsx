import React, { useState } from 'react';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface FeelingsHelperProps {
  userName: string;
}

const PRESET_FEELINGS = [
  { id: 'cansada', label: 'Cansada 💤' },
  { id: 'insegura', label: 'Insegura 🥺' },
  { id: 'abrumada', label: 'Abrumada 📚' },
  { id: 'triste', label: 'Sensible 🌧️' },
  { id: 'apapacho', label: 'Mimos 🐱' },
];

const LOCAL_COMFORT_RESPONSES: Record<string, { title: string; body: string; tip: string }> = {
  cansada: {
    title: 'Apaga el mundo un ratito, Sofi 🌙',
    body: 'El cansancio que sientes no es flojera ni falta de ganas: tu cuerpo y tu mente te están pidiendo una pausa con mucho amor. Has dado mucho de ti últimamente. Por hoy, ponte la pijama más suave que tengas, apaga las alarmas mentales y déjate cuidar. No tienes que rendir al 100% todos los días.',
    tip: 'Pausa recomendada: Un té calentito con leche y miel mientras descansas.'
  },
  insegura: {
    title: 'Duda de tus dudas, no de tu capacidad ✨',
    body: 'Es totalmente normal sentir ese cosquilleo de inseguridad cuando las cosas importan, Sofía. Pero quiero que recuerdes algo fundamental: la versión de ti en la que dudas es solo un espejismo del miedo. Eres inteligente, sensible, detallista y tienes una luz única. Lo que hoy te asusta es solo la puerta a tu próximo logro.',
    tip: 'Recuerda: Si pudiste superar las tormentas del pasado, puedes con cualquier cosa que venga.'
  },
  abrumada: {
    title: 'Un solo paso a la vez, princesa 🌸',
    body: 'Cuando todo se junta parece una montaña imposible de escalar. Pero la vida no se vive toda de golpe. ¿Qué es lo único que tienes enfrente en los próximos 15 minutos? Concéntrate solo en eso. Lo demás puede esperar su turno pacientemente. No cargues con el mañana cuando hoy apenas estás respirando.',
    tip: 'Acción salvavidas: Escribe las 3 cosas más urgentes y olvídate por completo del resto hasta mañana.'
  },
  triste: {
    title: 'Aquí estoy contigo en los días nublados 🌧️',
    body: 'Abraza tu tristeza sin juzgarla, Sofía. A veces el corazón necesita vaciarse de lo que pesa para poder volver a llenarse de flores. No tienes que fingir una sonrisa si no te nace. Tienes derecho a estar triste y a ser cuidada con ternura. Llora si lo necesitas, que las lágrimas riegan tu jardín interior.',
    tip: 'Mimo especial: Un abrazo apretado con olor a fresa y la certeza de que este momento también pasará.'
  },
  apapacho: {
    title: '¡Cargamento de amor para ti! 🐾',
    body: 'Vente para acá. Imagínate envuelta en una cobijita rosa súper esponjosa con Hello Kitty sosteniendo un tazón de fresas y tres gatitos acurrucados a tu lado dándote calorcito. Eres infinitamente querida, Sofía. Mereces todo el amor, la ternura y la suavidad de este mundo.',
    tip: 'Regalo de hoy: Mírate al espejo y regálate una caricia en la mejilla de mi parte.'
  }
};

export const FeelingsHelper: React.FC<FeelingsHelperProps> = ({ userName }) => {
  const [selectedPreset, setSelectedPreset] = useState<string>('cansada');
  const [customInput, setCustomInput] = useState<string>('');
  const [response, setResponse] = useState<{ title: string; body: string; tip: string } | null>(
    LOCAL_COMFORT_RESPONSES.cansada
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectPreset = (presetId: string) => {
    sounds.playPop();
    setSelectedPreset(presetId);
    setResponse(LOCAL_COMFORT_RESPONSES[presetId] || LOCAL_COMFORT_RESPONSES.cansada);
  };

  const handleGenerateCustom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    sounds.playChime();
    setIsLoading(true);

    const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || 
                   (import.meta as unknown as { env?: { VITE_GEMINI_API_KEY?: string } })?.env?.VITE_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `Eres una compañera cariñosa, dulce y reconfortante (estilo Hello Kitty y gatito amoroso).
Escribe un mensaje de apoyo y amor incondicional para Sofía, respondiendo a lo que siente hoy: "${customInput}".
Requisitos:
- Háblale directamente a Sofía con ternura, empatía y calidez.
- Sé genuina, reconfortante y dulce.
- Incluye 1 consejo suave y práctico para hoy.
- Formato: Devuelve un JSON estrictamente válido con los campos: "title" (título corto y tierno con emoji), "body" (2 párrafos emotivos y empáticos), "tip" (1 consejo cariñoso).`;

        const res = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
          }
        });

        if (res.text) {
          const parsed = JSON.parse(res.text);
          setResponse({
            title: parsed.title || `Todo estará bien, ${userName} 🌸`,
            body: parsed.body || `Aquí estamos contigo siempre. Respira y confía en ti.`,
            tip: parsed.tip || `Tómate 5 minutos para descansar tus ojos y respirar.`
          });
          sounds.playChime();
          confetti({
            particleCount: 35,
            spread: 55,
            origin: { y: 0.6 },
            colors: ['#f472b6', '#fda4af', '#fce7f3']
          });
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.error('Gemini call error:', err);
      }
    }

    // Fallback instant comfort engine
    setTimeout(() => {
      setResponse({
        title: `Te escucho con todo mi corazón, ${userName} 💖`,
        body: `Sé que a veces poner en palabras lo que sentimos cuesta trabajo, pero es el primer paso para aliviar el pecho. Quiero que sepas que nada de lo que estás sintiendo te hace débil ni defectuosa. Eres un ser humano con un corazón enorme y sensible, y es perfectamente natural tener días donde las cosas se sienten cuesta arriba.`,
        tip: `Pausa de emergencia: Pon una mano en tu corazón, inhala hondo tres veces y repite: "Soy fuerte, soy valiosa, y no tengo que resolver todo hoy".`
      });
      sounds.playChime();
      setIsLoading(false);
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#fbcfe8']
      });
    }, 500);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-3.5 pb-4">
      {/* Header */}
      <div className="text-center space-y-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600">
          Confidencias con Kitty 🐱
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-pink-950">
          ¿Cómo te sientes hoy, Sofi?
        </h2>
        <p className="text-xs text-pink-700/80 max-w-xs mx-auto">
          Toca una emoción o escribe lo que tienes en el corazón para recibir unas palabras de amor.
        </p>
      </div>

      {/* Preset feelings pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none px-0.5">
        {PRESET_FEELINGS.map((preset) => {
          const isSelected = selectedPreset === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 min-h-[36px] touch-manipulation active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-pink-300 ${
                isSelected
                  ? 'bg-pink-500 text-white shadow-xs'
                  : 'bg-white border border-pink-200/90 text-pink-800 hover:bg-pink-50'
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Custom input */}
      <form onSubmit={handleGenerateCustom} className="flex gap-2">
        <input
          type="text"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          placeholder="O escribe qué te preocupa hoy..."
          className="flex-1 px-3.5 py-2.5 rounded-full bg-white border-2 border-pink-200 focus:border-pink-500 text-pink-900 placeholder-pink-400 font-medium text-xs sm:text-sm outline-none transition-all shadow-inner min-h-[44px]"
        />
        <button
          type="submit"
          disabled={isLoading || !customInput.trim()}
          className="px-4 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 disabled:opacity-50 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs min-h-[44px] touch-manipulation active:scale-95 shrink-0 focus:outline-hidden focus:ring-2 focus:ring-pink-300"
        >
          {isLoading ? (
            <span>...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Enviar</span>
            </>
          )}
        </button>
      </form>

      {/* Response Card */}
      {response && (
        <div className="bg-white rounded-3xl p-4 sm:p-6 border-2 border-pink-200 shadow-pink-soft space-y-3 animate-fadeIn">
          <div className="flex items-center gap-2 border-b border-pink-100 pb-2">
            <span className="text-xl p-1 bg-pink-100 rounded-xl">🐱</span>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-pink-500 font-bold">
                Para Sofía
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-pink-950">
                {response.title}
              </h4>
            </div>
          </div>

          <p className="text-xs text-pink-900/90 leading-relaxed font-normal">
            {response.body}
          </p>

          <div className="p-2.5 bg-pink-50/80 rounded-2xl border border-pink-200/70 flex items-start gap-2">
            <span className="text-sm shrink-0 mt-0.5">🍓</span>
            <div className="text-xs text-pink-800 font-medium leading-relaxed">
              <span className="font-bold text-pink-950 block mb-0.5">Mimo sugerido:</span>
              {response.tip}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
