import React, {useState} from 'react';
import Welcome from "./welcome";
import QuizQuestion from "./quizQuestion";
import Result from '../QuizApp/result'
import questions from "./questions";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleAnswer = (isCorrect) => {
    const newAnswers = [...answers, isCorrect ? 1 : 0];

    setAnswers(newAnswers);

    if(currentQuestion >= questions.length - 1) {
      setShowResult(true)
    }else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  const startTest = () => setShowWelcome(false);

  const restartTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setShowWelcome(true)
  }

  return (
    <div
      className="max-w-xl mx-auto mt-10 p-8 mb-7 bg-white  flex content-center flex-col items-center rounded-3xl text-center ">
      <h2 className="text-2xl font-bold mb-4 text-black/70">Quiz App</h2>
      {showWelcome && <Welcome onStart={startTest} />}

      {!showWelcome && !showResult && (
        <QuizQuestion
        question={questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        onAnswer={handleAnswer}
        />
      )}

      {showResult && <Result answers={answers} restartTest={restartTest} />}
    </div>
  );
}

export default QuizApp;