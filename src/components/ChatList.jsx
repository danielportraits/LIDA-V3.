import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function ChatList({ onSelectChat }) {
  const chats = [
    { id: 1, name: 'Vortex_Goth', lastMessage: 'Te envié la foto en HD 📸', time: '10:42', unread: 2, online: true },
    { id: 2, name: 'Cyber_Samurai', lastMessage: '¿Jugamos un 1v1 en los arcades?', time: 'Ayer', unread: 0, online: false },
    { id: 3, name: 'Neon_Queen', lastMessage: 'Audio (0:14) 🎙️', time: 'Ayer', unread: 0, online: true }
  ];

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]">
      <div className="p-3 space-y-2 bg-[#121212]/50 border-b border-gray-900">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar chats, mensajes o @username..." 
            className="w-full bg-black/60 border border-gray-800 rounded-xl pl-10 pr-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#00ff66]"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-1 text-xs">
          {['Todos', 'No leídos', 'Grupos', 'Destacados'].map((tab, idx) => (
            <button key={idx} className="px-3 py-1 rounded-full bg-black border border-gray-800 text-gray-300 hover:border-[#00ff66] whitespace-nowrap">
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-gray-900/50">
        {chats.map(chat => (
          <div 
            key={chat.id} 
            onClick={() => onSelectChat(chat)}
            className="flex items-center px-4 py-3 hover:bg-[#161616] cursor-pointer transition-colors relative"
          >
            <div className="relative mr-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 flex items-center justify-center font-bold text-[#00ff66] border border-gray-700">
                {chat.name[0]}
              </div>
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#00ff66] border-2 border-[#0a0a0a] rounded-full"></span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-sm text-gray-200 truncate">{chat.name}</h3>
                <span className="text-[10px] text-gray-500">{chat.time}</span>
              </div>
              <p className="text-xs text-gray-400 truncate mt-0.5">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <div className="ml-2 w-5 h-5 rounded-full bg-[#00ff66] text-black text-[10px] font-bold flex items-center justify-center">
                {chat.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}