import {Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CubeBackground from "./components/CubeBackground/CubeBackground";
import InfoContact from "./components/InfoContact";
import About from "./pages/About";

function App() {
  return (
    <div className='relative'>
      <CubeBackground />
      <div className='relative z-10'>
        <Navbar/>
        <InfoContact />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App