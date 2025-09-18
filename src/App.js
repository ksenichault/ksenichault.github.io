import logo from './logo.svg';
import './App.css';

import Projects from "./Pages/Projects";

import "./Styles/Projects.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from './components/ProjectPage';
import StartPage from './components/StartPage';

function App() {
  return (
    <Router>
      <div className="header">
        <a href="/"><h1>Kimia Senichault</h1></a>
      </div>

      <div className="header-links">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        <a href="https://www.linkedin.com/in/kimia-senichault" target="_blank" rel="noopener noreferrer"> <img src="/img/linkedin.svg" alt="LinkedIn" id="linkedin" />LinkedIn</a>
      </div>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/projects"
          element={
            <div className="App">
              <Projects />
            </div>
          }
        />
        {/* <Route path="/start" element={<StartPage />} /> */}
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </Router>

  );
}


export default App;
