import React, { useState } from 'react';
import { ArrowLeft, Send, Mic, Paperclip, Pin, MoreVertical } from 'lucide-react';

export default function ChatRoom({ chat, onBack }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'them', text: '¡Bienvenido a LIDA! Todo está cifrado E2EE 🔒', time: '10:40', type: 'text' },
    { id: 2, sender: 'me', text: 'Excelente, probando notas de voz y calidad HD.', time: '10:41', type: 'text', pinned: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'me', text: inputText, time: '10:43', type: 'text' }]);
    setInputText('');
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] relative">
      <div className="flex items-center justify-between px-4 py-2.5 glass-gothic border-b border-gray-800 z-10">
        <div className="flex items-center space-x-3">
          <button onClick={onBack} className="text-[#00ff66] hover:opacity-80">
            <ArrowLeft size={22} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-[#00ff66] font-bold border border-[#00ff66]/30">
              {chat.name[0]}
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-100">{chat.name}</h2>
              <span className="text-[10px] text-[#00ff66] flex items-center gap-1">● En línea</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-300">
          <button className="hover:text-[#00ff66]"><MoreVertical size={20} /></button>
        </div>
      </div>

      <div className="bg-[#121212] border-b border-[#00ff66]/20 px-4 py-1.5 flex items-center justify-between text-xs text-gray-300">
        <div className="flex items-center space-x-2 truncate">
          <Pin size={14} className="text-[#00ff66] rotate-45 flex-shrink-0" />
          <span className="truncate">Excelente, probando notas de voz y calidad HD.</span>
        </div>
        <span className="text-[10px] text-[#00ff66] flex-shrink-0 ml-2">Fijado</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm glass-gothic relative ${
              msg.sender === 'me' ? 'bg-[#00ff66]/10 border-[#00ff66]/30 text-white' : 'bg-gray-900 border-gray-800 text-gray-200'
            }`}>
              {msg.pinned && (
                <div className="absolute -top-2 -right-1 bg-[#00ff66] text-black rounded-full p-0.5">
                  <Pin size={10} />
                </div>
              )}
              <p>{msg.text}</p>
              <div className="flex justify-end items-center space-x-1 mt-1">
                <span className="text-[9px] text-gray-400">{msg.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 glass-gothic border-t border-gray-800 flex items-center space-x-2">
        <button className="text-gray-400 hover:text-[#00ff66] p-2"><Paperclip size={20} /></button>
        <input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe un mensaje seguro..." 
          className="flex-1 bg-black/60 border border-gray-800 rounded-full px-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#00ff66]"
        />
        {inputText ? (
          <button onClick={handleSend} className="p-2 bg-[#00ff66] text-black rounded-full hover:opacity-90 neon-glow-box">
            <Send size={18} />
          </button>
        ) : (
          <button 
            onMouseDown={() => setIsRecording(true)}
            onMouseUp={() => setIsRecording(false)}
            className={`p-2 rounded-full ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-800 text-[#00ff66] hover:bg-gray-700'}`}
            title="Mantén presionado para nota de voz"
          >
            <Mic size={20} />
          </button>
        )}
      </div>
    </div>
  );
}