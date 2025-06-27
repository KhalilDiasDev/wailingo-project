
import React, { useState } from 'react';
import Header from '../components/Header';
import WelcomeCard from '../components/WelcomeCard';
import LessonCard from '../components/LessonCard';
import NavigationMenu from '../components/NavigationMenu';
import AchievementBadge from '../components/AchievementBadge';
import LessonActivity from '../components/LessonActivity';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'pt' | 'waiwai'>('pt');
  const [activeTab, setActiveTab] = useState<'home' | 'lessons' | 'achievements' | 'profile' | 'progress'>('home');
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
  const [userProgress, setUserProgress] = useState({
    lessonsCompleted: 5,
    badges: 3,
    streak: 7,
    completedLessons: new Set([1, 2])
  });
  const { toast } = useToast();

  const handleLanguageToggle = () => {
    setCurrentLanguage(prev => prev === 'pt' ? 'waiwai' : 'pt');
    toast({
      title: currentLanguage === 'pt' ? 'Idioma alterado para Wai Wai' : 'Nheenga moĩ Português pupé',
      duration: 2000,
    });
  };

  const lessons = [
    {
      id: 1,
      title: {
        pt: 'Saudações e Apresentações',
        waiwai: 'Wayamî Yewka irumu'
      },
      description: {
        pt: 'Aprenda cumprimentos e como se apresentar em Wai Wai',
        waiwai: 'Kuaá wayamî yewka Wai Wai nheenga rupî'
      },
      type: 'vocabulary' as const,
      difficulty: 'easy' as const,
      isLocked: false,
      isCompleted: userProgress.completedLessons.has(1)
    },
    {
      id: 2,
      title: {
        pt: 'Animais da Floresta Amazônica',
        waiwai: 'Kaá Soí Amazonas suí'
      },
      description: {
        pt: 'Conheça os animais sagrados da floresta Wai Wai',
        waiwai: 'Kuaá soí ukwawasawa yane kaá suí'
      },
      type: 'vocabulary' as const,
      difficulty: 'easy' as const,
      isLocked: false,
      isCompleted: userProgress.completedLessons.has(2)
    },
    {
      id: 3,
      title: {
        pt: 'Lendas Tradicionais Wai Wai',
        waiwai: 'Yane Tamuxî Pamîle'
      },
      description: {
        pt: 'Histórias sagradas e tradições ancestrais',
        waiwai: 'Pamîle ukwawasawa yane tamuxî suí'
      },
      type: 'culture' as const,
      difficulty: 'medium' as const,
      isLocked: !userProgress.completedLessons.has(1),
      isCompleted: false
    },
    {
      id: 4,
      title: {
        pt: 'Estruturas Básicas da Língua',
        waiwai: 'Nheenga Yepé Katú'
      },
      description: {
        pt: 'Gramática fundamental da língua Wai Wai',
        waiwai: 'Wai Wai nheenga mbaé tẽ'
      },
      type: 'grammar' as const,
      difficulty: 'medium' as const,
      isLocked: !userProgress.completedLessons.has(2),
      isCompleted: false
    }
  ];

  const achievements = [
    {
      title: {
        pt: 'Primeiro Passo na Jornada',
        waiwai: 'Yepé Pysyka Rape rupî'
      },
      description: {
        pt: 'Completou sua primeira lição em Wai Wai',
        waiwai: 'Muapysyk yepé mbaé kuaá Wai Wai rupî'
      },
      icon: '🌱',
      isUnlocked: userProgress.completedLessons.has(1),
      rarity: 'common' as const
    },
    {
      title: {
        pt: 'Guardião da Cultura Ancestral',
        waiwai: 'Tamuxî Kultura Murakí'
      },
      description: {
        pt: 'Concluiu 3 lições sobre tradições Wai Wai',
        waiwai: 'Muapysyk musapí mbaé kuaá yane kultura'
      },
      icon: '🏛️',
      isUnlocked: userProgress.completedLessons.size >= 2,
      rarity: 'rare' as const
    },
    {
      title: {
        pt: 'Mestre das Palavras Sagradas',
        waiwai: 'Nheenga Ukwawasawa Mira'
      },
      description: {
        pt: 'Dominou 50 palavras em Wai Wai',
        waiwai: 'Kuaá 50 ewka Wai Wai nheenga rupî'
      },
      icon: '📚',
      isUnlocked: false,
      rarity: 'legendary' as const
    },
    {
      title: {
        pt: 'Contador de Histórias',
        waiwai: 'Pamîle Ukumukameusara'
      },
      description: {
        pt: 'Ouviu todas as lendas tradicionais',
        waiwai: 'Enî opaĩ tamuxî pamîle'
      },
      icon: '📖',
      isUnlocked: false,
      rarity: 'rare' as const
    }
  ];

  const handleLessonClick = (lessonId: number) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson?.isLocked) {
      toast({
        title: currentLanguage === 'pt' ? 'Lição bloqueada' : 'Mbaé kuaá ojokái',
        description: currentLanguage === 'pt' ? 
          'Complete as lições anteriores primeiro' : 
          'Muapysyk mokõi mbaé kuaá senundé',
        variant: 'destructive'
      });
      return;
    }
    
    setActiveLessonId(lessonId);
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

      toast({
        title: currentLanguage === 'pt' ? 'Lição concluída!' : 'Mbaé kuaá pîrî!',
        description: currentLanguage === 'pt' ? 
          `Pontuação: ${score}%` : 
          `Pîtasawa: ${score}%`,
      });
    }
    
    setActiveLessonId(null);
  };

  const handleBackToLessons = () => {
    setActiveLessonId(null);
  };

  if (activeLessonId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50">
        <Header 
          currentLanguage={currentLanguage}
          onLanguageToggle={handleLanguageToggle}
          userName="Komo Wai Wai"
        />
        
        <main className="max-w-4xl mx-auto p-4 pb-20">
          <LessonActivity
            lessonId={activeLessonId}
            language={currentLanguage}
            onComplete={handleLessonComplete}
            onBack={handleBackToLessons}
          />
        </main>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <WelcomeCard language={currentLanguage} userProgress={userProgress} />
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {currentLanguage === 'pt' ? 'Continue sua jornada' : 'Tîkse ne rape'}
              </h3>
              <div className="space-y-4">
                {lessons.slice(0, 2).map(lesson => (
                  <LessonCard
                    key={lesson.id}
                    {...lesson}
                    language={currentLanguage}
                    onClick={() => handleLessonClick(lesson.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 'lessons':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'pt' ? 'Lições Wai Wai' : 'Wai Wai Mbaé Kuaá'}
              </h2>
              <p className="text-gray-600">
                {currentLanguage === 'pt' ? 
                  'Aprenda nossa língua e preserve nossa cultura' : 
                  'Kuaá yane nheenga yane kultura ukana'}
              </p>
            </div>
            
            <div className="space-y-4">
              {lessons.map(lesson => (
                <LessonCard
                  key={lesson.id}
                  {...lesson}
                  language={currentLanguage}
                  onClick={() => handleLessonClick(lesson.id)}
                />
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'pt' ? 'Suas Conquistas' : 'Ne Mbaé Porandu'}
              </h2>
              <p className="text-gray-600">
                {currentLanguage === 'pt' ? 
                  'Acompanhe seu progresso cultural' : 
                  'Amaã ne kultura pukusawa'}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <AchievementBadge
                  key={index}
                  {...achievement}
                  language={currentLanguage}
                />
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                👤
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'pt' ? 'Estudante Wai Wai' : 'Wai Wai Mbaekuaasara'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'pt' ? 
                  'Preservando nossa língua desde Janeiro 2024' : 
                  'Yane nheenga murakí Janeiro 2024 suí'}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">{userProgress.lessonsCompleted}</div>
                  <div className="text-sm text-gray-600">
                    {currentLanguage === 'pt' ? 'Lições' : 'Mbaé kuaá'}
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-600">{userProgress.badges}</div>
                  <div className="text-sm text-gray-600">
                    {currentLanguage === 'pt' ? 'Conquistas' : 'Mbaé porandu'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageToggle={handleLanguageToggle}
        userName="Komo Wai Wai"
      />
      
      <main className="max-w-4xl mx-auto p-4 pb-20">
        {renderContent()}
      </main>

      <NavigationMenu
        activeTab={activeTab}
        onTabChange={setActiveTab}
        language={currentLanguage}
        isTeacher={false}
      />
    </div>
  );
};

export default Index;
