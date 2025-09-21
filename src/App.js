import logo from './logo.svg';
import './App.css';

import Projects from "./Pages/Projects";

import "./Styles/Projects.css"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProjectPage from './components/ProjectPage';
import StartPage from './components/StartPage';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
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
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}



export default App;
