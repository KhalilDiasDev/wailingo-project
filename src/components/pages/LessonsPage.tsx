
import React from 'react';
import LessonCard from '../LessonCard';
import { lessonsData } from '../../data/lessonsData';
import { UserProgress } from '../../hooks/useAppState';

interface LessonsPageProps {
  language: 'pt' | 'waiwai';
  userProgress: UserProgress;
  onLessonClick: (lessonId: number) => void;
}

const LessonsPage: React.FC<LessonsPageProps> = ({ language, userProgress, onLessonClick }) => {
  const processedLessons = lessonsData.map(lesson => ({
    ...lesson,
    isCompleted: userProgress.completedLessons.has(lesson.id),
    isLocked: false
  }));

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {language === 'pt' ? 'Lições Wai Wai' : 'Wai Wai Mbaé Kuaá'}
        </h2>
        <p className="text-gray-600">
          {language === 'pt' ? 
            'Aprenda nossa língua e preserve nossa cultura' : 
            'Kuaá yane nheenga yane kultura ukana'}
        </p>
      </div>
      
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

export default LessonsPage;
