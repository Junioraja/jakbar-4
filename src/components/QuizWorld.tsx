'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { QUIZ_QUESTIONS, ZONES, BADGES } from '@/data/gameData'
import { useGameContext } from '@/contexts/GameContext'
import { CheckCircle2, XCircle, Clock, Zap } from 'lucide-react'

interface QuizWorldProps {
  zoneId: string
  onClose: () => void
}

export default function QuizWorld({ zoneId, onClose }: QuizWorldProps) {
  const zone = ZONES.find(z => z.id === zoneId)
  const questions = QUIZ_QUESTIONS.filter(q => q.zoneId === zoneId).sort(() => Math.random() - 0.5) // Shuffle
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [answered, setAnswered] = useState<Set<number>>(new Set())
  
  const { addScore, completeZone, unlockBadge, progress } = useGameContext()

  // Countdown timer
  useEffect(() => {
    if (showResult || quizComplete) return
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeUp()
          return 10
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestionIndex, showResult])

  const handleTimeUp = () => {
    if (!showResult) {
      setShowResult(true)
    }
  }

  const currentQuestion = questions[currentQuestionIndex]
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer

  const handleAnswerClick = (optionIndex: number) => {
    if (showResult || answered.has(currentQuestionIndex)) return
    
    setSelectedAnswer(optionIndex)
    setShowResult(true)
    setAnswered(new Set([...answered, currentQuestionIndex]))
    
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(prev => prev + (timeLeft > 5 ? 100 : 50)) // Bonus untuk menjawab cepat
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(curr => curr + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setTimeLeft(10)
    } else {
      completeQuiz()
    }
  }

  const completeQuiz = () => {
    setQuizComplete(true)
    addScore(zoneId, score)
    completeZone(zoneId)
    
    // Check badges
    if (score === 300) { // Perfect score (3 questions * 100)
      unlockBadge('perfect-score')
    }
  }

  if (quizComplete) {
    return <QuizResult zoneId={zoneId} score={score} totalPossible={questions.length * 100} onClose={onClose} />
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="min-h-screen flex items-center justify-center p-4"
        >
          <Card className="w-full max-w-2xl bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-cyan-500">
            {/* Header */}
            <CardHeader className="relative">
              <div className="absolute right-4 top-4">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{zone?.emoji}</span>
                <div>
                  <CardTitle className="text-2xl">{zone?.name}</CardTitle>
                  <CardDescription className="text-cyan-200">
                    Jakbar Quiz World
                  </CardDescription>
                </div>
              </div>

              {/* Progress and Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    Soal {currentQuestionIndex + 1} dari {questions.length}
                  </span>
                  <span className="text-sm font-bold text-cyan-400">{score} Poin</span>
                </div>
                <Progress 
                  value={((currentQuestionIndex + 1) / questions.length) * 100} 
                  className="h-3"
                />

                {/* Timer */}
                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-2 font-bold ${timeLeft <= 3 ? 'text-red-500' : 'text-cyan-400'}`}>
                    <Clock className="h-4 w-4" />
                    <span>{timeLeft}s</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Jawab cepat, dapat poin bonus!
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              {/* Question */}
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-bold text-white">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Answer Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index
                    const isAnswerShown = showResult
                    const isCorrectAnswer = index === currentQuestion.correctAnswer
                    let buttonClass = 'bg-slate-700 border-slate-600 hover:border-cyan-500'

                    if (isAnswerShown) {
                      if (isCorrectAnswer) {
                        buttonClass = 'bg-green-700/40 border-green-500'
                      } else if (isSelected && !isCorrect) {
                        buttonClass = 'bg-red-700/40 border-red-500'
                      }
                    }

                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerClick(index)}
                        disabled={showResult || answered.has(currentQuestionIndex)}
                        className={`w-full p-4 text-left border-2 rounded-lg transition-all font-medium ${buttonClass} ${
                          answered.has(currentQuestionIndex) ? 'cursor-default' : 'cursor-pointer'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold
                            ${isAnswerShown && isCorrectAnswer ? 'border-green-500 text-green-400' : ''}
                            ${isAnswerShown && isSelected && !isCorrect ? 'border-red-500 text-red-400' : ''}
                            ${!isAnswerShown ? 'border-gray-500' : ''}
                          `}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="flex-1">{option}</span>
                          {isAnswerShown && isCorrectAnswer && (
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                          )}
                          {isAnswerShown && isSelected && !isCorrect && (
                            <XCircle className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg border ${
                      isCorrect
                        ? 'bg-green-900/30 border-green-700'
                        : 'bg-yellow-900/30 border-yellow-700'
                    }`}
                  >
                    <div className="flex gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                      )}
                      <div>
                        <p className={`font-semibold mb-1 ${isCorrect ? 'text-green-300' : 'text-yellow-300'}`}>
                          {isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Salah'}
                        </p>
                        <p className="text-sm opacity-90">{currentQuestion.explanation}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Button
                    onClick={handleNextQuestion}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3"
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil'}
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function QuizResult({
  zoneId,
  score,
  totalPossible,
  onClose
}: {
  zoneId: string
  score: number
  totalPossible: number
  onClose: () => void
}) {
  const zone = ZONES.find(z => z.id === zoneId)
  const percentage = Math.round((score / totalPossible) * 100)
  const rank = percentage >= 90 ? '🏆 Master' : percentage >= 70 ? '⭐ Expert' : percentage >= 50 ? '🎯 Learner' : '📚 Novice'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <Card className="w-full max-w-md bg-gradient-to-b from-purple-950 to-purple-900 border-2 border-purple-500">
          <CardContent className="pt-12 text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>

            <h2 className="text-3xl font-bold text-white mb-2">QUIZ COMPLETE!</h2>
            <p className="text-purple-200 mb-6">{zone?.name}</p>

            <div className="bg-purple-800/30 rounded-lg p-6 mb-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {score}
              </div>
              <div className="text-gray-300 mb-4">dari {totalPossible} poin</div>
              
              <div className="mb-4">
                <Progress value={percentage} className="h-3 mb-2" />
                <div className="text-lg font-bold text-purple-300">{percentage}%</div>
              </div>

              <div className="text-3xl">{rank}</div>
            </div>

            <div className="space-y-2 mb-6 text-sm">
              {percentage >= 90 && (
                <Badge className="bg-yellow-500 text-black font-bold">⭐ Perfect Zone Master!</Badge>
              )}
              {percentage >= 70 && percentage < 90 && (
                <Badge className="bg-blue-500 text-white font-bold">✨ Excellent Work!</Badge>
              )}
              {percentage >= 50 && percentage < 70 && (
                <Badge className="bg-green-500 text-white font-bold">✅ Good Job!</Badge>
              )}
            </div>

            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3"
            >
              Kembali ke Adventure Mode
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
