import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const QuestionSection = ({ 
  section, 
  progress, 
  total, 
  question, 
  options, 
  correct, 
  feedback,
  answer,
  onAnswer,
  onNext 
}) => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (optionIndex) => {
    onAnswer(optionIndex);
    setShowFeedback(true);
  };

  const isAnswered = answer !== undefined;
  const progressPercentage = (progress / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-6 flex flex-col">
      <div className="max-w-lg w-full mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-600">
              Section {section}: {section === 'A' ? 'Core Evidence' : 'Practice Reflection'}
            </span>
            <span className="text-sm font-semibold text-slate-700">{progress}/{total}</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
              style={{width: `${progressPercentage}%`}}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
            {question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {options.map((option, i) => {
              const isSelected = i === answer;
              const isCorrect = i === correct;
              const showCorrectness = isAnswered && (isSelected || (correct !== -1 && isCorrect));

              return (
                <button
                  key={i}
                  onClick={() => !isAnswered && handleAnswer(i)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    isAnswered
                      ? isSelected
                        ? isCorrect || correct === -1
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : isCorrect && correct !== -1
                        ? 'border-green-500 bg-green-50 opacity-60'
                        : 'border-slate-200 bg-slate-50'
                      : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                          <span className="text-white text-xs">●</span>
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                      )}
                    </div>
                    <span className="text-slate-900 font-medium flex-1">{option}</span>
                    {showCorrectness && (isCorrect || correct === -1) && (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && isAnswered && (
          <div className={`rounded-xl p-6 mb-6 border-l-4 ${
            (answer === correct || correct === -1)
              ? 'border-green-500 bg-green-50'
              : 'border-blue-500 bg-blue-50'
          } animate-slide-up`}>
            <p className="text-sm text-slate-900 leading-relaxed">{feedback}</p>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <button
            onClick={() => {
              setShowFeedback(false);
              onNext();
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 mt-auto"
          >
            NEXT QUESTION
          </button>
        )}
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default QuestionSection;