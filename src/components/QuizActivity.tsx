
import React, { useState } from 'react';
import { CheckCircle, X, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: {
    pt: string;
    waiwai: string;
  };
  options: {
    pt: string[];
    waiwai: string[];
  };
  correctAnswer: number;
  explanation: {
    pt: string;
    waiwai: string;
  };
}

interface QuizActivityProps {
  questions: Question[];
  language: 'pt' | 'waiwai';
  onComplete: (score: number) => void;
  onBack: () => void;
}

const QuizActivity: React.FC<QuizActivityProps> = ({ questions, language, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      onComplete(score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0));
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  const translations = {
    pt: {
      question: 'Pergunta',
      of: 'de',
      next: 'Próxima',
      showAnswer: 'Ver Resposta',
      correct: 'Correto!',
      incorrect: 'Incorreto',
      explanation: 'Explicação:',
      back: 'Voltar'
    },
    waiwai: {
      question: 'Wakri',
      of: 'komo',
      next: 'Kîn mîrî',
      showAnswer: 'Amna kîrî',
      correct: 'Eseru!',
      incorrect: 'Kama eseru',
      explanation: 'Tawya:',
      back: 'Wanî'
    }
  };

  const t = translations[language];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
        >
          <RotateCcw size={20} />
          {t.back}
        </button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {t.question} {currentQuestion + 1} {t.of} {questions.length}
          </h2>
          <div className="bg-green-100 px-3 py-1 rounded-full text-green-700 font-medium">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {currentQ.question[language]}
        </h3>

        <div className="space-y-3">
          {currentQ.options[language].map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                selectedAnswer === index
                  ? showResult
                    ? index === currentQ.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-red-500 bg-red-50 text-red-700'
                    : 'border-blue-500 bg-blue-50 text-blue-700'
                  : showResult && index === currentQ.correctAnswer
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-300 hover:border-gray-400 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {showResult && (
                  <div>
                    {index === currentQ.correctAnswer ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : selectedAnswer === index ? (
                      <X className="w-5 h-5 text-red-600" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className={`p-4 rounded-xl mb-6 ${
          isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <div className={`font-bold text-lg mb-2 ${
            isCorrect ? 'text-green-700' : 'text-red-700'
          }`}>
            {isCorrect ? t.correct : t.incorrect}
          </div>
          <div className="text-gray-700">
            <strong>{t.explanation}</strong> {currentQ.explanation[language]}
          </div>
        </div>
      )}

      <div className="flex gap-4">
        {!showResult ? (
          <button
            onClick={handleShowResult}
            disabled={selectedAnswer === null}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
              selectedAnswer !== null
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {t.showAnswer}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 bg-green-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-green-600 transition-all"
          >
            {currentQuestion < questions.length - 1 ? t.next : 'Finalizar'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizActivity;
