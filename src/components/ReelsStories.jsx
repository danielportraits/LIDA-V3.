import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ReelsStories() {
  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] items-center justify-center p-4 text-center">
      <div className="w-16 h-16 rounded-full bg-[#00ff66]/10 border border-[#00ff66] flex items-center justify-center neon-glow-box mb-4">
        <Sparkles className="text-[#00ff66]" size={32} />
      </div>
      <h2 className="text-lg font-bold text-gray-100">Estudio Reels & Filtros WebGL</h2>
      <p className="text-xs text-gray-400 max-w-xs mt-1">
        Cámara en tiempo real con filtros estilo Instagram, historias de 24 horas y reproducción snap-to-page 9:16.
      </p>
      <button className="mt-6 px-6 py-2.5 bg-[#00ff66] text-black font-semibold rounded-full text-sm neon-glow-box hover:opacity-90">
        Abrir Cámara con Filtros 📷
      </button>
    </div>
  );
}