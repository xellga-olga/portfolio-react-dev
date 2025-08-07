import React from 'react';

function QuizQuestion({question, questionNumber, onAnswer}) {
  return (
    <div>
      <h2 className='text-xl mb-4 font-bold text-gray-700 sm:text-2xl'>Question {questionNumber}</h2>

      <p className='mb-6 text-lg font-semibold text-red-800 sm:text-xl'>{question.text}</p>

      <div className='flex flex-col space-y-4'>
        {question.options.map((option, index) => (
          <button
            key={option.text}
            onClick={() => onAnswer(option.isCorrect)}
            className='rounded-full p-6 bg-black text-white text-lg py-2 hover:opacity-80 sm:text-xl'
          >
            {option.text}
          </button>
        ))}

      </div>
    </div>
  );
}

export default QuizQuestion;