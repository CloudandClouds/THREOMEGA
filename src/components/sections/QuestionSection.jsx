import React, { useState } from 'react';
import { CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0a0a0a] py-8 px-6 flex flex-col items-center">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>
      </div>

      <div className="max-w-xl w-full relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                Phase {section}: {section === 'A' ? 'Clinical Evidence' : 'Practice Insights'}
              </span>
            </div>
            <span className="text-sm font-mono text-[#D4AF37]">{progress}/{total}</span>
          </div>
          <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#8B0000] transition-all duration-700 ease-out"
              style={{width: `${progressPercentage}%`}}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="premium-card rounded-3xl p-8 mb-6 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed" style={{fontFamily: 'serif'}}>
            {question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {options.map((option, i) => {
              const isSelected = i === answer;
              const isCorrect = i === correct;
              const showCorrectness = isAnswered && (isSelected || (correct !== -1 && isCorrect));

              // Determine classes based on answer state
              let buttonClasses = "w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ";
              let dotClasses = "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ";
              
              if (isAnswered) {
                if (isSelected) {
                  if (isCorrect || correct === -1) {
                    buttonClasses += "border-green-500/50 bg-green-500/5 shadow-[0_0_20px_rgba(34,197,94,0.1)]";
                    dotClasses += "bg-green-500 border-green-500";
                  } else {
                    buttonClasses += "border-red-500/50 bg-red-500/5 shadow-[0_0_20px_rgba(239,68,68,0.1)]";
                    dotClasses += "bg-red-500 border-red-500";
                  }
                } else if (isCorrect && correct !== -1) {
                  buttonClasses += "border-green-500/30 bg-green-500/[0.02] opacity-80";
                  dotClasses += "border-green-500/50";
                } else {
                  buttonClasses += "border-gray-800 bg-transparent opacity-40";
                  dotClasses += "border-gray-700";
                }
              } else {
                buttonClasses += "border-gray-800 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 cursor-pointer group";
                dotClasses += "border-gray-700 group-hover:border-[#D4AF37]";
              }

              return (
                <button
                  key={i}
                  onClick={() => !isAnswered && handleAnswer(i)}
                  disabled={isAnswered}
                  className={buttonClasses}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5">
                      <div className={dotClasses}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white shadow-sm" />}
                      </div>
                    </div>
                    <span className={`text-lg font-medium flex-1 ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                      {option}
                    </span>
                    {showCorrectness && (isCorrect || correct === -1) && (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="min-h-[120px]">
          {showFeedback && isAnswered && (
            <div className={`rounded-2xl p-6 border shadow-xl animate-scale-in ${
              (answer === correct || correct === -1)
                ? 'border-green-500/20 bg-green-500/[0.03]'
                : 'border-[#D4AF37]/20 bg-[#D4AF37]/[0.03]'
            }`}>
              <div className="flex gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  (answer === correct || correct === -1) ? 'bg-green-500/20' : 'bg-[#D4AF37]/20'
                }`}>
                  <span className={(answer === correct || correct === -1) ? 'text-green-500' : 'text-[#D4AF37]'}>ℹ</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feedback}</p>
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        <div className="mt-auto pt-6">
          {isAnswered && (
            <button
              onClick={() => {
                setShowFeedback(false);
                onNext();
              }}
              className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-2xl shadow-red-900/30 group"
            >
              CONTINUE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default QuestionSection;
