import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/Main/About";
import Contact from "./components/Main/Contact";
import Experience from "./components/Main/Experience";
import Projects from "./components/Main/ProjectsPage";
import HomePage from "./components/Main/HomePage";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <Navbar/>
      <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      
      </BrowserRouter>
    </>
  );
}

export default App;
