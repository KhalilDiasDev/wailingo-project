
import React from 'react';
import Header from '../components/Header';
import NavigationMenu from '../components/NavigationMenu';
import LessonActivity from '../components/LessonActivity';
import HomePage from '../components/pages/HomePage';
import LessonsPage from '../components/pages/LessonsPage';
import AchievementsPage from '../components/pages/AchievementsPage';
import ProfilePage from '../components/pages/ProfilePage';
import { useAppState } from '../hooks/useAppState';
import { useToast } from '../hooks/use-toast';

const Index = () => {
  const {
    currentLanguage,
    activeTab,
    activeLessonId,
    userProgress,
    setActiveTab,
    setActiveLessonId,
    handleLanguageToggle,
    handleLessonComplete
  } = useAppState();
  
  const { toast } = useToast();

  const handleLessonClick = (lessonId: number) => {
    // Check if lesson is locked based on completion of previous lessons
    if (lessonId > 1 && !userProgress.completedLessons.has(lessonId - 1)) {
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

  const handleLessonCompleteWithToast = (score: number) => {
    handleLessonComplete(score);
    
    toast({
      title: currentLanguage === 'pt' ? 'Lição concluída!' : 'Mbaé kuaá pîrî!',
      description: currentLanguage === 'pt' ? 
        `Pontuação: ${score}%` : 
        `Pîtasawa: ${score}%`,
    });
  };

  const handleLanguageToggleWithToast = () => {
    handleLanguageToggle();
    toast({
      title: currentLanguage === 'pt' ? 'Idioma alterado para Wai Wai' : 'Nheenga moĩ Português pupé',
      duration: 2000,
    });
  };

  const handleBackToLessons = () => {
    setActiveLessonId(null);
  };

  if (activeLessonId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50">
        <Header 
          currentLanguage={currentLanguage}
          onLanguageToggle={handleLanguageToggleWithToast}
          userName="Komo Wai Wai"
        />
        
        <main className="max-w-4xl mx-auto p-4 pb-20">
          <LessonActivity
            lessonId={activeLessonId}
            language={currentLanguage}
            onComplete={handleLessonCompleteWithToast}
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
          <HomePage 
            language={currentLanguage}
            userProgress={userProgress}
            onLessonClick={handleLessonClick}
          />
        );

      case 'lessons':
        return (
          <LessonsPage
            language={currentLanguage}
            userProgress={userProgress}
            onLessonClick={handleLessonClick}
          />
        );

      case 'achievements':
        return (
          <AchievementsPage
            language={currentLanguage}
            userProgress={userProgress}
          />
        );

      case 'profile':
        return (
          <ProfilePage
            language={currentLanguage}
            userProgress={userProgress}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageToggle={handleLanguageToggleWithToast}
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
