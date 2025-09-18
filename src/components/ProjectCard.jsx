// Displays:

// Image (sized dynamically)

// Title

// Small description or tech badges

// On click → opens full Project Page (scrapbook style).



import React from "react";
// import "../Styles/gallery.css"
import { Link } from "react-router-dom";
import "../Styles/projectCard.css"

function ProjectCard({ project, category }) {
    return (
        <div className="projectCard">
            <Link
                to={`/projects/${project.id}`}
                state={{ category: category }}
            >
                <div className="imageContainer">
                    <svg width="0" height="0">
                        <defs>
                            <filter id="noise">
                                <feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="4" />
                                <feDisplacementMap in="SourceGraphic" scale="8" />
                            </filter>
                        </defs>
                    </svg>
<div className="squiggly-wrapper">
  <img src={project.image} alt="" />
  <svg className="squiggly-border" width="100%" height="100%">
    <filter id="borderNoise">
      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4"/>
      <feDisplacementMap in="SourceGraphic" scale="4"/>
    </filter>
    <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="4" filter="url(#borderNoise)" rx="8"/>
  </svg>
</div>

                    {/* <img src={project.image} class="squiggly-image" alt="Squiggly" /> */}
                    <div className="overlay">
                        <div className="text">{project.description}</div>
                    </div>
                </div>
                <p> {project.title}</p>
            </Link>

        </div>

    );
}

export default ProjectCard;