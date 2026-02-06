import { ArrowRight, CheckCircle, Clock, HelpCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

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
  onNext,
}) => {
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [timeExpired, setTimeExpired] = useState(false)
  const [showInstructions, setShowInstructions] = useState(section === 'A' && progress === 1)

  // Security: Prevent screenshots and tab switching
  useEffect(() => {
    // Prevent screenshots (works on some browsers)
    const preventScreenshot = (e) => {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.shiftKey && e.key === 'S')) {
        e.preventDefault()
        alert('Screenshots are disabled during the test')
      }
    }

    // Detect tab visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert(
          '⚠️ Warning: Switching tabs is not allowed during the test. Please stay on this page.'
        )
      }
    }

    // Prevent right-click
    const preventRightClick = (e) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('keyup', preventScreenshot)
    document.addEventListener('keydown', preventScreenshot)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    document.addEventListener('contextmenu', preventRightClick)

    return () => {
      document.removeEventListener('keyup', preventScreenshot)
      document.removeEventListener('keydown', preventScreenshot)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.removeEventListener('contextmenu', preventRightClick)
    }
  }, [])

  // Timer countdown - resets for each question
  useEffect(() => {
    // Reset timer when question changes
    setTimeLeft(15)
    setTimeExpired(false)
    setShowFeedback(false)
  }, [progress])

  useEffect(() => {
    if (answer !== undefined || timeExpired) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setTimeExpired(true)
          // Don't show feedback, just move to next after a delay
          setTimeout(() => {
            onNext()
          }, 2000)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [answer, timeExpired, onNext])

  const handleAnswer = (optionIndex) => {
    if (timeExpired || answer !== undefined) return // Prevent multiple answers
    onAnswer(optionIndex)
    setShowFeedback(true)
  }

  const handleStartTest = () => {
    setShowInstructions(false)
  }

  const isAnswered = answer !== undefined
  const progressPercentage = (progress / total) * 100

  // Show instructions dialog before first question
  if (showInstructions) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Test Instructions</h2>
            <p className="text-gray-600 text-sm">Please read carefully before starting</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 p-4 bg-orange-50 border-2 border-orange-200 rounded-xl">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                1
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">15 Seconds Per Question</p>
                <p className="text-gray-600 text-xs mt-1">
                  Each question has a 15-second time limit
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                2
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">One-Time Answer Selection</p>
                <p className="text-gray-600 text-xs mt-1">
                  Once you select an answer, you cannot change it
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                3
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">Auto-Advance on Timeout</p>
                <p className="text-gray-600 text-xs mt-1">
                  If time expires, you'll automatically move to the next question
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-50 border-2 border-purple-200 rounded-xl">
              <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                4
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">No Tab Switching</p>
                <p className="text-gray-600 text-xs mt-1">
                  Stay on this page. Tab switching will trigger warnings
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleStartTest}
            className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            I UNDERSTAND - START TEST
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-8 px-6 flex flex-col items-center">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.06]"></div>
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
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono text-[#D4AF37]">
                {progress}/{total}
              </span>
              {/* Timer - minimal design */}
              {!isAnswered && !timeExpired && (
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className={`${timeLeft <= 5 ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
                    {timeLeft}s
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#8B0000] transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 mb-6 shadow-xl">
          <h2
            className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed"
            style={{ fontFamily: 'serif' }}
          >
            {question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {options.map((option, i) => {
              const isSelected = i === answer
              const isCorrect = i === correct
              const showCorrectness = isAnswered && (isSelected || (correct !== -1 && isCorrect))

              // Determine classes based on answer state
              let buttonClasses =
                'w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 '
              let dotClasses =
                'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 '

              if (isAnswered || timeExpired) {
                if (isSelected) {
                  if (isCorrect || correct === -1) {
                    buttonClasses += 'border-green-500/50 bg-green-50 shadow-sm'
                    dotClasses += 'bg-green-500 border-green-500'
                  } else {
                    buttonClasses += 'border-red-500/50 bg-red-50 shadow-sm'
                    dotClasses += 'bg-red-500 border-red-500'
                  }
                } else if (isCorrect && correct !== -1) {
                  buttonClasses += 'border-green-500/30 bg-green-50/50 opacity-80'
                  dotClasses += 'border-green-500/50'
                } else {
                  buttonClasses += 'border-gray-200 bg-transparent opacity-40'
                  dotClasses += 'border-gray-300'
                }
              } else {
                buttonClasses +=
                  'border-gray-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 cursor-pointer group'
                dotClasses += 'border-gray-300 group-hover:border-[#D4AF37]'
              }

              return (
                <button
                  key={i}
                  onClick={() => !isAnswered && !timeExpired && handleAnswer(i)}
                  disabled={isAnswered || timeExpired}
                  className={buttonClasses}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5">
                      <div className={dotClasses}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white shadow-sm" />}
                      </div>
                    </div>
                    <span
                      className={`text-lg font-medium flex-1 ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}
                    >
                      {option}
                    </span>
                    {showCorrectness && (isCorrect || correct === -1) && (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="min-h-[120px]">
          {timeExpired && !isAnswered && (
            <div className="rounded-2xl p-6 border-2 border-orange-500/30 bg-orange-50 shadow-xl animate-scale-in">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-orange-500/20">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-orange-900 font-semibold mb-1">⏱️ Time Over!</p>
                  <p className="text-orange-800 text-sm leading-relaxed">
                    You didn't answer this question in time. Moving to next question...
                  </p>
                </div>
              </div>
            </div>
          )}
          {showFeedback && isAnswered && (
            <div
              className={`rounded-2xl p-6 border-2 shadow-xl animate-scale-in ${
                answer === correct || correct === -1
                  ? 'border-green-500/30 bg-green-50'
                  : 'border-[#D4AF37]/30 bg-[#D4AF37]/5'
              }`}
            >
              <div className="flex gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    answer === correct || correct === -1 ? 'bg-green-500/20' : 'bg-[#D4AF37]/20'
                  }`}
                >
                  <span
                    className={
                      answer === correct || correct === -1 ? 'text-green-600' : 'text-[#D4AF37]'
                    }
                  >
                    ℹ
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{feedback}</p>
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        <div className="mt-auto pt-6">
          {isAnswered && (
            <button
              onClick={() => {
                setShowFeedback(false)
                onNext()
              }}
              className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group"
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
  )
}

export default QuestionSection
