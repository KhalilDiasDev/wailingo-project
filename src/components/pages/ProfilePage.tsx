
import React from 'react';
import { UserProgress } from '../../hooks/useAppState';

interface ProfilePageProps {
  language: 'pt' | 'waiwai';
  userProgress: UserProgress;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ language, userProgress }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
          👤
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {language === 'pt' ? 'Khalil Dias' : 'Khalil Dias'}
        </h2>
        <p className="text-gray-600 mb-4">
          {language === 'pt' ? 
            'Preservando nossa língua desde Janeiro 2024' : 
            'Yane nheenga murakí Janeiro 2024 suí'}
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-green-50 p-4 rounded-xl">
            <div className="text-2xl font-bold text-green-600">{userProgress.lessonsCompleted}</div>
            <div className="text-sm text-gray-600">
              {language === 'pt' ? 'Lições' : 'Mbaé kuaá'}
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl">
            <div className="text-2xl font-bold text-yellow-600">{userProgress.badges}</div>
            <div className="text-sm text-gray-600">
              {language === 'pt' ? 'Conquistas' : 'Mbaé porandu'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
