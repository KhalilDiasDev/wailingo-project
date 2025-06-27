
import { useState } from 'react';

export interface UserProgress {
  lessonsCompleted: number;
  badges: number;
  streak: number;
  completedLessons: Set<number>;
}

export const useAppState = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'pt' | 'waiwai'>('pt');
  const [activeTab, setActiveTab] = useState<'home' | 'lessons' | 'achievements' | 'profile' | 'progress'>('home');
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    lessonsCompleted: 5,
    badges: 3,
    streak: 7,
    completedLessons: new Set([1, 2])
  });

  const handleLanguageToggle = () => {
    setCurrentLanguage(prev => prev === 'pt' ? 'waiwai' : 'pt');
  };

  const handleLessonComplete = (score: number) => {
    if (activeLessonId) {
      const newCompletedLessons = new Set(userProgress.completedLessons);
      newCompletedLessons.add(activeLessonId);
      
      setUserProgress(prev => ({
        ...prev,
        lessonsCompleted: prev.lessonsCompleted + (newCompletedLessons.has(activeLessonId) ? 0 : 1),
        badges: prev.badges + (score > 70 ? 1 : 0),
        completedLessons: newCompletedLessons
      }));
    }
    
    setActiveLessonId(null);
  };

  return {
    currentLanguage,
    activeTab,
    activeLessonId,
    userProgress,
    setActiveTab,
    setActiveLessonId,
    handleLanguageToggle,
    handleLessonComplete
  };
};
