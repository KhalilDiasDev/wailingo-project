
import React from 'react';
import { Home, BookOpen, Award, User, BarChart3 } from 'lucide-react';

interface NavigationMenuProps {
  activeTab: 'home' | 'lessons' | 'achievements' | 'profile' | 'progress';
  onTabChange: (tab: 'home' | 'lessons' | 'achievements' | 'profile' | 'progress') => void;
  language: 'pt' | 'indigenous';
  isTeacher?: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
  activeTab, 
  onTabChange, 
  language, 
  isTeacher = false 
}) => {
  const translations = {
    pt: {
      home: 'Início',
      lessons: 'Lições',
      achievements: 'Conquistas',
      profile: 'Perfil',
      progress: 'Progresso'
    },
    indigenous: {
      home: 'Tendawa',
      lessons: 'Mbaé kuaá',
      achievements: 'Mbaé porandu',
      profile: 'Aé',
      progress: 'Mbaé oiko'
    }
  };

  const t = translations[language];

  const menuItems = [
    { id: 'home' as const, icon: Home, label: t.home },
    { id: 'lessons' as const, icon: BookOpen, label: t.lessons },
    { id: 'achievements' as const, icon: Award, label: t.achievements },
    { id: 'profile' as const, icon: User, label: t.profile },
    ...(isTeacher ? [{ id: 'progress' as const, icon: BarChart3, label: t.progress }] : [])
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-around">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all ${
                activeTab === id
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
