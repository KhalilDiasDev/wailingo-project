import React, { useState } from 'react';
import { BookOpen, Users, Zap, Globe, ChevronRight, Heart } from 'lucide-react';

interface WelcomePageProps {
  language: 'pt' | 'waiwai';
}

const WelcomePage: React.FC<WelcomePageProps> = ({ language = 'pt' }) => {
  const [selectedLesson, setSelectedLesson] = useState(0);

  const translations = {
    pt: {
      greeting: 'Bem-vindo ao Wailingo!',
      subtitle: 'Aprenda a língua Wai Wai e preserve nossa herança cultural',
      about: 'Sobre o Projeto',
      aboutDesc: 'Wailingo é uma plataforma de educação digital dedicada ao ensino da língua Wai Wai, um idioma ancestral do povo indígena Wai Wai da Amazônia. Através de aulas interativas e envolventes, você pode aprender e contribuir para a preservação dessa cultura única.',
      vision: 'Nossa Missão',
      visionDesc: 'Preservar e revitalizar a língua Wai Wai através da tecnologia, conectando comunidades e oferecendo acesso igualitário ao conhecimento cultural indígena.',
      startLessons: 'Comece a Aprender',
      lessonsTitle: 'Primeiras Lições',
      getStarted: 'Começar a Aprender',
      learnMore: 'Saiba mais',
      features: [
        {
          icon: '📚',
          title: 'Aulas Estruturadas',
          desc: 'Aprenda progressivamente com lições bem organizadas'
        },
        {
          icon: '🎯',
          title: 'Exercícios Práticos',
          desc: 'Pratique com exercícios interativos e jogos educativos'
        },
        {
          icon: '👥',
          title: 'Comunidade',
          desc: 'Conecte-se com outros aprendizes e falantes nativos'
        },
        {
          icon: '🏆',
          title: 'Recompensas',
          desc: 'Ganhe badges e conquistas ao progredir'
        }
      ],
      initialLessons: [
        {
          id: 1,
          title: 'Saudações Básicas',
          description: 'Aprenda como saudar em Wai Wai',
          difficulty: 'Iniciante',
          lessons: 5,
          icon: '👋'
        },
        {
          id: 2,
          title: 'Números e Quantidades',
          description: 'Conheça os números na língua Wai Wai',
          difficulty: 'Iniciante',
          lessons: 4,
          icon: '🔢'
        },
        {
          id: 3,
          title: 'Animais da Floresta',
          description: 'Aprenda nomes de animais amazônicos',
          difficulty: 'Iniciante',
          lessons: 6,
          icon: '🦜'
        },
        {
          id: 4,
          title: 'Elementos da Natureza',
          description: 'Explore vocabulário da natureza',
          difficulty: 'Iniciante',
          lessons: 5,
          icon: '🌿'
        }
      ]
    },
    waiwai: {
      greeting: 'Maã Wailingo! ',
      subtitle: 'Kuaá Wai Wai rupî ne murakí yane tamuxî kultura',
      about: 'Mbaé Wailingo',
      aboutDesc: 'Wailingo maã kuaá yepé ne tamuxî rapi tamuará rupî kuaá Wai Wai rupî. Yawaxa kuaá murakí yané arupi, ne kuaá rope tîkse.',
      vision: 'Yané Porandu',
      visionDesc: 'Murakí Wai Wai rupî ne yawaxa kuaá arupi, yapé tîkse yané kultura.',
      startLessons: 'Aipiri Kuaá',
      lessonsTitle: 'Kuaá Mbaé Pîrî',
      getStarted: 'Aipiri',
      learnMore: 'Saãma kuaá',
      features: [
        {
          icon: '📚',
          title: 'Kuaá Pîrî',
          desc: 'Yawaxa murakí rupî'
        },
        {
          icon: '🎯',
          title: 'Mbaé Porandu',
          desc: 'Tîkse kuaá arupi'
        },
        {
          icon: '👥',
          title: 'Yapé',
          desc: 'Tîkse yané arupi'
        },
        {
          icon: '🏆',
          title: 'Mbaé Porandu',
          desc: 'Kuaá tîkse kuaá pîrî'
        }
      ],
      initialLessons: [
        {
          id: 1,
          title: 'Maã Kuaá',
          description: 'Yawaxa maã Wai Wai rupî',
          difficulty: 'Aipiri',
          lessons: 5,
          icon: '👋'
        },
        {
          id: 2,
          title: 'Mbaé Tamîkî',
          description: 'Kuaá mbaé tamîkî rupî',
          difficulty: 'Aipiri',
          lessons: 4,
          icon: '🔢'
        },
        {
          id: 3,
          title: 'Mbaé Tapî',
          description: 'Kuaá mbaé tapî rupî',
          difficulty: 'Aipiri',
          lessons: 6,
          icon: '🦜'
        },
        {
          id: 4,
          title: 'Yané Rupî',
          description: 'Yawaxa yané rupî',
          difficulty: 'Aipiri',
          lessons: 5,
       
        }
      ]
    }
  };

  const t = translations[language];
  const lesson = t.initialLessons[selectedLesson];

  return (
    <div className="min-h-screen ">
      <div className="px-4 py-10 text-center max-w-2xl mx-auto">
        <div style={{textAlign:'center',justifyContent:'center',display:'flex'}}>
        <img src='/public/wingo-w.png' width={'270px'}/>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-3">{t.greeting}</h1>
        <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
        <button className="text-white font-bold py-3 px-8 rounded-2xl transition-all transform hover:shadow-lg active:scale-95 flex items-center gap-2 mx-auto">
          {t.getStarted}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 py-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Globe className="w-6 h-6 text-emerald-600" />
              {t.about}
            </h2>
            <p className="text-gray-600 leading-relaxed">{t.aboutDesc}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500" />
              {t.vision}
            </h2>
            <p className="text-gray-600 leading-relaxed">{t.visionDesc}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">{t.startLessons}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-all text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.lessonsTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {t.initialLessons.map((les, idx) => (
              <button
                key={les.id}
                onClick={() => setSelectedLesson(idx)}
                className={`p-5 rounded-2xl border-2 transition-all text-left ${
                  selectedLesson === idx
                    ? 'bg-emerald-50 border-emerald-500 shadow-md'
                    : 'bg-white border-gray-200 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{les.icon}</div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                    {les.difficulty}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{les.title}</h3>
                <p className="text-sm text-gray-600">{les.description}</p>
                <div className="mt-3 text-xs text-gray-500">{les.lessons} lições</div>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{lesson.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{lesson.title}</h3>
                <p className="text-gray-600">{lesson.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-600 mb-1">Nível</div>
                <div className="font-bold text-gray-900">{lesson.difficulty}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-600 mb-1">Lições</div>
                <div className="font-bold text-gray-900">{lesson.lessons}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-gray-600 mb-1">Tempo</div>
                <div className="font-bold text-gray-900">~15 min</div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 rounded-2xl transition-all transform hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
              {t.getStarted}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            ✨ {language === 'pt' 
              ? 'Sua jornada de aprendizado começa aqui. Bem-vindo à comunidade Wailingo!'
              : 'Yané yawaxa aipiri. Maã Wailingo!'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;