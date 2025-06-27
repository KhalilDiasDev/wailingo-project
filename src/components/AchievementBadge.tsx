
import React from 'react';

interface AchievementBadgeProps {
  title: {
    pt: string;
    indigenous: string;
  };
  description: {
    pt: string;
    indigenous: string;
  };
  icon: string;
  isUnlocked: boolean;
  language: 'pt' | 'indigenous';
  rarity: 'common' | 'rare' | 'legendary';
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  icon,
  isUnlocked,
  language,
  rarity
}) => {
  const rarityStyles = {
    common: 'from-gray-400 to-gray-500',
    rare: 'from-blue-400 to-purple-500',
    legendary: 'from-yellow-400 to-orange-500'
  };

  return (
    <div className={`relative p-4 rounded-2xl border-2 transition-all ${
      isUnlocked 
        ? `bg-gradient-to-br ${rarityStyles[rarity]} text-white shadow-lg transform hover:scale-105` 
        : 'bg-gray-100 border-gray-300 text-gray-500'
    }`}>
      {!isUnlocked && (
        <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center">
          <span className="text-4xl">🔒</span>
        </div>
      )}
      
      <div className="text-center">
        <div className="text-4xl mb-2">{isUnlocked ? icon : '❓'}</div>
        <h3 className="font-bold text-sm mb-1">{title[language]}</h3>
        <p className="text-xs opacity-90">{description[language]}</p>
      </div>
    </div>
  );
};

export default AchievementBadge;
