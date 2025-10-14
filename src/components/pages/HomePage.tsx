
import React from 'react';
import WelcomeCard from '../WelcomeCard';
import LessonCard from '../LessonCard';
import { lessonsData } from '../../data/lessonsData';
import { UserProgress } from '../../hooks/useAppState';

interface HomePageProps {
  language: 'pt' | 'waiwai';
  userProgress: UserProgress;
  onLessonClick: (lessonId: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, userProgress, onLessonClick }) => {
  const processedLessons = lessonsData.slice(0, 2).map(lesson => ({
    ...lesson,
    isCompleted: userProgress.completedLessons.has(lesson.id)
  }));

  return (
    <div className="space-y-6">
      <WelcomeCard language={language} userProgress={userProgress} />
      
      <div className="space-y-4">
        {processedLessons.map(lesson => (
          <LessonCard
            key={lesson.id}
            {...lesson}
            language={language}
            onClick={() => onLessonClick(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
