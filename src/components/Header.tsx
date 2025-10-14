
import React from 'react';
import { User, Menu } from 'lucide-react';

interface HeaderProps {
  currentLanguage: 'pt' | 'waiwai';
  onLanguageToggle: () => void;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageToggle, userName }) => {
  const translations = {
    pt: {
      welcome: 'Bem-vindo',
      platform: 'Wailingo',
      language: 'Idioma'
    },
    waiwai: {
      welcome: 'Wayamî',
      platform: 'Wai Wai Mbaé Kuaá Retama',
      language: 'Nheenga'
    }
  };

  const t = translations[currentLanguage];

  return (
    <header className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-lg"><img src='https://i.postimg.cc/gkyrm1Dm/wingo.png' /></span>
          </div>
          <div>
            <h1 className="text-lg font-bold">{t.platform}</h1>
            {userName && (
              <p className="text-sm opacity-90">{t.welcome}, {userName}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={onLanguageToggle}
            className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            {currentLanguage === 'pt' ? 'Wai Wai' : 'Português'}
          </button>
          
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
