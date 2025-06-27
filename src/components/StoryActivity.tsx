
import React, { useState } from 'react';
import { Play, Pause, RotateCcw, BookOpen, Volume2 } from 'lucide-react';

interface StoryPart {
  id: number;
  text: {
    pt: string;
    waiwai: string;
  };
  image: string;
  audioNarration: {
    pt: string;
    waiwai: string;
  };
}

interface StoryActivityProps {
  story: {
    title: {
      pt: string;
      waiwai: string;
    };
    parts: StoryPart[];
    moralLesson: {
      pt: string;
      waiwai: string;
    };
  };
  language: 'pt' | 'waiwai';
  onComplete: () => void;
  onBack: () => void;
}

const StoryActivity: React.FC<StoryActivityProps> = ({ story, language, onComplete, onBack }) => {
  const [currentPart, setCurrentPart] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMoral, setShowMoral] = useState(false);

  const translations = {
    pt: {
      story: 'História',
      part: 'Parte',
      of: 'de',
      next: 'Próxima',
      previous: 'Anterior',
      listen: 'Ouvir',
      pause: 'Pausar',
      showMoral: 'Ver Ensinamento',
      moral: 'Ensinamento da História:',
      complete: 'Concluir História',
      back: 'Voltar'
    },
    waiwai: {
      story: 'Pamîle',
      part: 'Komo',
      of: 'nîrî',
      next: 'Kîn mîrî',
      previous: 'Wanî mîrî',
      listen: 'Enî',
      pause: 'Yarî',
      showMoral: 'Tawya amna',
      moral: 'Pamîle tawya:',
      complete: 'Pamîle pîrî',
      back: 'Wanî'
    }
  };

  const t = translations[language];
  const currentStoryPart = story.parts[currentPart];

  const handleNext = () => {
    if (currentPart < story.parts.length - 1) {
      setCurrentPart(currentPart + 1);
      setIsPlaying(false);
    } else if (!showMoral) {
      setShowMoral(true);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (showMoral) {
      setShowMoral(false);
    } else if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
      setIsPlaying(false);
    }
  };

  const handlePlayNarration = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        const text = showMoral 
          ? story.moralLesson[language]
          : currentStoryPart.text[language];
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'pt' ? 'pt-BR' : 'en-US';
        utterance.onend = () => setIsPlaying(false);
        
        speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
        >
          <RotateCcw size={20} />
          {t.back}
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-amber-600" />
          <h2 className="text-2xl font-bold text-gray-800">{story.title[language]}</h2>
        </div>
        
        {!showMoral && (
          <>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">
                {t.part} {currentPart + 1} {t.of} {story.parts.length}
              </span>
              <div className="bg-amber-100 px-3 py-1 rounded-full text-amber-700 font-medium">
                {Math.round(((currentPart + 1) / story.parts.length) * 100)}%
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentPart + 1) / story.parts.length) * 100}%` }}
              />
            </div>
          </>
        )}
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-6">
        {!showMoral ? (
          <>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{currentStoryPart.image}</div>
            </div>
            
            <div className="text-lg leading-relaxed text-gray-800 mb-6">
              {currentStoryPart.text[language]}
            </div>
            
            <div className="text-center">
              <button
                onClick={handlePlayNarration}
                className={`flex items-center gap-2 mx-auto px-6 py-3 rounded-xl font-medium transition-all ${
                  isPlaying 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {isPlaying ? <Pause size={20} /> : <Volume2 size={20} />}
                {isPlaying ? t.pause : t.listen}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-6">🌟</div>
            <h3 className="text-2xl font-bold text-amber-800 mb-4">{t.moral}</h3>
            <div className="text-lg leading-relaxed text-gray-800 mb-6">
              {story.moralLesson[language]}
            </div>
            
            <div className="text-center">
              <button
                onClick={handlePlayNarration}
                className={`flex items-center gap-2 mx-auto px-6 py-3 rounded-xl font-medium transition-all ${
                  isPlaying 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {isPlaying ? <Pause size={20} /> : <Volume2 size={20} />}
                {isPlaying ? t.pause : t.listen}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPart === 0 && !showMoral}
          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
            currentPart === 0 && !showMoral
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          {t.previous}
        </button>
        
        <button
          onClick={handleNext}
          className="flex-1 bg-amber-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-amber-600 transition-all"
        >
          {showMoral ? t.complete : (currentPart === story.parts.length - 1 ? t.showMoral : t.next)}
        </button>
      </div>
    </div>
  );
};

export default StoryActivity;
