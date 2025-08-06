import React from 'react';
import questions from "./questions";

function Result({answers, restartTest}) {

  const score = answers.reduce((acc, current) => acc + current, 0);

  const mistakes = questions
    .filter((_, index) => answers[index] === 0)
    .map((question) => ({
      question: question.text,
      correctAnswer: question.options.find(option => option.isCorrect).text
    }));

  return (
    <div className='flex flex-col gap-6 text-center'>
      <h2 className='text-3xl text-gray-800 font-bold'>
        Quiz Complete!
      </h2>

      <p className='text-gray-700 text-2xl font-semibold'>
        Your score is {score} out of {questions.length}
      </p>

      {
        mistakes.length > 0 && (
          <div className='mt-4 text-left'>
            <h3 className='mb-3 text-xl font-semibold text-red-600'>
              Question you missed:
            </h3>

            <ul className='space-y-3'>
              {
                mistakes.map((option, index) => (
                  <li className='p-4 bg-red-50 rounded-lg' key={index}>
                    <p className='text-gray-800 font-bold' >
                      {option.question}
                    </p>
                    <p className='mt-1 text-green-600 font-bold'>
                      Correct answer: {option.correctAnswer}
                    </p>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }

      <button
        onClick={restartTest}
        className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200"
      >
        Restart Quiz
      </button>

    </div>
  );
}

export default Result;