/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Shield, Users, Lock, Eye, Map as MapIcon, Sun, Crown, Star, Castle, Swords, Flame, X, Compass, Play, UserCircle, Settings, Save } from 'lucide-react';
import { story, levels, categories, characters, mapData } from './data';
import Background from './components/Background';

const iconMap: Record<string, any> = {
  Sun, Crown, Star, Castle, Swords, Shield, Flame
};

function AppHeader({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  return (
    <header className="pt-16 pb-8 px-4 text-center relative">
      <div className="flex justify-center mb-10 w-full max-w-3xl mx-auto">
        <img 
          src="https://ludt.uk/63/asset/dead_hero_title.webp" 
          alt="용사는 죽었다" 
          className="w-full h-auto object-contain drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Navigation */}
      <div className="w-full overflow-hidden">
        <nav className="flex flex-nowrap items-center justify-start md:justify-center gap-3 md:gap-4 w-full max-w-5xl mx-auto overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 px-4 custom-scrollbar touch-pan-x">
          {[
            { id: 'intro', label: '인트로', icon: Play },
            { id: 'story', label: '배경 이야기', icon: BookOpen },
            { id: 'map', label: '제국 지도', icon: MapIcon },
            { id: 'levels', label: '전투력 등급', icon: Shield },
            { id: 'characters', label: '등장인물', icon: Users }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 md:px-6 py-3 font-serif transition-all duration-300 glass-panel whitespace-nowrap shrink-0 ${
                activeTab === tab.id 
                  ? 'text-primary font-bold ring-2 ring-primary shadow-lg shadow-primary/40 scale-105' 
                  : 'text-gray-500 hover:text-gray-800 hover:-translate-y-1 opacity-80 hover:opacity-100'
              }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-primary' : ''}`} />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function TruthSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '아샤') {
      setUnlocked(true);
    } else {
      alert('이름이 틀렸습니다.');
      setInputValue('');
    }
  };

  if (!unlocked) {
    return (
      <section className="glass-panel p-8 md:p-12 rounded-2xl border-l-4 border-l-accent flex flex-col items-center text-center">
        <Lock className="w-8 h-8 text-accent mb-4" />
        <h2 className="text-2xl font-serif text-accent mb-4">감춰진 진실</h2>
        <p className="text-gray-400 text-sm mb-6">스포일러 주의: 마왕의 이름을 입력해야 열람할 수 있습니다.</p>
        <form onSubmit={handleUnlock} className="flex w-full max-w-xs gap-2">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="마왕의 이름"
            className="flex-1 bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-accent"
          />
          <button type="submit" className="bg-accent/20 text-accent border border-accent/50 px-4 py-2 rounded hover:bg-accent/30 transition-colors">
            확인
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="glass-panel p-8 md:p-12 rounded-2xl border-l-4 border-l-accent bg-black/40">
      <h2 className="text-2xl font-serif text-accent mb-6 border-b border-white/10 pb-4">감춰진 진실</h2>
      <p className="text-gray-300 leading-loose whitespace-pre-wrap">{story.truth}</p>
    </section>
  );
}

function CharacterDetail({ char, isUnlocked, onUnlock }: { char: any, isUnlocked: boolean, onUnlock: () => void }) {
  const [inputValue, setInputValue] = useState('');
  const [showAmbition, setShowAmbition] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '아샤') {
      onUnlock();
    } else {
      alert('이름이 틀렸습니다.');
      setInputValue('');
    }
  };

  if (char.isDemonKing && !isUnlocked) {
    return (
      <div className="glass-panel rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px] border-2 border-primary/30">
        <Lock className="w-12 h-12 text-accent mb-4" />
        <h3 className="text-2xl font-serif font-bold text-white mb-2">접근 제한</h3>
        <p className="text-gray-400 text-sm mb-6">스포일러 주의: 마왕의 이름을 입력해야 열람할 수 있습니다.</p>
        <form onSubmit={handleUnlock} className="flex flex-col w-full gap-3">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="마왕의 이름"
            className="bg-black/50 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-primary text-center"
          />
          <button type="submit" className="bg-primary/20 text-primary border border-primary/50 px-4 py-2 rounded hover:bg-primary/30 transition-colors">
            확인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`glass-panel rounded-2xl overflow-hidden flex flex-col border-2 transition-colors ${char.isDead ? 'border-red-600 shadow-lg shadow-red-600/30' : 'border-primary shadow-lg shadow-primary/30'}`}>
      <div className="p-6 border-b border-white/10 text-center bg-black/20 flex flex-col items-center">
        {/* Profile Image in Detail Modal */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-black/50 border border-white/10 mb-6 flex items-center justify-center overflow-hidden shrink-0 shadow-lg">
          {char.imageUrl ? (
            <img 
              src={char.imageUrl} 
              alt={char.name} 
              className={`w-full h-full object-cover ${char.isDead ? 'grayscale opacity-70' : ''}`} 
              referrerPolicy="no-referrer" 
            />
          ) : (
            <Users className="w-16 h-16 text-gray-600" />
          )}
        </div>
        <h3 className="text-3xl font-bold text-white font-serif mb-2">{char.name}</h3>
        <p className="text-sm text-gray-400 mb-4">{char.role}</p>
        
        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-300">
          <span className={`px-3 py-1 rounded-full font-bold border ${char.isDead ? 'opacity-0 border-transparent select-none' : 'bg-primary/20 text-primary border-primary/30'}`}>
            {char.isDead ? '공백' : char.rank}
          </span>
          <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{char.race}</span>
          {char.age !== '불명' && char.age !== '자연사' && char.age !== '사망' && char.age !== '사망 당시 불명' && (
            <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{char.age}</span>
          )}
          <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10">{char.gender}</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-6">
        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1 text-center">성향</h4>
          <p className="text-sm text-gray-300 text-center">{char.alignment}</p>
        </div>

        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2 text-center">특징</h4>
          <p className="text-sm text-gray-400 leading-relaxed text-center whitespace-pre-line">{char.features}</p>
        </div>

        <div className={`pt-4 border-t ${(!char.isSub && char.ambition && !char.isDead) ? 'border-white/5' : 'border-transparent opacity-0 pointer-events-none select-none'} flex flex-col items-center`}>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">야망</h4>
          {(!char.isSub && char.ambition && !char.isDead) && showAmbition ? (
            <p className="text-sm text-primary/90 cursor-pointer text-center min-h-[30px] flex items-center justify-center" onClick={() => setShowAmbition(false)}>
              {char.ambition}
            </p>
          ) : (
            <button 
              onClick={() => setShowAmbition(true)}
              className="flex items-center gap-2 text-xs bg-accent/20 text-accent border border-accent/30 px-3 py-1.5 rounded hover:bg-accent/30 transition-colors min-h-[30px]"
            >
              <Eye className="w-4 h-4" />
              스포일러 주의 (클릭)
            </button>
          )}
        </div>
      </div>

      <div className="bg-black/40 p-5 italic text-sm text-gray-400 text-center border-t border-white/5">
        "{char.quote}"
      </div>
    </div>
  );
}

function CharactersView({ categories, characters, activeCategory, setActiveCategory }: any) {
  const [selectedChar, setSelectedChar] = useState<any>(null);
  const [unlockedDemonKing, setUnlockedDemonKing] = useState(false);
  const filteredCharacters = characters.filter((char: any) => char.categories.includes(activeCategory));

  return (
    <div className="flex flex-col gap-8">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category: string) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setSelectedChar(null);
            }}
            className={`px-5 py-2 text-sm transition-all glass-panel ${
              activeCategory === category
                ? 'text-primary font-bold ring-2 ring-primary shadow-lg shadow-primary/30 scale-105'
                : 'text-gray-500 hover:text-gray-800 hover:-translate-y-1 opacity-80 hover:opacity-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="w-full">
        {/* Character Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCharacters.map((char: any) => {
            const displayName = (char.isDemonKing && !unlockedDemonKing) ? '???' : char.name;
            return (
              <button
                key={char.name}
                onClick={() => setSelectedChar(char)}
                className={`glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-all ${
                  selectedChar?.name === char.name
                    ? 'border-primary shadow-lg shadow-primary/30 bg-primary/10'
                    : 'border-white/10 hover:bg-white/5 hover:border-white/20 hover:-translate-y-1'
                }`}
              >
                {/* Profile Image Placeholder */}
                <div className="w-full aspect-square rounded-xl bg-black/50 border border-white/10 mb-5 flex items-center justify-center overflow-hidden shadow-inner">
                  {(char.isDemonKing && !unlockedDemonKing) ? (
                    <div className="text-5xl font-serif font-bold text-gray-700 select-none">?</div>
                  ) : char.imageUrl ? (
                    <img 
                      src={char.imageUrl} 
                      alt={char.name} 
                      className={`w-full h-full object-cover ${char.isDead ? 'grayscale opacity-60' : ''}`} 
                      referrerPolicy="no-referrer" 
                    />
                  ) : (
                    <Users className="w-16 h-16 text-gray-600" />
                  )}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{displayName}</h3>
                <span className="text-sm text-gray-400 px-3 py-1 bg-black/30 rounded-full border border-white/5">{char.role}</span>
              </button>
            );
          })}
        </div>

        {/* Modal: Character Details */}
        <AnimatePresence>
          {selectedChar && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm"
              onClick={() => setSelectedChar(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                <button
                  onClick={() => setSelectedChar(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-white/10 backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
                <CharacterDetail 
                  char={selectedChar} 
                  isUnlocked={unlockedDemonKing}
                  onUnlock={() => setUnlockedDemonKing(true)}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MapView() {
  const [selectedCity, setSelectedCity] = useState<any>(null);

  const getCityIcon = (id: string) => {
    switch(id) {
      case 'silvaren': return <Crown className="w-5 h-5" />;
      case 'alterion': return <Sun className="w-5 h-5" />;
      case 'helixum': return <Star className="w-5 h-5" />;
      case 'beringel': return <Eye className="w-5 h-5" />;
      case 'hart': return <Castle className="w-5 h-5" />;
      default: return <MapIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Map Area */}
      <div className="relative w-full aspect-square md:aspect-video bg-[#1c1917] border-2 border-[#d2b48c] rounded-2xl overflow-hidden shadow-2xl">
        {/* Tactical UI Background */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(#d2b48c 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        
        {/* Compass Rose / Decorative UI */}
        <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none">
          <Compass className="w-32 h-32 text-[#d2b48c]" />
        </div>
        
        {/* Map Points */}
        {mapData.map(city => (
          <button
            key={city.id}
            onClick={() => setSelectedCity(city)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center z-10"
            style={{ left: `${city.x}%`, top: `${city.y}%` }}
          >
            <div className={`p-2 rounded-full border-2 transition-all duration-300 group-hover:scale-110 shadow-lg relative z-10 ${selectedCity?.id === city.id ? 'bg-primary border-white text-white scale-110' : 'bg-black/60 border-primary text-primary'}`}>
              {getCityIcon(city.id)}
            </div>
            <span className={`absolute px-2 py-1 bg-black/80 border rounded text-xs font-serif whitespace-nowrap transition-colors ${
              city.labelPosition === 'left' ? 'right-full mr-3' : 'top-full mt-2'
            } ${selectedCity?.id === city.id ? 'text-primary border-primary/50 z-20' : 'text-gray-300 border-white/10 group-hover:text-white z-20'}`}>
              {city.name}
            </span>
          </button>
        ))}
      </div>

      {/* Modal: Info Panel Area */}
      <AnimatePresence>
        {selectedCity && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCity(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] glass-panel p-6 rounded-2xl border-t-4 border-t-accent"
            >
              <button
                onClick={() => setSelectedCity(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-white/10 backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6 pr-10">
                <div className="p-3 bg-primary/20 text-primary rounded-lg">
                  {getCityIcon(selectedCity.id)}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">{selectedCity.name}</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">지형 및 기후</h4>
                  <p className="text-gray-300 leading-relaxed text-sm flex items-center gap-2">
                    <Compass className="w-4 h-4 text-gray-400" />
                    {selectedCity.environment}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">개요</h4>
                  <p className="text-gray-300 leading-relaxed text-sm">{selectedCity.overview}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-accent mb-2 uppercase tracking-widest">현재 상황</h4>
                  <p className="text-gray-300 leading-relaxed text-sm bg-accent/10 p-4 rounded-lg border border-accent/20">
                    {selectedCity.event}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-widest">주요 인물</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCity.characters.map((charName: string) => {
                      const char = characters.find(c => c.name === charName);
                      const displayName = char?.isDemonKing ? '마왕' : charName;
                      return (
                        <div key={charName} className="px-3 py-1.5 bg-black/50 border border-white/10 rounded-lg flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${char?.isDemonKing ? 'bg-accent' : 'bg-primary'}`} />
                          <span className="text-xs text-gray-200">{displayName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('intro');
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedLevel, setSelectedLevel] = useState<any>(null);

  return (
    <div className="min-h-screen text-light selection:bg-primary/30 pb-24 relative">
      <Background />
      
      <AppHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 mt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-3xl glass-panel rounded-2xl overflow-hidden border-2 border-primary/20 bg-black/40">
                <div className="flex flex-col w-full">
                  <img 
                    src="https://ludt.uk/63/asset/intro_01.webp" 
                    alt="Intro 01" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://ludt.uk/63/asset/intro_02.webp" 
                    alt="Intro 02" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <section className="glass-panel p-8 md:p-12 rounded-2xl">
                <h2 className="text-2xl font-serif text-primary mb-6 border-b border-white/10 pb-4">프롤로그</h2>
                <p className="text-gray-300 leading-loose whitespace-pre-wrap">{story.prologue}</p>
              </section>

              <section className="glass-panel p-8 md:p-12 rounded-2xl">
                <h2 className="text-2xl font-serif text-primary mb-6 border-b border-white/10 pb-4">마족과 마귀</h2>
                <p className="text-gray-300 leading-loose whitespace-pre-wrap">{story.demons}</p>
              </section>

              <section className="glass-panel p-8 md:p-12 rounded-2xl">
                <h2 className="text-2xl font-serif text-primary mb-6 border-b border-white/10 pb-4">루멘하임 제국</h2>
                <p className="text-gray-300 leading-loose whitespace-pre-wrap">{story.empire}</p>
              </section>

              <TruthSection />
            </motion.div>
          )}

          {activeTab === 'levels' && (
            <motion.div
              key="levels"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="w-full">
                {/* Levels List */}
                <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                  {levels.map((level, idx) => {
                    const Icon = iconMap[level.icon];
                    const isSelected = selectedLevel?.level === level.level;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedLevel(level)}
                        className={`glass-panel p-5 sm:p-6 rounded-2xl flex items-center gap-6 text-left transition-all w-full ${isSelected ? 'bg-primary/20 border-primary shadow-lg shadow-primary/20' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:translate-x-2'}`}
                      >
                        <div className={`p-3 rounded-xl shrink-0 ${isSelected ? 'bg-primary/20' : 'bg-black/30'}`}>
                          <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${isSelected ? 'text-primary' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex flex-col flex-1">
                          <span className={`font-serif text-xl sm:text-2xl mb-1 ${isSelected ? 'text-white font-bold' : 'text-gray-300'}`}>{level.level}</span>
                          <span className="text-sm text-gray-400 line-clamp-1">{level.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                
                {/* Modal: Level Details */}
                <AnimatePresence>
                  {selectedLevel && (
                    <div 
                      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm"
                      onClick={() => setSelectedLevel(null)}
                    >
                      <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] glass-panel p-8 rounded-2xl border-t-4 border-t-primary"
                      >
                        <button
                          onClick={() => setSelectedLevel(null)}
                          className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-white/10 backdrop-blur-md"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        
                        <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6 pr-10">
                          {(() => { const Icon = iconMap[selectedLevel.icon]; return <Icon className="w-10 h-10 text-primary" />; })()}
                          <h3 className="text-3xl font-serif font-bold text-white">{selectedLevel.level}</h3>
                        </div>
                        
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-widest">등급 설명</h4>
                            <p className="text-gray-300 leading-relaxed text-lg">{selectedLevel.desc}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-accent mb-3 uppercase tracking-widest">해당 수준</h4>
                            <p className="text-gray-400 leading-relaxed bg-black/30 p-4 rounded-lg border border-white/5">{selectedLevel.examples}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">해당 인물</h4>
                            <div className="flex flex-wrap gap-3">
                              {characters.filter(c => c.rank === selectedLevel.level && !c.isDead).map(char => (
                                <div key={char.name} className="px-4 py-2 bg-black/50 border border-white/10 rounded-lg flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${char.isDemonKing ? 'bg-accent' : 'bg-primary'}`} />
                                  <span className="text-sm text-gray-200">{char.isDemonKing ? '마왕' : char.name}</span>
                                </div>
                              ))}
                              {characters.filter(c => c.rank === selectedLevel.level && !c.isDead).length === 0 && (
                                <span className="text-gray-500 text-sm italic">현재 알려진 해당 등급의 생존 인물이 없습니다.</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {activeTab === 'characters' && (
            <motion.div
              key="characters"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CharactersView 
                categories={categories} 
                characters={characters} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />
            </motion.div>
          )}

          {activeTab === 'map' && (
            <motion.div
              key="map"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <MapView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
