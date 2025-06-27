
import React, { useState } from 'react';
import { Trophy, Star, RotateCcw } from 'lucide-react';
import VocabularyActivity from './VocabularyActivity';
import QuizActivity from './QuizActivity';
import StoryActivity from './StoryActivity';

interface LessonActivityProps {
  lessonId: number;
  language: 'pt' | 'waiwai';
  onComplete: (score: number) => void;
  onBack: () => void;
}

const LessonActivity: React.FC<LessonActivityProps> = ({ lessonId, language, onComplete, onBack }) => {
  const [currentActivity, setCurrentActivity] = useState<'vocabulary' | 'story' | 'quiz' | 'complete'>('vocabulary');
  const [vocabularyCompleted, setVocabularyCompleted] = useState(false);
  const [storyCompleted, setStoryCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // Dados das lições em Wai Wai
  const lessonData = {
    1: {
      vocabulary: [
        {
          id: 1,
          waiwai: 'Wayamî',
          portuguese: 'Olá',
          pronunciation: 'wa-ya-mî',
          image: '👋',
          audioDescription: {
            pt: 'Cumprimento usado para saudar alguém',
            waiwai: 'Tîse kîrî mîrî wayamî arî'
          }
        },
        {
          id: 2,
          waiwai: 'Wanî',
          portuguese: 'Tchau',
          pronunciation: 'wa-nî',
          image: '👋',
          audioDescription: {
            pt: 'Despedida amigável',
            waiwai: 'Kaxamî tîse wanî arî'
          }
        },
        {
          id: 3,
          waiwai: 'Yewka',
          portuguese: 'Nome',
          pronunciation: 'ye-w-ka',
          image: '👤',
          audioDescription: {
            pt: 'Como a pessoa é chamada',
            waiwai: 'Mîrî yewka tîse kîrî'
          }
        },
        {
          id: 4,
          waiwai: 'Tuna',
          portuguese: 'Água',
          pronunciation: 'tu-na',
          image: '💧',
          audioDescription: {
            pt: 'Líquido essencial para a vida',
            waiwai: 'Kaxî tîkse tuna wehxa'
          }
        },
        {
          id: 5,
          waiwai: 'Komo',
          portuguese: 'Criança',
          pronunciation: 'ko-mo',
          image: '👶',
          audioDescription: {
            pt: 'Pessoa jovem da comunidade',
            waiwai: 'Komo mîrî tetama kîrî'
          }
        }
      ],
      story: {
        title: {
          pt: 'A Lenda do Rio Sagrado',
          waiwai: 'Kaxî Tuna Pamîle'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'Há muito tempo, nossos ancestrais viviam perto de um grande rio.',
              waiwai: 'Kîse komo, yane tamuxî kaxî tuna pata kîrî wehxa.'
            },
            image: '🏞️',
            audioNarration: {
              pt: 'Esta é a história do rio sagrado de nosso povo',
              waiwai: 'Kîrî pamîle yane kaxî tuna kîrî'
            }
          },
          {
            id: 2,
            text: {
              pt: 'O rio era a fonte de vida, fornecia peixes e água limpa.',
              waiwai: 'Kaxî tuna wehxa kaxî, pira tuna eseru.'
            },
            image: '🐟',
            audioNarration: {
              pt: 'O rio dava vida a toda a comunidade',
              waiwai: 'Kaxî tuna tetama wehxa ukana'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Um dia, o espírito do rio apareceu para ensinar sobre respeito.',
              waiwai: 'Yepé ara, kaxî tuna yurara amna tawya kîrî.'
            },
            image: '✨',
            audioNarration: {
              pt: 'O espírito ensinou a importância do respeito',
              waiwai: 'Yurara tawya ukwawasawa kîrî'
            }
          }
        ],
        moralLesson: {
          pt: 'Devemos sempre respeitar a natureza, pois ela nos dá tudo que precisamos.',
          waiwai: 'Yane ukwawasawa kaá, amana yane yumuesara ukana.'
        }
      },
      quiz: [
        {
          id: 1,
          question: {
            pt: 'Como se diz "Olá" em Wai Wai?',
            waiwai: 'Mîta se "Wayamî" karaiwa nheenga rupî?'
          },
          options: {
            pt: ['Wayamî', 'Wanî', 'Yewka', 'Tuna'],
            waiwai: ['Olá', 'Tchau', 'Nome', 'Água']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'Wayamî é a forma tradicional de cumprimentar em Wai Wai.',
            waiwai: 'Wayamî tîse kîrî yane nheenga rupî.'
          }
        },
        {
          id: 2,
          question: {
            pt: 'O que significa "Tuna" em português?',
            waiwai: 'Mîta "Tuna" karaiwa nheenga rupî?'
          },
          options: {
            pt: ['Fogo', 'Água', 'Terra', 'Ar'],
            waiwai: ['Tatá', 'Tuna', 'Ywý', 'Ywaka']
          },
          correctAnswer: 1,
          explanation: {
            pt: 'Tuna significa água, elemento sagrado na cultura Wai Wai.',
            waiwai: 'Tuna ukwawasawa yane kultura rupî.'
          }
        },
        {
          id: 3,
          question: {
            pt: 'Qual é o ensinamento principal da lenda do rio?',
            waiwai: 'Mîta tawya turusú kaxî tuna pamîle suí?'
          },
          options: {
            pt: ['Pescar sempre', 'Respeitar a natureza', 'Nadar no rio', 'Construir casas'],
            waiwai: ['Pira pewa nungara', 'Kaá ukwawasawa', 'Tuna pupé yu', 'Uka yakana']
          },
          correctAnswer: 1,
          explanation: {
            pt: 'A lenda ensina que devemos respeitar a natureza que nos sustenta.',
            waiwai: 'Pamîle ukumukameú kaá ukwawasawa, amana yane murakí.'
          }
        }
      ]
    },
    2: {
      vocabulary: [
        {
          id: 6,
          waiwai: 'Pira',
          portuguese: 'Peixe',
          pronunciation: 'pi-ra',
          image: '🐟',
          audioDescription: {
            pt: 'Animal aquático muito importante na alimentação',
            waiwai: 'Tuna soí yane temî ukana'
          }
        },
        {
          id: 7,
          waiwai: 'Yurara',
          portuguese: 'Espírito',
          pronunciation: 'yu-ra-ra',
          image: '👻',
          audioDescription: {
            pt: 'Ser sagrado que protege a natureza',
            waiwai: 'Ukwawasawa mîrî kaá murakí'
          }
        },
        {
          id: 8,
          waiwai: 'Kaá',
          portuguese: 'Floresta',
          pronunciation: 'ka-á',
          image: '🌳',
          audioDescription: {
            pt: 'Grande área verde onde vivem muitos animais',
            waiwai: 'Turusú kaá soí kîrî tetama'
          }
        },
        {
          id: 9,
          waiwai: 'Soí',
          portuguese: 'Animal',
          pronunciation: 'so-í',
          image: '🦜',
          audioDescription: {
            pt: 'Seres vivos que habitam a floresta',
            waiwai: 'Kaxî mbaé kaá kîrî wehxa'
          }
        },
        {
          id: 10,
          waiwai: 'Tatá',
          portuguese: 'Fogo',
          pronunciation: 'ta-tá',
          image: '🔥',
          audioDescription: {
            pt: 'Elemento usado para cozinhar e aquecer',
            waiwai: 'Temî memewa akaxî ukana'
          }
        }
      ],
      story: {
        title: {
          pt: 'O Pajé e os Animais da Floresta',
          waiwai: 'Pajé Kaá Soí irumu'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'O pajé mais sábio da aldeia conhecia a linguagem de todos os animais.',
              waiwai: 'Pajé kuaá katú tetama kîrî opaĩ soí nheenga ukwawa.'
            },
            image: '👴',
            audioNarration: {
              pt: 'O pajé era respeitado por sua sabedoria',
              waiwai: 'Pajé ukwawasawa kuaá katú rupi'
            }
          },
          {
            id: 2,
            text: {
              pt: 'Ele ensinou que cada animal tem um papel importante na natureza.',
              waiwai: 'Umukameú mukũi soí ukana katú kaá kîrî.'
            },
            image: '🦋',
            audioNarration: {
              pt: 'Cada animal é importante no equilíbrio da floresta',
              waiwai: 'Opaĩ soí katú kaá ukwawasawa kîrî'
            }
          },
          {
            id: 3,
            text: {
              pt: 'A borboleta poliniza, o macaco dispersa sementes, todos são necessários.',
              waiwai: 'Panapana putira murakí, kawí tîma musapí, opaĩ tekotewa.'
            },
            image: '🐒',
            audioNarration: {
              pt: 'Todos os animais trabalham juntos na floresta',
              waiwai: 'Opaĩ soí irundewé kaá rupî'
            }
          }
        ],
        moralLesson: {
          pt: 'Todos os seres vivos são importantes e devemos viver em harmonia com eles.',
          waiwai: 'Opaĩ kaxî mbaé katú, yurundewé kaxî arama.'
        }
      },
      quiz: [
        {
          id: 4,
          question: {
            pt: 'Como se diz "Floresta" em Wai Wai?',
            waiwai: 'Mîta se "Kaá" karaiwa nheenga rupî?'
          },
          options: {
            pt: ['Kaá', 'Soí', 'Pira', 'Tatá'],
            waiwai: ['Floresta', 'Animal', 'Peixe', 'Fogo']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'Kaá é a palavra Wai Wai para floresta, nosso lar sagrado.',
            waiwai: 'Kaá yane tetama ukwawasawa.'
          }
        },
        {
          id: 5,
          question: {
            pt: 'Qual animal o macaco representa na história?',
            waiwai: 'Maã kawí pamîle kîrî ukwewé?'
          },
          options: {
            pt: ['Dispersor de sementes', 'Caçador', 'Pescador', 'Construtor'],
            waiwai: ['Tîma musapí', 'Suasara', 'Pirasara', 'Ukasara']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'O macaco espalha sementes, ajudando a floresta a crescer.',
            waiwai: 'Kawí tîma musapí, kaá ukana pukusawa.'
          }
        }
      ]
    }
  };

  const currentLesson = lessonData[lessonId as keyof typeof lessonData];

  const handleVocabularyComplete = () => {
    setVocabularyCompleted(true);
    setCurrentActivity('story');
  };

  const handleStoryComplete = () => {
    setStoryCompleted(true);
    setCurrentActivity('quiz');
  };

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setCurrentActivity('complete');
  };

  const handleFinalComplete = () => {
    const totalScore = Math.round(((vocabularyCompleted ? 30 : 0) + (storyCompleted ? 30 : 0) + (finalScore * 40 / currentLesson.quiz.length)) / 100 * 100);
    onComplete(totalScore);
  };

  const translations = {
    pt: {
      congratulations: 'Parabéns!',
      lessonComplete: 'Lição Concluída',
      yourScore: 'Sua pontuação:',
      vocabulary: 'Vocabulário',
      story: 'História',
      quiz: 'Quiz',
      completed: 'Concluído',
      continue: 'Continuar',
      finish: 'Finalizar Lição'
    },
    waiwai: {
      congratulations: 'Eseru katú!',
      lessonComplete: 'Mbaé kuaá pîrî',
      yourScore: 'Ne pîtasawa:',
      vocabulary: 'Ewka kîrî',
      story: 'Pamîle',
      quiz: 'Wakri',
      completed: 'Pîrî',
      continue: 'Tîkse',
      finish: 'Mbaé kuaá pîrî'
    }
  };

  const t = translations[language];

  if (currentActivity === 'complete') {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg text-center">
        <div className="mb-8">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.congratulations}</h2>
          <p className="text-xl text-gray-600">{t.lessonComplete}</p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{t.yourScore}</h3>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${vocabularyCompleted ? 'bg-green-500' : 'bg-gray-300'}`}>
                <Star className={`w-6 h-6 ${vocabularyCompleted ? 'text-white' : 'text-gray-500'}`} />
              </div>
              <div className="text-sm font-medium">{t.vocabulary}</div>
              <div className={`text-xs ${vocabularyCompleted ? 'text-green-600' : 'text-gray-500'}`}>
                {vocabularyCompleted ? t.completed : 'Pendente'}
              </div>
            </div>
            
            <div className="text-center">
              <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${storyCompleted ? 'bg-green-500' : 'bg-gray-300'}`}>
                <Star className={`w-6 h-6 ${storyCompleted ? 'text-white' : 'text-gray-500'}`} />
              </div>
              <div className="text-sm font-medium">{t.story}</div>
              <div className={`text-xs ${storyCompleted ? 'text-green-600' : 'text-gray-500'}`}>
                {storyCompleted ? t.completed : 'Pendente'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center bg-blue-500">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium">{t.quiz}</div>
              <div className="text-xs text-blue-600">
                {finalScore}/{currentLesson.quiz.length}
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold text-gray-800">
            {Math.round(((vocabularyCompleted ? 30 : 0) + (storyCompleted ? 30 : 0) + (finalScore * 40 / currentLesson.quiz.length)))}%
          </div>
        </div>

        <button
          onClick={handleFinalComplete}
          className="w-full bg-green-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105"
        >
          {t.finish}
        </button>
      </div>
    );
  }

  if (currentActivity === 'vocabulary') {
    return (
      <VocabularyActivity
        vocabulary={currentLesson.vocabulary}
        language={language}
        onComplete={handleVocabularyComplete}
        onBack={onBack}
      />
    );
  }

  if (currentActivity === 'story') {
    return (
      <StoryActivity
        story={currentLesson.story}
        language={language}
        onComplete={handleStoryComplete}
        onBack={onBack}
      />
    );
  }

  if (currentActivity === 'quiz') {
    return (
      <QuizActivity
        questions={currentLesson.quiz}
        language={language}
        onComplete={handleQuizComplete}
        onBack={onBack}
      />
    );
  }

  return null;
};

export default LessonActivity;
