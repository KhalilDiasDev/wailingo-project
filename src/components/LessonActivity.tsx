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

  // Dados expandidos das lições em Wai Wai
 const lessonData = {
  1: {
    vocabulary: [
      {
        id: 1,
        waiwai: "Hay",
        portuguese: "Olá",
        pronunciation: "ha-y",
        image: "👋",
        audioDescription: {
          pt: "Cumprimento usado para iniciar uma conversa",
          waiwai: "Hay wape tîse komo pötîro"
        }
      },
      {
        id: 2,
        waiwai: "Amñe hara",
        portuguese: "Tchau",
        pronunciation: "am-nhê ha-ra",
        image: "👋",
        audioDescription: {
          pt: "Despedida comum",
          waiwai: "Kaxamî tîse amñe hara"
        }
      },
      {
        id: 3,
        waiwai: "Osotî",
        portuguese: "Nome",
        pronunciation: "o-so-tî",
        image: "🪶",
        audioDescription: {
          pt: "Palavra usada para dizer ou perguntar o nome",
          waiwai: "Osotî tîse wîya komo amok"
        }
      }
    ],

    story: {
      title: "Primeiros Encontros",
      parts: [
        {
          waiwai: "Hay! Këtîmtapotaretopo ahnoro nukukmarîro.",
          portuguese: "Olá! É um prazer cumprimentar você."
        },
        {
          waiwai: "Osotî komo? — Meu nome é Yawari.",
          portuguese: "Qual é o seu nome? — Meu nome é Yawari."
        },
        {
          waiwai: "Amñe hara! Kiwces haka kacho kwacarin ya.",
          portuguese: "Tchau! Uma despedida amigável para você."
        }
      ],
      moral: {
        waiwai: "Saudações abrem caminho para boas relações.",
        portuguese: "Cumprimentar cria laços e aproxima as pessoas."
      }
    },

    quiz: [
      {
        question: "Como se diz 'Olá' em Waiwai?",
        alternatives: ["Hay", "Osotî", "Amñe hara"],
        answer: 0,
        explanation: "‘Hay’ é usado como ‘Olá’ em Waiwai."
      },
      {
        question: "O que significa 'Osotî'?",
        alternatives: ["Despedida amigável", "Nome", "Cumprimento"],
        answer: 1,
        explanation: "'Osotî' significa 'nome'."
      },
      {
        question: "Qual é a despedida amigável?",
        alternatives: [
          "Kiwces haka kacho kwacarin ya.",
          "Hay",
          "Ketîmtapotaretopo ahnoro nukukmarîro"
        ],
        answer: 0,
        explanation: "É a frase longa de despedida calorosa entre amigos."
      }
    ]
  },

  // -----------------------------
  // LIÇÃO 2 corrigida e padronizada
  // -----------------------------
  2: {
    vocabulary: [
      {
        id: 1,
        waiwai: "Cewne",
        portuguese: "Um",
        pronunciation: "cew-ne",
        image: "1️⃣",
        audioDescription: {
          pt: "Número um",
          waiwai: "Yukuk cehne"
        }
      },
      {
        id: 2,
        waiwai: "Asakî",
        portuguese: "Dois",
        pronunciation: "a-sa-kî",
        image: "2️⃣",
        audioDescription: {
          pt: "Número dois",
          waiwai: "Yukuk asakî"
        }
      },
      {
        id: 3,
        waiwai: "Osorwaw",
        portuguese: "Três",
        pronunciation: "o-sor-waw",
        image: "3️⃣",
        audioDescription: {
          pt: "Número três",
          waiwai: "Yukuk osorwaw"
        }
      },
      {
        id: 4,
        waiwai: "Kwatru",
        portuguese: "Quatro",
        pronunciation: "kwa-tru",
        image: "4️⃣",
        audioDescription: {
          pt: "Número quatro",
          waiwai: "Yukuk kwatru"
        }
      },
      {
        id: 5,
        waiwai: "Sinku",
        portuguese: "Cinco",
        pronunciation: "sin-ku",
        image: "5️⃣",
        audioDescription: {
          pt: "Número cinco",
          waiwai: "Yukuk sinku"
        }
      }
    ],

    story: {
      title: {
        pt: "Os Cinco Irmãos Sagrados",
        waiwai: "Sinku komo etaknore"
      },
      parts: [
        {
          id: 1,
          text: {
            pt: "Há muito tempo, cinco irmãos viviam em harmonia na floresta.",
            waiwai: "Pahxa tî nenmayatkeñe sinku komo etaknore comota cew."
          },
          image: "🌳",
          audioNarration: {
            pt: "Os cinco irmãos viviam em paz",
            waiwai: "Sinku etaknore kiŕwanhe nenmayatkeñe"
          }
        },
        {
          id: 2,
          text: {
            pt: "O primeiro era sábio, o segundo corajoso, o terceiro gentil.",
            waiwai: "Yihcirî me tî xakñe yîhtînoñe..."
          },
          image: "✨",
          audioNarration: {
            pt: "Cada irmão tinha um dom especial",
            waiwai: "Etaknore komo tî awakîte"
          }
        },
        {
          id: 3,
          text: {
            pt: "Juntos, eles ensinaram o povo a contar e a viver em paz.",
            waiwai: "Itore Yîhcampokano ñiratkeñe tooto komo..."
          },
          image: "🤝",
          audioNarration: {
            pt: "Os irmãos ensinaram números ao povo",
            waiwai: "Sinku etaknore yukuknomatopo wîhcimakaye"
          }
        }
      ],
      moralLesson: {
        pt: "Os números nos ajudam a organizar e compreender o mundo.",
        waiwai: "Yukuknomatopo nasî lakronomañe..."
      }
    },

    quiz: [
      {
        id: 1,
        question: {
          pt: 'Como se diz "três" em Waiwai?',
          waiwai: 'Mîta se "três" Waiwai nheenga rupî?'
        },
        options: {
          pt: ["Cewne", "Asakî", "Osorwaw", "Kwatru"],
          waiwai: ["Um", "Dois", "Três", "Quatro"]
        },
        correctAnswer: 2,
        explanation: {
          pt: '"Osorwaw" representa equilíbrio.',
          waiwai: "Osorwaw cehsom nasî etîmereno me."
        }
      }
    ]
  },

  // -----------------------------
  // LIÇÃO 3 — mantida como você enviou
  // -----------------------------
  3: {
    vocabulary: [
      {
        id: 1,
        waiwai: "Kasaray / Naatî kasaray me",
        portuguese: "Remédio / Planta medicinal",
        pronunciation: "ka-sa-ra-i / naa-tî",
        image: "🌿",
        audioDescription: {
          pt: "Nome dado aos remédios tradicionais e plantas medicinais",
          waiwai: "Kasaray tîse rîremîto..."
        }
      },
      {
        id: 2,
        waiwai: "Tîhyasîrî",
        portuguese: "Curandeiro / Pajé",
        pronunciation: "tî-hya-sî-rî",
        image: "🧙‍♂️",
        audioDescription: {
          pt: "A pessoa que conhece e prepara remédios tradicionais",
          waiwai: "Tîhyasîrî me naatî kasaray..."
        }
      },
      {
        id: 3,
        waiwai: "Naatî casaray me cehsom",
        portuguese: "Erva medicinal",
        pronunciation: "naa-tî ka-sa-ray",
        image: "🍃",
        audioDescription: {
          pt: "Plantas usadas para curar doenças",
          waiwai: "Naatî casaray cehsom..."
        }
      },
      {
        id: 4,
        waiwai: "Yîpînîñaw",
        portuguese: "Amor / Cuidado",
        pronunciation: "yî-pî-nî-naw",
        image: "❤️",
        audioDescription: {
          pt: "Expressa cuidado e zelo",
          waiwai: "Yîpînîñaw me kesehtînotopo..."
        }
      },
      {
        id: 5,
        waiwai: "Mehxarono",
        portuguese: "Vida / Saúde",
        pronunciation: "meh-xa-ro-no",
        image: "🌱",
        audioDescription: {
          pt: "Representa saúde e vitalidade",
          waiwai: "Mehxarono me kehtopo..."
        }
      }
    ],

    story: {
      title: {
        pt: "A Sabedoria do Pajé",
        waiwai: "Yas komo nîhtînorî"
      },
      parts: [
        {
          id: 1,
          text: {
            pt: "O velho pajé conhecia cada planta da floresta.",
            waiwai: "Yas me cehtopo komo..."
          },
          image: "🌿"
        },
        {
          id: 2,
          text: {
            pt: "Ele ensinou: Cada folha é um presente dos espíritos.",
            waiwai: "Noro nîhcamhokay..."
          },
          image: "🍃"
        }
      ],
      moralLesson: {
        pt: "O conhecimento das plantas é um tesouro.",
        waiwai: "Kînîhtînorî naatî kasaray..."
      }
    },

    quiz: [
      {
        id: 1,
        question: {
          pt: "Quem conhece os segredos das plantas?",
          waiwai: "Onoke nîhtînoya ekatîmnînhîrî?"
        },
        options: {
          pt: ["Pajé", "Criança", "Animal", "Rio"],
          waiwai: ["Yasî", "Rikomo", "Tanhamya", "Eepu"]
        },
        correctAnswer: 0,
        explanation: {
          pt: "O pajé conhece as propriedades curativas.",
          waiwai: "Yasî yîhtînoñe..."
        }
      }
    ]
  }
};


  const currentLesson = lessonData[lessonId as keyof typeof lessonData];

  if (!currentLesson) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {language === 'pt' ? 'Lição em desenvolvimento' : 'Mbaé kuaá ojejapo gua'}
        </h2>
        <p className="text-gray-600 mb-6">
          {language === 'pt' ? 
            'Esta lição ainda está sendo preparada. Volte em breve!' : 
            'Ko mbaé kuaá ojejapo gua. Eju peve!'}
        </p>
        <button
          onClick={onBack}
          className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
        >
          {language === 'pt' ? 'Voltar' : 'Guevi'}
        </button>
      </div>
    );
  }

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
