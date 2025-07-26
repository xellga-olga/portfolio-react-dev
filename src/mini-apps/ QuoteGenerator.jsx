import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";


const quotes = [
  "Why do programmers confuse Halloween and Christmas? Because Oct 31 = Dec 25.",
  "A bug is not a mistake, it's an unexpected feature.",
  "Why write comments in code when you can just suffer?",
  "If it broke, that means it used to work!",
  "99 little bugs in the code, take one down, patch it around... 127 bugs in the code!",
  "Don’t be afraid to delete code. If it’s truly needed, you’ll write it again.",
];


const QuoteGenerator = () => {

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  // Функция для получения случайной цитаты
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function showNewQuote() {
    setCurrentQuote(getRandomQuote());
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 mb-7 bg-black/60 backdrop-blur-md shadow-2xl flex content-center flex-col items-center rounded-3xl text-center border border-white/50">
      <h2 className="text-2xl font-bold mb-4 text-white/70">Dev Quote</h2>
      <p className="text-lg italic mb-6 text-white">{currentQuote}</p>
      <button
        onClick={showNewQuote}
        className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition flex justify-center items-center"
      >
        Another One
        <MdOutlineNavigateNext className="text-2xl" />
      </button>
    </div>
  );
}

export default QuoteGenerator;