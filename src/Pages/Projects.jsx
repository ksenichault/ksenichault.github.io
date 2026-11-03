import React, { useState } from "react";
// import { motion } from "framer-motion"; // optional for animations
import Tabs from "../components/Tabs";
import { useLocation } from "react-router-dom";


function Projects() {


  const location = useLocation();
  const initialCategory = location.state?.category || "3D";

  return (
    <div>
      <h1 id="project-title"> Projects </h1>
      <Tabs></Tabs>
    </div>


  );
}

export default Projects;
