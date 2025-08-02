import {Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CubeBackground from "./components/CubeBackground/CubeBackground";
import InfoContact from "./components/InfoContact";
import About from "./pages/About";
import MiniAppsPage from "./pages/MiniAppsPage";
import QuoteGenerator from "./mini-apps/ QuoteGenerator";
import TicTacToe from "./mini-apps/Tic-Tac-Toe";
import QuizApp from "./mini-apps/QuizApp/QuizApp";

function App() {
  return (
    <div className='relative'>
      <CubeBackground />
      <div className='relative z-10'>
        <Navbar/>
      <div className='sticky top-0 z-50'>
        <InfoContact />
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about_me" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/mini-apps" element={<MiniAppsPage />} />
          <Route path="/mini-apps/quote" element={<QuoteGenerator />} />
          <Route path='/mini-apps/tictactoe' element={<TicTacToe />} />
          <Route path='/mini-apps/quizapp' element={<QuizApp />} />
        </Routes>
      </div>
    </div>
  )
}

export default App