import React from 'react';
import Welcome from "./welcome";
import QuizQuestion from "./quizQuestion";
import Result from '../QuizApp/result'

function QuizApp() {

  return (
    <div
      className="max-w-xl mx-auto mt-10 p-8 mb-7 bg-black/60 backdrop-blur-md shadow-2xl flex content-center flex-col items-center rounded-3xl text-center border border-white/50">
      <h2 className="text-2xl font-bold mb-4 text-white/70">Quiz App</h2>
      <Welcome />
      <QuizQuestion />
      <Result />
    </div>
  );
}

export default QuizApp;