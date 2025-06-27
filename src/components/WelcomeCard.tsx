
import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

interface WelcomeCardProps {
  language: 'pt' | 'waiwai';
  userProgress?: {
    lessonsCompleted: number;
    badges: number;
    streak: number;
  };
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ language, userProgress }) => {
  const translations = {
    pt: {
      title: 'Sua jornada na língua Wai Wai',
      subtitle: 'Preserve nossa cultura ancestral',
      lessons: 'Lições concluídas',
      badges: 'Conquistas',
      streak: 'Dias seguidos',
      continue: 'Continuar aprendendo',
      start: 'Começar jornada'
    },
    waiwai: {
      title: 'Ne kuaá rape Wai Wai rupî',
      subtitle: 'Murakí yane tamuxî kultura',
      lessons: 'Mbaé kuaá pîrî',
      badges: 'Mbaé porandu',
      streak: 'Ara tamîkî',
      continue: 'Tîkse kuaá',
      start: 'Aipiri rape'
    }
  };

  const t = translations[language];
  const progress = userProgress || { lessonsCompleted: 0, badges: 0, streak: 0 };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-2xl shadow-lg border border-amber-200">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-800 mb-2">{t.title}</h2>
        <p className="text-green-700">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-white/70 rounded-xl">
          <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-800">{progress.lessonsCompleted}</div>
          <div className="text-sm text-green-600">{t.lessons}</div>
        </div>
        
        <div className="text-center p-3 bg-white/70 rounded-xl">
          <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-800">{progress.badges}</div>
          <div className="text-sm text-green-600">{t.badges}</div>
        </div>
        
        <div className="text-center p-3 bg-white/70 rounded-xl">
          <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-800">{progress.streak}</div>
          <div className="text-sm text-green-600">{t.streak}</div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 text-lg">
        {progress.lessonsCompleted > 0 ? t.continue : t.start}
      </button>
    </div>
  );
};

export default WelcomeCard;
