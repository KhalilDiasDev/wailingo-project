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
          waiwai: 'Maã',
          portuguese: 'O que?',
          pronunciation: 'ma-ã',
          image: '❓',
          audioDescription: {
            pt: 'Pergunta sobre alguma coisa',
            waiwai: 'Mbaé rã porandu'
          }
        },
        {
          id: 5,
          waiwai: 'Mamé',
          portuguese: 'Onde?',
          pronunciation: 'ma-mé',
          image: '📍',
          audioDescription: {
            pt: 'Pergunta sobre localização',
            waiwai: 'Tetama rã porandu'
          }
        }
      ],
      story: {
        title: {
          pt: 'A Primeira Saudação',
          waiwai: 'Wayamî Yepé Tenondé'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'Quando o sol nasceu pela primeira vez, os Wai Wai aprenderam a se cumprimentar.',
              waiwai: 'Kuaraxy yepé tenondé osema ramé, Wai Wai kuaá wayamî.'
            },
            image: '🌅',
            audioNarration: {
              pt: 'Esta é a história de como aprendemos a nos saudar',
              waiwai: 'Kîrî pamîle mîta kuaá wayamî'
            }
          },
          {
            id: 2,
            text: {
              pt: 'O espírito do sol ensinou: "Digam Wayamî quando se encontrarem".',
              waiwai: 'Kuaraxy yurara umukameú: "Ejapo Wayamî ejotopa ramé".'
            },
            image: '☀️',
            audioNarration: {
              pt: 'O sol nos ensinou a importância das saudações',
              waiwai: 'Kuaraxy yumukameú wayamî katú'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Desde então, todo Wai Wai saúda com alegria e respeito.',
              waiwai: 'Aramé guí, opaĩ Wai Wai wayamî ewyryry ukwawasawa irumu.'
            },
            image: '🤝',
            audioNarration: {
              pt: 'Assim começou nossa tradição de saudações respeitosas',
              waiwai: 'Amana yane wayamî tamuxî ukwawasawa'
            }
          }
        ],
        moralLesson: {
          pt: 'Saudar com respeito é o primeiro passo para uma boa conversa.',
          waiwai: 'Wayamî ukwawasawa nheenga katú reko tenondé.'
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
            pt: ['Wayamî', 'Wanî', 'Yewka', 'Maã'],
            waiwai: ['Olá', 'Tchau', 'Nome', 'O que?']
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
            pt: 'Qual palavra usamos para perguntar "Onde?"',
            waiwai: 'Mbaé ewka "Mamé" porandu arama?'
          },
          options: {
            pt: ['Maã', 'Mamé', 'Yewka', 'Wayamî'],
            waiwai: ['O que?', 'Onde?', 'Nome', 'Olá']
          },
          correctAnswer: 1,
          explanation: {
            pt: 'Mamé é usado para perguntar sobre localização.',
            waiwai: 'Mamé tetama rã porandu arama.'
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
            waiwai: 'Tuna soí yane temî ukana katú'
          }
        },
        {
          id: 7,
          waiwai: 'Kawí',
          portuguese: 'Macaco',
          pronunciation: 'ka-wí',
          image: '🐒',
          audioDescription: {
            pt: 'Animal inteligente que vive nas árvores',
            waiwai: 'Soí kuaá katú ywyrá kîrî wehxa'
          }
        },
        {
          id: 8,
          waiwai: 'Jaguar',
          portuguese: 'Onça',
          pronunciation: 'ja-guar',
          image: '🐆',
          audioDescription: {
            pt: 'Grande felino, rei da floresta',
            waiwai: 'Soí turusú, kaá tuwixawa'
          }
        },
        {
          id: 9,
          waiwai: 'Panapana',
          portuguese: 'Borboleta',
          pronunciation: 'pa-na-pa-na',
          image: '🦋',
          audioDescription: {
            pt: 'Inseto colorido que poliniza flores',
            waiwai: 'Soí pindá putira memewa'
          }
        },
        {
          id: 10,
          waiwai: 'Tukana',
          portuguese: 'Tucano',
          pronunciation: 'tu-ka-na',
          image: '🦜',
          audioDescription: {
            pt: 'Ave com bico grande e colorido',
            waiwai: 'Gwyra yú turusú pindá'
          }
        }
      ],
      story: {
        title: {
          pt: 'O Conselho dos Animais',
          waiwai: 'Soí Potarasawa'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'Os animais da floresta se reuniram para decidir quem seria o guardião.',
              waiwai: 'Kaá soí ojoaju murakisara jeporavogwér arama.'
            },
            image: '🌳',
            audioNarration: {
              pt: 'Todos os animais tinham algo importante para contribuir',
              waiwai: 'Opaĩ soí oguereko mbaé katú oipytywõ arama'
            }
          },
          {
            id: 2,
            text: {
              pt: 'O jaguar disse: "Sou forte e protejo a floresta dos perigos".',
              waiwai: 'Jaguar ojapo: "Ixé katú, amurakí kaá marã suí".'
            },
            image: '🐆',
            audioNarration: {
              pt: 'Cada animal mostrou suas qualidades únicas',
              waiwai: 'Mukũi soí oikuauka ikatú opakatu'
            }
          },
          {
            id: 3,
            text: {
              pt: 'O macaco falou: "Eu espalho sementes e ajudo a floresta crescer".',
              waiwai: 'Kawí ombeú: "Amusapí tîma, aipytywõ kaá ukupuku".'
            },
            image: '🐒',
            audioNarration: {
              pt: 'Todos perceberam que cada um tinha um papel importante',
              waiwai: 'Opaĩ okwawa mukũi oguereko tembiporu katú'
            }
          },
          {
            id: 4,
            text: {
              pt: 'Decidiram que todos juntos seriam os guardiões da floresta.',
              waiwai: 'Oporavo opaĩ irundé kaá murakisara ramo.'
            },
            image: '🤝',
            audioNarration: {
              pt: 'Unidos, eles protegeriam melhor sua casa',
              waiwai: 'Irundé, omurakí porã iteko'
            }
          }
        ],
        moralLesson: {
          pt: 'Cada ser tem um dom especial e juntos somos mais fortes.',
          waiwai: 'Mukũi mbaé oguereko katú ha irundé yaikatu porã.'
        }
      },
      quiz: [
        {
          id: 3,
          question: {
            pt: 'Qual animal é conhecido como o rei da floresta?',
            waiwai: 'Mbaé soí kaá tuwixawa?'
          },
          options: {
            pt: ['Jaguar', 'Kawí', 'Pira', 'Tukana'],
            waiwai: ['Onça', 'Macaco', 'Peixe', 'Tucano']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'O jaguar é respeitado como o rei da floresta pelos Wai Wai.',
            waiwai: 'Jaguar ukwawasawa kaá tuwixawa ramo Wai Wai.'
          }
        },
        {
          id: 4,
          question: {
            pt: 'Qual animal ajuda a floresta espalhando sementes?',
            waiwai: 'Mbaé soí oipytywõ kaá tîma musapí?'
          },
          options: {
            pt: ['Panapana', 'Kawí', 'Tukana', 'Pira'],
            waiwai: ['Borboleta', 'Macaco', 'Tucano', 'Peixe']
          },
          correctAnswer: 1,
          explanation: {
            pt: 'O macaco espalha sementes ajudando a floresta a crescer.',
            waiwai: 'Kawí omusapí tîma, kaá ukupuku arama.'
          }
        }
      ]
    },
    5: {
      vocabulary: [
        {
          id: 20,
          waiwai: 'Tamuxî',
          portuguese: 'Avô/Avó',
          pronunciation: 'ta-mu-xî',
          image: '👴',
          audioDescription: {
            pt: 'Pessoa mais velha da família, sábia e respeitada',
            waiwai: 'Tetama tuja, kuaá katú ukwawasawa'
          }
        },
        {
          id: 21,
          waiwai: 'Taýra',
          portuguese: 'Filho/Filha',
          pronunciation: 'ta-ý-ra',
          image: '👶',
          audioDescription: {
            pt: 'Criança da família, nosso futuro',
            waiwai: 'Tetama komo, yane ramoty'
          }
        },
        {
          id: 22,
          waiwai: 'Kyna',
          portuguese: 'Mulher',
          pronunciation: 'ky-na',
          image: '👩',
          audioDescription: {
            pt: 'Mulher da comunidade, força vital',
            waiwai: 'Tetama kyna, ikatu turusú'
          }
        },
        {
          id: 23,
          waiwai: 'Apyãba',
          portuguese: 'Homem',
          pronunciation: 'a-py-ã-ba',
          image: '👨',
          audioDescription: {
            pt: 'Homem da comunidade, protetor da família',
            waiwai: 'Tetama apyãba, tetama murakisara'
          }
        },
        {
          id: 24,
          waiwai: 'Kunhamukú',
          portuguese: 'Menina',
          pronunciation: 'ku-nha-mu-kú',
          image: '👧',
          audioDescription: {
            pt: 'Menina jovem, alegria da comunidade',
            waiwai: 'Kyna komo, tetama roryry'
          }
        }
      ],
      story: {
        title: {
          pt: 'A Sabedoria dos Avós',
          waiwai: 'Tamuxî Kuaá Katú'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'A avó Wai Wai reuniu todas as crianças para contar histórias antigas.',
              waiwai: 'Tamuxî kyna ojoaju opaĩ komo pamîle tuja ombeú arama.'
            },
            image: '👵',
            audioNarration: {
              pt: 'Os avós são os guardiões da nossa memória',
              waiwai: 'Tamuxî yane manduarisawa murakisara'
            }
          },
          {
            id: 2,
            text: {
              pt: 'Ela ensinou que cada pessoa da família tem um papel importante.',
              waiwai: 'Umukameú mukũi tetama mîrî oguereko tembiporu katú.'
            },
            image: '👨‍👩‍👧‍👦',
            audioNarration: {
              pt: 'A família é como uma grande árvore com muitos galhos',
              waiwai: 'Tetama ywyrá turusú ramo heta akã irumu'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Os pais protegem, as crianças aprendem, todos se ajudam.',
              waiwai: 'Tuware omurakí, komo ombaé kuaá, opaĩ oipytywõ.'
            },
            image: '🤱',
            audioNarration: {
              pt: 'Juntos formamos uma comunidade forte e unida',
              waiwai: 'Irundé yajapo tetama katú irundewasawa'
            }
          }
        ],
        moralLesson: {
          pt: 'A família é nossa primeira escola e nossa maior força.',
          waiwai: 'Tetama yane mboexaháwa tenondé ha yane ikatu turusú.'
        }
      },
      quiz: [
        {
          id: 9,
          question: {
            pt: 'Como chamamos os avós em Wai Wai?',
            waiwai: 'Mîta jajapopa tamuxî Wai Wai nheenga rupî?'
          },
          options: {
            pt: ['Tamuxî', 'Taýra', 'Kyna', 'Apyãba'],
            waiwai: ['Avô/Avó', 'Filho/Filha', 'Mulher', 'Homem']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'Tamuxî é a palavra respeitosa para avós em Wai Wai.',
            waiwai: 'Tamuxî ewka ukwawasawa tamuxî Wai Wai rupî.'
          }
        },
        {
          id: 10,
          question: {
            pt: 'Qual é o papel principal da família na cultura Wai Wai?',
            waiwai: 'Mbaé tetama tembiporu turusú Wai Wai kultura rupî?'
          },
          options: {
            pt: ['Ensinar e proteger', 'Apenas trabalhar', 'Só brincar', 'Nada importante'],
            waiwai: ['Mboexá ha murakí', 'Tembiapo nhõ', 'Nhemongeta nhõ', 'Mbaé eỹ katú']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'A família ensina tradições e protege uns aos outros.',
            waiwai: 'Tetama omboexá tamuxî ha omurakí.'
          }
        }
      ]
    },
    7: {
      vocabulary: [
        {
          id: 30,
          waiwai: 'Peteĩ',
          portuguese: 'Um',
          pronunciation: 'pe-te-ĩ',
          image: '1️⃣',
          audioDescription: {
            pt: 'Primeiro número, começo de tudo',
            waiwai: 'Papaha tenondé, opaĩ mbaé ñepyrũ'
          }
        },
        {
          id: 31,
          waiwai: 'Mokõi',
          portuguese: 'Dois',
          pronunciation: 'mo-kõi',
          image: '2️⃣',
          audioDescription: {
            pt: 'Segundo número, representando união',
            waiwai: 'Mokõiha papaha, irundewasawa jehaipyre'
          }
        },
        {
          id: 32,
          waiwai: 'Mbohapy',
          portuguese: 'Três',
          pronunciation: 'mbo-ha-py',
          image: '3️⃣',
          audioDescription: {
            pt: 'Terceiro número, símbolo de equilíbrio',
            waiwai: 'Mbohapyha papaha, tekojoja ra'angaitéva'
          }
        },
        {
          id: 33,
          waiwai: 'Irundy',
          portuguese: 'Quatro',
          pronunciation: 'i-run-dy',
          image: '4️⃣',
          audioDescription: {
            pt: 'Quarto número, representando os pontos cardeais',
            waiwai: 'Irundyha papaha, ára opakatu jehaipyre'
          }
        },
        {
          id: 34,
          waiwai: 'Po',
          portuguese: 'Cinco',
          pronunciation: 'po',
          image: '5️⃣',
          audioDescription: {
            pt: 'Quinto número, como os dedos de uma mão',
            waiwai: 'Poha papaha, po pysã ramo'
          }
        }
      ],
      story: {
        title: {
          pt: 'Os Cinco Irmãos Sagrados',
          waiwai: 'Po Kyñá Ukwawasawa'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'Há muito tempo, cinco irmãos viviam em harmonia na floresta.',
              waiwai: 'Yma rire, po kyñá oiko tekojojahápe kaá rupî.'
            },
            image: '🌟',
            audioNarration: {
              pt: 'Cada irmão representava um número sagrado',
              waiwai: 'Mukũi kyñá ojehaipyre papaha ukwawasawa'
            }
          },
          {
            id: 2,
            text: {
              pt: 'O primeiro era sábio, o segundo corajoso, o terceiro gentil.',
              waiwai: 'Tenondé kuaá katú, mokõiha py\'a katú, mbohapyha porã.'
            },
            image: '👥',
            audioNarration: {
              pt: 'Cada um tinha uma qualidade especial',
              waiwai: 'Mukũi oguereko katú ijamiré'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Juntos, eles ensinaram o povo a contar e a viver em paz.',
              waiwai: 'Irundé, omboexá ava papasawa ha tekojojahápe oiko.'
            },
            image: '🤝',
            audioNarration: {
              pt: 'Os números se tornaram parte da nossa cultura',
              waiwai: 'Papaha oiko yane kultura rupî'
            }
          }
        ],
        moralLesson: {
          pt: 'Os números nos ajudam a organizar e compreender o mundo.',
          waiwai: 'Papaha oipytywõ yaikuaa ha yambojeporã ko yvy.'
        }
      },
      quiz: [
        {
          id: 13,
          question: {
            pt: 'Como se diz "três" em Wai Wai?',
            waiwai: 'Mîta se "mbohapy" karaiwa nheenga rupî?'
          },
          options: {
            pt: ['Peteĩ', 'Mokõi', 'Mbohapy', 'Irundy'],
            waiwai: ['Um', 'Dois', 'Três', 'Quatro']
          },
          correctAnswer: 2,
          explanation: {
            pt: 'Mbohapy significa três e representa equilíbrio.',
            waiwai: 'Mbohapy he\'i mbohapy ha ojehaipyre tekojoja.'
          }
        },
        {
          id: 14,
          question: {
            pt: 'Quantos dedos temos em uma mão?',
            waiwai: 'Mboy pysã po pegua?'
          },
          options: {
            pt: ['Irundy', 'Po', 'Mbohapy', 'Mokõi'],
            waiwai: ['Quatro', 'Cinco', 'Três', 'Dois']
          },
          correctAnswer: 1,
          explanation: {
            pt: 'Po significa cinco, como os dedos de uma mão.',
            waiwai: 'Po he\'i po, po pysã ramo.'
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
