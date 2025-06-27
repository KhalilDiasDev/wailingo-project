
import React, { useState } from 'react';
import Header from '../components/Header';
import WelcomeCard from '../components/WelcomeCard';
import LessonCard from '../components/LessonCard';
import NavigationMenu from '../components/NavigationMenu';
import AchievementBadge from '../components/AchievementBadge';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'pt' | 'indigenous'>('pt');
  const [activeTab, setActiveTab] = useState<'home' | 'lessons' | 'achievements' | 'profile' | 'progress'>('home');
  const [userProgress] = useState({
    lessonsCompleted: 5,
    badges: 3,
    streak: 7
  });
  const { toast } = useToast();

  const handleLanguageToggle = () => {
    setCurrentLanguage(prev => prev === 'pt' ? 'indigenous' : 'pt');
    toast({
      title: currentLanguage === 'pt' ? 'Idioma alterado para Indígena' : 'Nheenga moĩ Português pupé',
      duration: 2000,
    });
  };

  const lessons = [
    {
      id: 1,
      title: {
        pt: 'Saudações e Apresentações',
        indigenous: 'Mundusawa'
      },
      description: {
        pt: 'Aprenda como cumprimentar e se apresentar',
        indigenous: 'Kuaá mbaé yané rera'
      },
      type: 'vocabulary' as const,
      difficulty: 'easy' as const,
      isLocked: false,
      isCompleted: true
    },
    {
      id: 2,
      title: {
        pt: 'Animais da Floresta',
        indigenous: 'Kapií Soí mbaé'
      },
      description: {
        pt: 'Conheça os animais amazônicos',
        indigenous: 'Kuaá soí mbaé Amazonas suí'
      },
      type: 'vocabulary' as const,
      difficulty: 'easy' as const,
      isLocked: false,
      isCompleted: true
    },
    {
      id: 3,
      title: {
        pt: 'Lendas e Tradições',
        indigenous: 'Maã Turusú'
      },
      description: {
        pt: 'Histórias sagradas do povo',
        indigenous: 'Maã sagrada yané iwaka suí'
      },
      type: 'culture' as const,
      difficulty: 'medium' as const,
      isLocked: false,
      isCompleted: false
    },
    {
      id: 4,
      title: {
        pt: 'Estruturas Básicas',
        indigenous: 'Nheenga Yepé'
      },
      description: {
        pt: 'Gramática fundamental',
        indigenous: 'Mbaé tẽ nheenga'
      },
      type: 'grammar' as const,
      difficulty: 'medium' as const,
      isLocked: true,
      isCompleted: false
    }
  ];

  const achievements = [
    {
      title: {
        pt: 'Primeiro Passo',
        indigenous: 'Yepé Pysyka'
      },
      description: {
        pt: 'Complete sua primeira lição',
        indigenous: 'Muapysyk yepé mbaé kuaá'
      },
      icon: '🌱',
      isUnlocked: true,
      rarity: 'common' as const
    },
    {
      title: {
        pt: 'Guardião da Cultura',
        indigenous: 'Kultura Murakí'
      },
      description: {
        pt: 'Complete 5 lições culturais',
        indigenous: 'Muapysyk 5 kultura mbaé kuaá'
      },
      icon: '🏛️',
      isUnlocked: true,
      rarity: 'rare' as const
    },
    {
      title: {
        pt: 'Mestre das Palavras',
        indigenous: 'Nheenga Mira'
      },
      description: {
        pt: 'Domine 100 palavras',
        indigenous: 'Kuaá 100 nheenga'
      },
      icon: '📚',
      isUnlocked: false,
      rarity: 'legendary' as const
    }
  ];

  const handleLessonClick = (lessonId: number) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson?.isLocked) {
      toast({
        title: currentLanguage === 'pt' ? 'Lição bloqueada' : 'Mbaé kuaá ojokái',
        description: currentLanguage === 'pt' ? 'Complete as lições anteriores primeiro' : 'Muapysyk mokõi mbaé kuaá senundé',
        variant: 'destructive'
      });
      return;
    }
    
    toast({
      title: currentLanguage === 'pt' ? 'Iniciando lição...' : 'Oikutu mbaé kuaá...',
      description: lesson?.title[currentLanguage],
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <WelcomeCard language={currentLanguage} userProgress={userProgress} />
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {currentLanguage === 'pt' ? 'Continue de onde parou' : 'Aikuaá jey sendá suí'}
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
                {currentLanguage === 'pt' ? 'Todas as Lições' : 'Opaĩ Mbaé Kuaá'}
              </h2>
              <p className="text-gray-600">
                {currentLanguage === 'pt' ? 'Escolha uma lição para começar' : 'Asaisú yepé mbaé kuaá aipiri ará'}
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
                {currentLanguage === 'pt' ? 'Acompanhe seu progresso' : 'Amaã mbaé resá oiko'}
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
                {currentLanguage === 'pt' ? 'Usuário da Comunidade' : 'Tetama Mira'}
              </h2>
              <p className="text-gray-600 mb-4">
                {currentLanguage === 'pt' ? 'Membro desde Janeiro 2024' : 'Mira iepé Janeiro 2024 suí'}
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
        userName="Ana Silva"
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
