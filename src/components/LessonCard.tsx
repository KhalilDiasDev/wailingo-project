
import React from 'react';
import { Play, Lock, CheckCircle } from 'lucide-react';

interface LessonCardProps {
  id: number;
  title: {
    pt: string;
    waiwai: string;
  };
  description: {
    pt: string;
    waiwai: string;
  };
  type: 'vocabulary' | 'grammar' | 'culture' | 'story';
  difficulty: 'easy' | 'medium' | 'hard';
  isLocked: boolean;
  isCompleted: boolean;
  language: 'pt' | 'waiwai';
  onClick: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  type,
  difficulty,
  isLocked,
  isCompleted,
  language,
  onClick
}) => {
  const typeIcons = {
    vocabulary: '📚',
    grammar: '✏️',
    culture: '🏛️',
    story: '📖'
  };

  const difficultyColors = {
    easy: 'from-green-400 to-green-500',
    medium: 'from-yellow-400 to-orange-500',
    hard: 'from-red-400 to-red-500'
  };

  const difficultyLabels = {
    pt: {
      easy: 'Fácil',
      medium: 'Médio',
      hard: 'Difícil'
    },
    waiwai: {
      easy: 'Ndahasí',
      medium: 'Pitéra',
      hard: 'Hasí'
    }
  };

  const buttonText = {
    pt: {
      locked: 'Bloqueado',
      completed: 'Revisar',
      start: 'Começar'
    },
    waiwai: {
      locked: 'Ojokái',
      completed: 'Amaã jey',
      start: 'Aipiri'
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all hover:shadow-xl ${
      isLocked ? 'border-gray-300 opacity-60' : 
      isCompleted ? 'border-green-400' : 'border-transparent hover:border-green-300'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{typeIcons[type]}</div>
          <div>
            <h3 className="font-bold text-lg text-gray-800">{title[language]}</h3>
            <p className="text-gray-600 text-sm">{description[language]}</p>
          </div>
        </div>
        
        {isCompleted && (
          <CheckCircle className="w-6 h-6 text-green-500" />
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${difficultyColors[difficulty]} text-white text-sm font-medium`}>
          {difficultyLabels[language][difficulty]}
        </div>

        <button
          onClick={onClick}
          disabled={isLocked}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
            isLocked 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isCompleted
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
          }`}
        >
          {isLocked ? (
            <>
              <Lock size={16} />
              {buttonText[language].locked}
            </>
          ) : (
            <>
              <Play size={16} />
              {isCompleted ? buttonText[language].completed : buttonText[language].start}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
