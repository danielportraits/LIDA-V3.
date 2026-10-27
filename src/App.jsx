import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatRoom from './components/ChatRoom';
import ReelsStories from './components/ReelsStories';
import GamesView from './components/GamesView';
import { MessageSquare, Video, Gamepad2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('chats');
  const [currentChat, setCurrentChat] = useState(null);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#0a0a0a] text-gray-100 select-none">
      <header className="flex items-center justify-between px-4 py-3 glass-gothic border-b border-[#00ff66]/20 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-[#00ff66]/10 border border-[#00ff66] flex items-center justify-center neon-glow-box overflow-hidden p-0.5">
            <img src="/logo-yin-yang.svg" alt="LIDA Yin-Yang" className="w-full h-full object-contain filter drop-shadow-[0_0_6px_#00ff66]" />
          </div>
          <h1 className="text-xl font-extrabold tracking-wider text-[#00ff66]">LIDA</h1>
        </div>
        <div className="text-xs text-gray-400 bg-black/40 px-3 py-1 rounded-full border border-gray-800">
          E2EE Active 🔒
        </div>
      </header>

      <main className="flex-1 overflow-hidden relative">
        {currentChat ? (
          <ChatRoom chat={currentChat} onBack={() => setCurrentChat(null)} />
        ) : (
          <>
            {activeTab === 'chats' && <ChatList onSelectChat={setCurrentChat} />}
            {activeTab === 'reels' && <ReelsStories />}
            {activeTab === 'games' && <GamesView />}
          </>
        )}
      </main>

      {!currentChat && (
        <nav className="flex justify-around items-center py-3 glass-gothic border-t border-[#00ff66]/20 z-50">
          <button 
            onClick={() => setActiveTab('chats')}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'chats' ? 'text-[#00ff66]' : 'text-gray-400'}`}
          >
            <MessageSquare size={22} />
            <span className="text-[10px] tracking-wide">Chats</span>
          </button>
          <button 
            onClick={() => setActiveTab('reels')}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'reels' ? 'text-[#00ff66]' : 'text-gray-400'}`}
          >
            <Video size={22} />
            <span className="text-[10px] tracking-wide">Reels & Historias</span>
          </button>
          <button 
            onClick={() => setActiveTab('games')}
            className={`flex flex-col items-center space-y-1 ${activeTab === 'games' ? 'text-[#00ff66]' : 'text-gray-400'}`}
          >
            <Gamepad2 size={22} />
            <span className="text-[10px] tracking-wide">Juegos 1v1</span>
          </button>
        </nav>
      )}
    </div>
  );
}