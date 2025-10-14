
import React, { useState } from 'react';
import { Volume2, RotateCcw, CheckCircle, X } from 'lucide-react';

interface VocabularyItem {
  id: number;
  waiwai: string;
  portuguese: string;
  pronunciation: string;
  image: string;
  audioDescription: {
    pt: string;
    waiwai: string;
  };
}

interface VocabularyActivityProps {
  vocabulary: VocabularyItem[];
  language: 'pt' | 'waiwai';
  onComplete: () => void;
  onBack: () => void;
}

const VocabularyActivity: React.FC<VocabularyActivityProps> = ({ 
  vocabulary, 
  language, 
  onComplete, 
  onBack 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [completedWords, setCompletedWords] = useState<Set<number>>(new Set());

  const currentWord = vocabulary[currentIndex];

  const translations = {
    pt: {
      vocabulary: 'Vocabulário',
      pronunciation: 'Pronúncia:',
      showTranslation: 'Ver Tradução',
      hideTranslation: 'Ocultar Tradução',
      next: 'Próxima Palavra',
      previous: 'Palavra Anterior',
      complete: 'Concluir',
      back: 'Voltar',
      progress: 'Progresso'
    },
    waiwai: {
      vocabulary: 'Ewka kîrî',
      pronunciation: 'Tîse kîrî:',
      showTranslation: 'Karaiwa kîrî amna',
      hideTranslation: 'Karaiwa kîrî îka',
      next: 'Kîn ewka',
      previous: 'Wanî ewka',
      complete: 'Pîrî',
      back: 'Wanî',
      progress: 'Tamîkî'
    }
  };

  const t = translations[language];

  const handleNext = () => {
    setCompletedWords(prev => new Set([...prev, currentWord.id]));
    
    if (currentIndex < vocabulary.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowTranslation(false);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowTranslation(false);
    }
  };

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'pt' ? 'pt-BR' : 'en-US';
      speechSynthesis.speak(utterance);
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{t.vocabulary}</h2>
          <div className="bg-green-100 px-3 py-1 rounded-full text-green-700 font-medium">
            {currentIndex + 1} de {vocabulary.length}
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / vocabulary.length) * 100}%` }}
          />
        </div>

        <div className="text-sm text-gray-600 mb-2">{t.progress}</div>
        <div className="flex gap-2">
          {vocabulary.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                completedWords.has(vocabulary[index].id)
                  ? 'bg-green-500'
                  : index === currentIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="bg-amber-50 rounded-2xl p-8 mb-6">
          <div className="text-6xl mb-4">{currentWord.image}</div>
          
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {language === 'pt' ? currentWord.waiwai : currentWord.portuguese}
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-600 italic">
                {t.pronunciation} /{currentWord.pronunciation}/
              </span>
              <button
                onClick={() => speakWord(language === 'pt' ? currentWord.waiwai : currentWord.portuguese)}
                className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
              >
                <Volume2 size={20} className="text-blue-600" />
              </button>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            {currentWord.audioDescription[language]}
          </p>

          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-colors font-medium"
          >
            {showTranslation ? t.hideTranslation : t.showTranslation}
          </button>

          {showTranslation && (
            <div className="mt-4 p-4 bg-white rounded-xl border-2 border-green-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-800">
                  {language === 'pt' ? currentWord.portuguese : currentWord.waiwai}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
            currentIndex === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          {t.previous}
        </button>
        
        <button
          onClick={handleNext}
          className="flex-1 bg-green-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-green-600 transition-all"
        >
          {currentIndex === vocabulary.length - 1 ? t.complete : t.next}
        </button>
      </div>
    </div>
  );
};

export default VocabularyActivity;
