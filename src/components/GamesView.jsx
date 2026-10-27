import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function GamesView() {
  const games = [
    { id: 1, title: 'Cyber Neon Duel', players: '1v1', desc: 'Batalla rápida de reflejos en arena neón.' },
    { id: 2, title: 'Gothic Puzzler', players: 'Solo / H2H', desc: 'Resuelve acertijos con temática oscura.' }
  ];

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] p-4 space-y-4 overflow-y-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#00ff66] flex items-center gap-2">
          <Gamepad2 size={22} /> LIDA Games H2H
        </h2>
        <span className="text-xs bg-gray-900 border border-gray-800 px-3 py-1 rounded-full text-gray-300">
          Ranked Active
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {games.map(game => (
          <div key={game.id} className="glass-gothic p-4 rounded-xl border border-gray-800 hover:border-[#00ff66] transition-all">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-gray-200">{game.title}</h3>
              <span className="text-xs bg-[#00ff66]/10 text-[#00ff66] px-2 py-0.5 rounded border border-[#00ff66]/30">
                {game.players}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{game.desc}</p>
            <button className="mt-3 w-full py-2 bg-black/60 border border-[#00ff66]/40 text-[#00ff66] text-xs font-semibold rounded-lg hover:bg-[#00ff66] hover:text-black transition-all">
              Jugar Ahora 🎮
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}