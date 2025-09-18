import React, { useState } from "react";
// import { motion } from "framer-motion"; // optional for animations
import Tabs from "../components/Tabs";
import { useLocation } from "react-router-dom";


function Projects() {
  const [currentPage, setCurrentPage] = useState(0);


  const location = useLocation();
  const initialCategory = location.state?.category || "3D";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  return (
    <div>
      <h1 id="project-title"> Projects </h1>
      <Tabs></Tabs>
    </div>


  );
}

export default Projects;
