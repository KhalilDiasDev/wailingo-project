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
    3: {
      vocabulary: [
        {
          id: 11,
          waiwai: 'Pamîle',
          portuguese: 'História',
          pronunciation: 'pa-mî-le',
          image: '📖',
          audioDescription: {
            pt: 'Narrativa tradicional passada de geração em geração',
            waiwai: 'Nheenga tuja oime puku yane nhemongeta'
          }
        },
        {
          id: 12,
          waiwai: 'Tupana',
          portuguese: 'Espírito',
          pronunciation: 'tu-pa-na',
          image: '✨',
          audioDescription: {
            pt: 'Ser espiritual que habita a floresta',
            waiwai: 'Yurara kaá kîrî wehxa'
          }
        },
        {
          id: 13,
          waiwai: 'Kaá Yara',
          portuguese: 'Guardião da Floresta',
          pronunciation: 'ka-á ya-ra',
          image: '🌲',
          audioDescription: {
            pt: 'Protetor sagrado das matas',
            waiwai: 'Murakisara ukwawasawa kaá suí'
          }
        },
        {
          id: 14,
          waiwai: 'Yacy',
          portuguese: 'Lua',
          pronunciation: 'ya-cy',
          image: '🌙',
          audioDescription: {
            pt: 'A mãe noturna que ilumina nosso caminho',
            waiwai: 'Sy pytuna omuendy yane rape'
          }
        },
        {
          id: 15,
          waiwai: 'Kuaraxy',
          portuguese: 'Sol',
          pronunciation: 'kua-ra-xy',
          image: '☀️',
          audioDescription: {
            pt: 'O pai luminoso que traz vida',
            waiwai: 'Ru endy ome\'ẽ tekokwe'
          }
        }
      ],
      story: {
        title: {
          pt: 'A Lenda do Guardião da Floresta',
          waiwai: 'Kaá Yara Pamîle'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'Há muito tempo, quando o mundo era novo, nasceu Kaá Yara.',
              waiwai: 'Yma rire, yvy pyahu ramé, Kaá Yara oñoty.'
            },
            image: '🌍',
            audioNarration: {
              pt: 'Esta é a história sagrada do protetor da floresta',
              waiwai: 'Ko pamîle ukwawasawa kaá murakisara suí'
            }
          },
          {
            id: 2,
            text: {
              pt: 'Tupana lhe deu a missão de proteger todos os seres da floresta.',
              waiwai: 'Tupana ome\'ẽ tembiapo omurakí opaĩ kaá soí.'
            },
            image: '🛡️',
            audioNarration: {
              pt: 'Ele recebeu poderes especiais dos espíritos',
              waiwai: 'Oguereko katú ijamiré yurara suí'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Quando alguém respeita a floresta, Kaá Yara o abençoa.',
              waiwai: 'Mbaé oiporu porã kaá ramé, Kaá Yara omokirirĩ.'
            },
            image: '🙏',
            audioNarration: {
              pt: 'Mas quem desrespeita sofre consequências',
              waiwai: 'Ha maã naoiporu katú eỹ ramé osarái'
            }
          },
          {
            id: 4,
            text: {
              pt: 'Até hoje, ele caminha entre as árvores protegendo nossa casa.',
              waiwai: 'Ko\'ẽ rãka, ogwata ywyrá mbyte omurakí yane róga.'
            },
            image: '👣',
            audioNarration: {
              pt: 'Por isso respeitamos e cuidamos da floresta',
              waiwai: 'Upérumo yaiporu porã ha yajekwa kaá'
            }
          }
        ],
        moralLesson: {
          pt: 'Respeitar a natureza é honrar nossos ancestrais e garantir nosso futuro.',
          waiwai: 'Kaá iporu porã yane tamuxî ukwawasawa ha yane ramoty jerovia.'
        }
      },
      quiz: [
        {
          id: 5,
          question: {
            pt: 'Quem é Kaá Yara na cultura Wai Wai?',
            waiwai: 'Maã Kaá Yara Wai Wai kultura rupî?'
          },
          options: {
            pt: ['Guardião da Floresta', 'Um animal', 'Um rio', 'Uma montanha'],
            waiwai: ['Kaá murakisara', 'Soí', 'Paranã', 'Ywate']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'Kaá Yara é o guardião espiritual que protege a floresta.',
            waiwai: 'Kaá Yara yurara murakisara omurakí kaá.'
          }
        },
        {
          id: 6,
          question: {
            pt: 'O que acontece quando alguém respeita a floresta?',
            waiwai: 'Mbaé oiko mbaé oiporu porã kaá ramé?'
          },
          options: {
            pt: ['Recebe bênçãos', 'É punido', 'Nada acontece', 'Fica doente'],
            waiwai: ['Oguereko kirirĩ', 'Osarái', 'Mbaé eỹ', 'Oasy']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'Kaá Yara abençoa quem respeita e cuida da natureza.',
            waiwai: 'Kaá Yara omokirirĩ maã oiporu porã kaá.'
          }
        }
      ]
    },
    4: {
      vocabulary: [
        {
          id: 16,
          waiwai: 'Ixé',
          portuguese: 'Eu',
          pronunciation: 'i-xé',
          image: '👤',
          audioDescription: {
            pt: 'Pronome pessoal primeira pessoa',
            waiwai: 'Tetãgwa tenondé mbaé'
          }
        },
        {
          id: 17,
          waiwai: 'Endé',
          portuguese: 'Você',
          pronunciation: 'en-dé',
          image: '👥',
          audioDescription: {
            pt: 'Pronome pessoal segunda pessoa',
            waiwai: 'Tetãgwa mokõi mbaé'
          }
        },
        {
          id: 18,
          waiwai: 'Ojapo',
          portuguese: 'Fazer',
          pronunciation: 'o-ja-po',
          image: '🔨',
          audioDescription: {
            pt: 'Verbo que indica ação de fazer ou criar',
            waiwai: 'Nheenga ojehaipyre japo rã'
          }
        },
        {
          id: 19,
          waiwai: 'Aikwé',
          portuguese: 'Ter/Existir',
          pronunciation: 'ai-kwé',
          image: '✓',
          audioDescription: {
            pt: 'Verbo que indica existência ou posse',
            waiwai: 'Nheenga ojehaipyre mbaé oime rã'
          }
        },
        {
          id: 19.5,
          waiwai: 'Katú',
          portuguese: 'Bom',
          pronunciation: 'ka-tú',
          image: '👍',
          audioDescription: {
            pt: 'Adjetivo que indica qualidade positiva',
            waiwai: 'Mbaé porã ojehaipyre'
          }
        }
      ],
      story: {
        title: {
          pt: 'Aprendendo Nossa Língua',
          waiwai: 'Yane Nheenga Kuaá'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'Ixé kuaá - Eu aprendo nossa língua sagrada.',
              waiwai: 'Ixé akuaá yane nheenga ukwawasawa.'
            },
            image: '📚',
            audioNarration: {
              pt: 'Cada palavra carrega a sabedoria dos ancestrais',
              waiwai: 'Mukũi ewka oguereko tamuxî kuaá'
            }
          },
          {
            id: 2,
            text: {
              pt: 'Endé ojapo - Você faz parte desta tradição milenar.',
              waiwai: 'Endé rejapo ko tamuxî yma puku suí.'
            },
            image: '🤝',
            audioNarration: {
              pt: 'Nossa língua conecta passado e futuro',
              waiwai: 'Yane nheenga ojopy yma ha ramoty'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Aikwé katú - Existe bondade em preservar nossa forma de falar.',
              waiwai: 'Aikwé porã yaukana yane nheenga ramo.'
            },
            image: '💚',
            audioNarration: {
              pt: 'Falar Wai Wai é manter viva nossa identidade',
              waiwai: 'Nheenga Wai Wai rupî yaikóke yane tetã'
            }
          }
        ],
        moralLesson: {
          pt: 'Nossa língua é a alma do nosso povo, preservá-la é preservar quem somos.',
          waiwai: 'Yane nheenga yane tetã pyã, yaukana yane reko ukana.'
        }
      },
      quiz: [
        {
          id: 7,
          question: {
            pt: 'Como se diz "Eu" em Wai Wai?',
            waiwai: 'Mîta se "Ixé" karaiwa nheenga rupî?'
          },
          options: {
            pt: ['Ixé', 'Endé', 'Ojapo', 'Aikwé'],
            waiwai: ['Eu', 'Você', 'Fazer', 'Existir']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'Ixé é o pronome pessoal da primeira pessoa em Wai Wai.',
            waiwai: 'Ixé tetãgwa tenondé Wai Wai nheenga rupî.'
          }
        },
        {
          id: 8,
          question: {
            pt: 'Qual palavra significa "bom" em Wai Wai?',
            waiwai: 'Mbaé ewka he\'i "porã" Wai Wai rupî?'
          },
          options: {
            pt: ['Ojapo', 'Katú', 'Aikwé', 'Endé'],
            waiwai: ['Fazer', 'Bom', 'Existir', 'Você']
          },
          correctAnswer: 1,
          explanation: {
            pt: 'Katú significa bom e indica qualidade positiva.',
            waiwai: 'Katú he\'i porã mbaé katú ojehaipyre.'
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
    6: {
      vocabulary: [
        {
          id: 25,
          waiwai: 'Pohã',
          portuguese: 'Remédio/Planta medicinal',
          pronunciation: 'po-hã',
          image: '🌿',
          audioDescription: {
            pt: 'Planta que cura doenças e traz saúde',
            waiwai: 'Ka\'a pohã omopotĩ ha ome\'ẽ katú'
          }
        },
        {
          id: 26,
          waiwai: 'Pajé',
          portuguese: 'Curandeiro',
          pronunciation: 'pa-jé',
          image: '👨‍⚕️',
          audioDescription: {
            pt: 'Sábio que conhece os segredos das plantas',
            waiwai: 'Kuaá katú pohã kuarusawa'
          }
        },
        {
          id: 27,
          waiwai: 'Ka\'a pohã',
          portuguese: 'Erva medicinal',
          pronunciation: 'ka-á po-hã',
          image: '🍃',
          audioDescription: {
            pt: 'Folha que possui propriedades curativas',
            waiwai: 'Rová oguereko katú omopotĩ arama'
          }
        },
        {
          id: 28,
          waiwai: 'Mborayu',
          portuguese: 'Amor/Cuidado',
          pronunciation: 'mbo-ra-yu',
          image: '💚',
          audioDescription: {
            pt: 'Sentimento de amor e cuidado com os outros',
            waiwai: 'Py\'a katú ajekwa ambowé arama'
          }
        },
        {
          id: 29,
          waiwai: 'Tekokwe',
          portuguese: 'Vida/Saúde',
          pronunciation: 'te-ko-kwe',
          image: '❤️',
          audioDescription: {
            pt: 'A força vital que mantém todos vivos',
            waiwai: 'Ikatu turusú oikóke opaĩ mbaé'
          }
        }
      ],
      story: {
        title: {
          pt: 'A Sabedoria do Pajé',
          waiwai: 'Pajé Kuaá Katú'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'O velho pajé conhecia cada planta da floresta e seus poderes.',
              waiwai: 'Pajé tuja okwawa opaĩ ka\'a pohã ha ikatú.'
            },
            image: '🧙',
            audioNarration: {
              pt: 'Seu conhecimento foi passado através de gerações',
              waiwai: 'Ikuaá oime puku tetã rupî'
            }
          },
          {
            id: 2,
            text: {
              pt: 'Ele ensinou: "Cada folha é um presente dos espíritos da floresta".',
              waiwai: 'Umukameú: "Mukũi rová ome\'ẽ porã yurara kaá suí".'
            },
            image: '🎁',
            audioNarration: {
              pt: 'As plantas são sagradas e devem ser respeitadas',
              waiwai: 'Ka\'a pohã ukwawasawa ha oiporu porã arama'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Com mborayu preparava os remédios que curavam o povo.',
              waiwai: 'Mborayu irumu ojapo pohã omopotĩ tetã.'
            },
            image: '💊',
            audioNarration: {
              pt: 'O amor e o cuidado fazem parte da cura',
              waiwai: 'Mborayu ha ajekwa omopotĩ katú'
            }
          },
          {
            id: 4,
            text: {
              pt: 'Hoje preservamos este conhecimento para manter viva nossa tekokwe.',
              waiwai: 'Ko\'ẽ yaukana ko kuaá yaikóke yane tekokwe.'
            },
            image: '🌱',
            audioNarration: {
              pt: 'A medicina tradicional é parte de nossa identidade',
              waiwai: 'Pohã tamuxî yane reko pehẽ'
            }
          }
        ],
        moralLesson: {
          pt: 'O conhecimento das plantas medicinais é um tesouro que devemos preservar.',
          waiwai: 'Ka\'a pohã kuaá mbaé porã katú yaukana arama.'
        }
      },
      quiz: [
        {
          id: 11,
          question: {
            pt: 'Quem conhece os segredos das plantas medicinais?',
            waiwai: 'Maã okwawa ka\'a pohã kuarusawa?'
          },
          options: {
            pt: ['Pajé', 'Criança', 'Animal', 'Rio'],
            waiwai: ['Curandeiro', 'Komo', 'Soí', 'Paranã']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'O pajé é o sábio que conhece as propriedades curativas das plantas.',
            waiwai: 'Pajé kuaá katú okwawa ka\'a pohã omopotĩ arama.'
          }
        },
        {
          id: 12,
          question: {
            pt: 'O que significa "mborayu"?',
            waiwai: 'Mbaé he\'i "mborayu"?'
          },
          options: {
            pt: ['Amor e cuidado', 'Raiva', 'Medo', 'Fome'],
            waiwai: ['Amor ha ajekwa', 'Pochy', 'Kyhyje', 'Akaru katu']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'Mborayu significa amor e cuidado, essenciais para a cura.',
            waiwai: 'Mborayu he\'i amor ha ajekwa, katú omopotĩ arama.'
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
            waiwai: 'Mbohapyha papaha, tekojoja ra\'angaitéva'
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
    },
    8: {
      vocabulary: [
        {
          id: 35,
          waiwai: 'Poraé',
          portuguese: 'Ritual/Cerimônia',
          pronunciation: 'po-ra-é',
          image: '🎭',
          audioDescription: {
            pt: 'Celebração sagrada da comunidade',
            waiwai: 'Tetã poraé ukwawasawa'
          }
        },
        {
          id: 36,
          waiwai: 'Yurara',
          portuguese: 'Espírito ancestral',
          pronunciation: 'yu-ra-ra',
          image: '👻',
          audioDescription: {
            pt: 'Alma dos antepassados que nos guia',
            waiwai: 'Tamuxî pyã oikuauka yane rape'
          }
        },
        {
          id: 37,
          waiwai: 'Maracá',
          portuguese: 'Chocalho sagrado',
          pronunciation: 'ma-ra-cá',
          image: '🥁',
          audioDescription: {
            pt: 'Instrumento ritual para chamar os espíritos',
            waiwai: 'Mbaé poraé ojapopa yurara'
          }
        },
        {
          id: 38,
          waiwai: 'Nhembo\'é',
          portuguese: 'Oração/Canto sagrado',
          pronunciation: 'nhem-bo-é',
          image: '🎵',
          audioDescription: {
            pt: 'Canto que conecta com o divino',
            waiwai: 'Purahéi ojopy Tupana irumu'
          }
        },
        {
          id: 39,
          waiwai: 'Okáara',
          portuguese: 'Fogo sagrado',
          pronunciation: 'o-ká-a-ra',
          image: '🔥',
          audioDescription: {
            pt: 'Chama que purifica e ilumina',
            waiwai: 'Tataendy opotĩ ha omuendy'
          }
        }
      ],
      story: {
        title: {
          pt: 'O Grande Ritual da Colheita',
          waiwai: 'Poraé Turusú Temîu Jepoaka'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'Quando a lua cheia ilumina a aldeia, o povo se reúne para o ritual.',
              waiwai: 'Yacy purawasuha omuendy tawa ramé, tetã ojoaju poraé arama.'
            },
            image: '🌕',
            audioNarration: {
              pt: 'Esta é nossa cerimônia mais importante do ano',
              waiwai: 'Ko yane poraé katú turusú aka suí'
            }
          },
          {
            id: 2,
            text: {
              pt: 'O pajé acende o okáara e entoa o nhembo\'é ancestral.',
              waiwai: 'Pajé omono okáara ha opurahéi nhembo\'é tamuxî suí.'
            },
            image: '🔥',
            audioNarration: {
              pt: 'O fogo sagrado conecta terra e céu',
              waiwai: 'Okáara ukwawasawa ojopy yvy ha ywága'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Com o maracá, chamamos os yurara para abençoar a colheita.',
              waiwai: 'Maracá irumu jajapopa yurara omokirirĩ temîu jepoaka.'
            },
            image: '🥁',
            audioNarration: {
              pt: 'Os ancestrais respondem com sua presença espiritual',
              waiwai: 'Tamuxî ombohovái ipy\'a yurara irumu'
            }
          },
          {
            id: 4,
            text: {
              pt: 'Dançamos até o amanhecer, celebrando a vida e a comunhão.',
              waiwai: 'Jajeroky kuaraxy resewa peve, japoraé tekokwe ha irundewasawa.'
            },
            image: '💃',
            audioNarration: {
              pt: 'O ritual renova nossa conexão com a terra e entre nós',
              waiwai: 'Poraé omoñepyrũ pyahu yane ojopy yvy ha yane mbyte'
            }
          }
        ],
        moralLesson: {
          pt: 'Os rituais mantêm viva nossa cultura e fortalecem os laços comunitários.',
          waiwai: 'Poraé oikóke yane kultura ha omopyã tetã irundewasawa.'
        }
      },
      quiz: [
        {
          id: 15,
          question: {
            pt: 'O que é usado para chamar os espíritos ancestrais?',
            waiwai: 'Mbaé oiporu ojapopa yurara tamuxî?'
          },
          options: {
            pt: ['Maracá', 'Arco', 'Cesta', 'Rede'],
            waiwai: ['Chocalho sagrado', 'Wu\'y', 'Aturá', 'Ini']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'O maracá é o instrumento sagrado usado para chamar os espíritos.',
            waiwai: 'Maracá mbaé ukwawasawa ojapopa yurara arama.'
          }
        },
        {
          id: 16,
          question: {
            pt: 'O que representa o okáara no ritual?',
            waiwai: 'Mbaé ojehaipyre okáara poraé rupî?'
          },
          options: {
            pt: ['Purificação e iluminação', 'Apenas calor', 'Medo', 'Escuridão'],
            waiwai: ['Potĩsawa ha endy', 'Akú nhõ', 'Kyhyje', 'Pytuna']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'O fogo sagrado purifica e ilumina, conectando terra e céu.',
            waiwai: 'Okáara ukwawasawa opotĩ ha omuendy, ojopy yvy ha ywága.'
          }
        }
      ]
    },
    9: {
      vocabulary: [
        {
          id: 40,
          waiwai: 'Piná',
          portuguese: 'Cor/Colorido',
          pronunciation: 'pi-ná',
          image: '🎨',
          audioDescription: {
            pt: 'As cores que a natureza nos mostra',
            waiwai: 'Piná kaá oikuauka yane arama'
          }
        },
        {
          id: 41,
          waiwai: 'Owý',
          portuguese: 'Verde',
          pronunciation: 'o-wý',
          image: '💚',
          audioDescription: {
            pt: 'Cor da floresta viva e das folhas',
            waiwai: 'Piná kaá tekokwe ha rová suí'
          }
        },
        {
          id: 42,
          waiwai: 'Pirá',
          portuguese: 'Vermelho',
          pronunciation: 'pi-rá',
          image: '❤️',
          audioDescription: {
            pt: 'Cor do fogo e da força vital',
            waiwai: 'Piná tata ha tekokwe ikatu suí'
          }
        },
        {
          id: 43,
          waiwai: 'Tobý',
          portuguese: 'Azul',
          pronunciation: 'to-bý',
          image: '💙',
          audioDescription: {
            pt: 'Cor do céu e das águas profundas',
            waiwai: 'Piná ywága ha y pukú suí'
          }
        },
        {
          id: 44,
          waiwai: 'Jutaí',
          portuguese: 'Amarelo',
          pronunciation: 'ju-ta-í',
          image: '💛',
          audioDescription: {
            pt: 'Cor do sol e das frutas maduras',
            waiwai: 'Piná kuaraxy ha ywa syry suí'
          }
        }
      ],
      story: {
        title: {
          pt: 'As Cores da Criação',
          waiwai: 'Piná Ojejapo Guara'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'No começo, o mundo era sem cores, apenas sombras.',
              waiwai: 'Ñepyrũ rupî, yvy piná eỹ, pytuna nhõ.'
            },
            image: '⬛',
            audioNarration: {
              pt: 'Então Tupana decidiu pintar a criação',
              waiwai: 'Aramé Tupana oporavo omopiná ojejapo guara'
            }
          },
          {
            id: 2,
            text: {
              pt: 'Primeiro veio o owý, pintando as árvores e a vida.',
              waiwai: 'Tenondé ou owý, omopiná ywyrá ha tekokwe.'
            },
            image: '💚',
            audioNarration: {
              pt: 'O verde trouxe crescimento e esperança',
              waiwai: 'Owý oguerá ukupuku ha ejeroviasawa'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Depois o pirá deu paixão, o tobý trouxe paz, o jutaí alegria.',
              waiwai: 'Oúpe pirá ome\'ẽ porasyry, tobý oguerá tekojojahápe, jutaí roryry.'
            },
            image: '🌈',
            audioNarration: {
              pt: 'Cada cor tinha um significado e propósito',
              waiwai: 'Mukũi piná oguereko he\'i ha mbaé ojapo arama'
            }
          },
          {
            id: 4,
            text: {
              pt: 'Assim nasceram as cores que hoje enchem nosso mundo de beleza.',
              waiwai: 'Upéixa oñoty piná ko\'ẽ omomonhe yane yvy porãeterã irumu.'
            },
            image: '🎨',
            audioNarration: {
              pt: 'E aprendemos a ver a vida através das cores',
              waiwai: 'Ha yakuaá yamaé tekokwe piná rupî'
            }
          }
        ],
        moralLesson: {
          pt: 'As cores da natureza nos ensinam a apreciar a diversidade da vida.',
          waiwai: 'Kaá piná yumukameú yambojerovia tekokwe joavy.'
        }
      },
      quiz: [
        {
          id: 17,
          question: {
            pt: 'Qual cor representa a floresta e a vida?',
            waiwai: 'Mbaé piná ojehaipyre kaá ha tekokwe?'
          },
          options: {
            pt: ['Owý (Verde)', 'Pirá (Vermelho)', 'Tobý (Azul)', 'Jutaí (Amarelo)'],
            waiwai: ['Verde', 'Vermelho', 'Azul', 'Amarelo']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'O verde (owý) é a cor da floresta viva e das folhas.',
            waiwai: 'Owý piná kaá tekokwe ha rová suí.'
          }
        },
        {
          id: 18,
          question: {
            pt: 'Que cor Tupana usou primeiro para pintar o mundo?',
            waiwai: 'Mbaé piná Tupana oiporu tenondé omopiná yvy?'
          },
          options: {
            pt: ['Owý', 'Pirá', 'Tobý', 'Jutaí'],
            waiwai: ['Verde', 'Vermelho', 'Azul', 'Amarelo']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'O verde foi a primeira cor, trazendo vida e crescimento.',
            waiwai: 'Owý tenondé piná, oguerá tekokwe ha ukupuku.'
          }
        }
      ]
    },
    10: {
      vocabulary: [
        {
          id: 45,
          waiwai: 'Temîu',
          portuguese: 'Comida',
          pronunciation: 'te-mî-u',
          image: '🍽️',
          audioDescription: {
            pt: 'Alimento que nutre nosso corpo e alma',
            waiwai: 'Mbaé omonguetá yane rete ha yane pyã'
          }
        },
        {
          id: 46,
          waiwai: 'Maniáka',
          portuguese: 'Mandioca',
          pronunciation: 'ma-ni-á-ka',
          image: '🌾',
          audioDescription: {
            pt: 'Raiz sagrada, base da nossa alimentação',
            waiwai: 'Typykwera ukwawasawa, yane temîu rupigwa'
          }
        },
        {
          id: 47,
          waiwai: 'Beiju',
          portuguese: 'Pão de mandioca',
          pronunciation: 'bei-ju',
          image: '🫓',
          audioDescription: {
            pt: 'Alimento tradicional feito com farinha de mandioca',
            waiwai: 'Temîu tamuxî maniáka uí suí ojejapo'
          }
        },
        {
          id: 48,
          waiwai: 'Tikãnga',
          portuguese: 'Mingau',
          pronunciation: 'ti-kã-nga',
          image: '🥣',
          audioDescription: {
            pt: 'Bebida nutritiva de frutas e raízes',
            waiwai: 'Kãuga katú ywa ha typykwera suí'
          }
        },
        {
          id: 49,
          waiwai: 'Moka\'e',
          portuguese: 'Frutas da floresta',
          pronunciation: 'mo-ka-é',
          image: '🍇',
          audioDescription: {
            pt: 'Presentes doces que a floresta nos dá',
            waiwai: 'Ome\'ẽ porã heíra kaá yume\'ẽ yane arama'
          }
        }
      ],
      story: {
        title: {
          pt: 'O Banquete da Comunidade',
          waiwai: 'Tetã Temîu Poraeté'
        },
        parts: [
          {
            id: 1,
            text: {
              pt: 'Todo ciclo da lua, a comunidade se reúne para compartilhar alimentos.',
              waiwai: 'Opaĩ yacy jere, tetã ojoaju omonguetá temîu arama.'
            },
            image: '🌙',
            audioNarration: {
              pt: 'Esta é nossa tradição de união e fartura',
              waiwai: 'Ko yane tamuxî irundewasawa ha heta temîu'
            }
          },
          {
            id: 2,
            text: {
              pt: 'As mulheres preparam o beiju dourado com maniáka sagrada.',
              waiwai: 'Kyná ojapo beiju jutaí maniáka ukwawasawa irumu.'
            },
            image: '👩‍🍳',
            audioNarration: {
              pt: 'Cada prato é feito com amor e técnica ancestral',
              waiwai: 'Mukũi temîu ojejapo mborayu ha tamuxî kuaá irumu'
            }
          },
          {
            id: 3,
            text: {
              pt: 'Os homens trazem pira fresco e moka\'é da floresta.',
              waiwai: 'Apyãba oguerá pira pyahu ha moka\'é kaá suí.'
            },
            image: '🎣',
            audioNarration: {
              pt: 'A natureza provê tudo que precisamos',
              waiwai: 'Kaá ome\'ẽ opaĩ mbaé yaikotewé'
            }
          },
          {
            id: 4,
            text: {
              pt: 'Juntos, compartilhamos não apenas comida, mas histórias e risos.',
              waiwai: 'Irundé, jamono\'ó temîu nhõ eỹ, pamîle ha puka irumu.'
            },
            image: '🤝',
            audioNarration: {
              pt: 'O banquete alimenta corpo e fortalece laços',
              waiwai: 'Temîu poraeté omonguetá rete ha omopyã irundewasawa'
            }
          }
        ],
        moralLesson: {
          pt: 'Compartilhar alimentos é compartilhar vida, amor e tradição.',
          waiwai: 'Temîu mono\'ó he\'i tekokwe, mborayu ha tamuxî mono\'ó.'
        }
      },
      quiz: [
        {
          id: 19,
          question: {
            pt: 'Qual é o alimento base da culinária Wai Wai?',
            waiwai: 'Mbaé temîu rupigwa Wai Wai temîu arama?'
          },
          options: {
            pt: ['Maniáka', 'Pira', 'Moka\'é', 'Tikãnga'],
            waiwai: ['Mandioca', 'Peixe', 'Frutas', 'Mingau']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'A mandioca (maniáka) é a raiz sagrada, base da alimentação Wai Wai.',
            waiwai: 'Maniáka typykwera ukwawasawa, Wai Wai temîu rupigwa.'
          }
        },
        {
          id: 20,
          question: {
            pt: 'O que o banquete comunitário representa?',
            waiwai: 'Mbaé tetã temîu poraeté ojehaipyre?'
          },
          options: {
            pt: ['União e tradição', 'Apenas comer', 'Competição', 'Solidão'],
            waiwai: ['Irundewasawa ha tamuxî', 'Karu nhõ', 'Joja', 'Oimeraẽ']
          },
          correctAnswer: 0,
          explanation: {
            pt: 'O banquete fortalece os laços comunitários e mantém vivas as tradições.',
            waiwai: 'Temîu poraeté omopyã tetã irundewasawa ha oikóke tamuxî.'
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
