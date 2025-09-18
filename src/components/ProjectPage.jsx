// Shows scrapbook-style layout: images, notes, text, sketches.

// Includes navigation:

// “← Back to Games”

// Previous/Next project in category

// Tabs still visible (with active one highlighted)

import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData";
import { useLocation, Link } from "react-router-dom";
import "../Styles/projectPage.css"

function ProjectPage() {
  const location = useLocation();
  const category = location.state?.category || "3D";

  const { id } = useParams(); // from the url
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <p>Project not found</p>;

  // return (
  //     <div className="project-page">
  //         <Link to="/" state={{ category }}>
  //             <button>Go Back</button>
  //         </Link>

  //         <div className="project-content">
  //             <h1>{project.title}</h1>
  //             <img src={project.image} alt={project.title} />

  //             <p>{project.description}</p>
  //         </div>

  //     </div>
  // );
  return (

    <div className="project-page">
      <div className="header-row">


        <Link to="/projects" state={{ category }}>
          <svg width="0" height="0">
            <defs>
              <filter id="squiggly">
                <feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="4" />
                <feDisplacementMap in="SourceGraphic" scale="3" />
              </filter>
            </defs>
          </svg>
          <svg width="0" height="0">
            <defs>
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="4" />
                <feDisplacementMap in="SourceGraphic" scale="8" />
              </filter>
            </defs>
          </svg>


          <button className="squiggly-button">Go Back</button>
        </Link>
        <h1 className="project-title">{project.title}</h1>
      </div>

      <div className="content squiggly"  >


        {project.blocks.map((block, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className={`project-block ${isEven ? "left" : "right"}`}>
              <div className="image-container">
                <div className="squiggly-wrapper">
                  {block.video ? (
                 
                    <iframe  src={block.video} allow="autoplay"  
                      allowFullScreen
                     style={{ width: "600px", aspectRatio: "16/9", height: "auto", border: "none" }}></iframe>

                  ) : (
                    <img
                      src={block.image}
                      alt="Squiggly"
                    />
                  )}
                  <svg className="squiggly-border" width="100%" height="100%">
                    <filter id="borderNoise">
                      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" />
                      <feDisplacementMap in="SourceGraphic" scale="4" />
                    </filter>
                    <rect x="0" y="0" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="4" filter="url(#borderNoise)" rx="8" />
                  </svg>
                </div>

              </div>
              <div className="text-container">
                <p>{block.text}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}



export default ProjectPage;