
import React from 'react';
import AchievementBadge from '../AchievementBadge';
import { achievementsData } from '../../data/achievementsData';
import { UserProgress } from '../../hooks/useAppState';

interface AchievementsPageProps {
  language: 'pt' | 'waiwai';
  userProgress: UserProgress;
}

const AchievementsPage: React.FC<AchievementsPageProps> = ({ language, userProgress }) => {
  const processedAchievements = achievementsData.map((achievement, index) => ({
    ...achievement,
    // Logic for unlocking achievements based on progress
    isUnlocked: index === 0 ? userProgress.completedLessons.has(1) :
                index === 1 ? userProgress.completedLessons.size >= 2 :
                false
  }));

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {language === 'pt' ? 'Suas Conquistas' : 'Ne Mbaé Porandu'}
        </h2>
        <p className="text-gray-600">
          {language === 'pt' ? 
            'Acompanhe seu progresso cultural' : 
            'Amaã ne kultura pukusawa'}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {processedAchievements.map((achievement, index) => (
          <AchievementBadge
            key={index}
            {...achievement}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
