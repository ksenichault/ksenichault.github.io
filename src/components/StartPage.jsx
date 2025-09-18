import { useNavigate } from "react-router-dom";
import "../Styles/startPage.css"

function StartPage() {
    const navigate = useNavigate();

    const starPositions = [
        { top: "-80%", right: "-15%" }, // top-right
        { top: "-40%", right: "-5%" },

        { top: "-90%", left: "50%" }, // top-center
        { top: "-120%", left: "30%" },
        { top: "-110%", right: "30%" },
        { top: "-85%", right: "10%" },
        { top: "-20%", left: "-30%" },
        { top: "-120%", right: "-5%" },
        { top: "-100%", left: "10%" },

        //   { bottom: "-10%", left: "-5%" }, // bottom-left
        { bottom: "-40%", right: "40%" }, // bottom-right
        { bottom: "-60%", right: "20%" },
        
        { bottom: "-50%", right: "-25%" },
        { bottom: "90%", right: "-35%" },
        { bottom: "-45%", right: "2%" },
        { bottom: "-5%", right: "15%" },


        //   { bottom: "-60%", left: "50%"}, // bottom-center
        { bottom: "-70%", left: "30%" },
        //   { bottom: "-60%", right: "-10%"},
        { bottom: "-30%", left: "-30%" },
        { bottom: "20%", left: "-20%" },
        { bottom: "-60%", left: "-5%" },
        { bottom: "-20%", left: "15%" },
        { bottom: "5%", left: "-2.5%" },

    ];


    return (
        <>
            <svg width="0" height="0">
                <defs>
                    <filter id="squiggly">
                        <feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="4" />
                        <feDisplacementMap in="SourceGraphic" scale="3" />
                    </filter>
                </defs>
            </svg>

            <div className="start-page">
                <h1>Welcome to My Portfolio</h1>
                <div className="text-about-me">
                    <p>I'm Kimia Senichault, a M2 student in Computer Science - Interaction, Graphics and Design at Institut Polytechnique de Paris.</p>
                    <button id="see-projects" onClick={() => navigate("/projects")}>
                        See My Projects
                    </button>


                    <div className="gallery">
                        <img
                            src="/img/doodles/star1.png"
                            className="drawing"
                            style={{ top: "-70%", left: "0%" }} // top-left corner
                        />
                        <img
                            src="/img/doodles/star2.png"
                            className="drawing"
                            style={{ top: "-90%", left: "-20%" }}
                        />
                        <img
                            src="/img/doodles/star3.png"
                            className="drawing"
                            style={{ top: "-50%", left: "-15%" }}
                        />



                        {starPositions.map((pos, i) => (
                            <img
                                key={i}
                                src="/img/doodles/star2.png"
                                className="drawing star"
                                style={{ ...pos }}
                                alt="star"
                            />
                        ))}


                        <img
                            src="/img/doodles/star3.png"
                            className="drawing"
                            style={{ bottom: "30%", right: "-25%" }} // top-right
                        />
                        <img
                            src="/img/doodles/star4.png"
                            className="drawing"
                            style={{ bottom: "-20%", right: "-35%" }} // bottom-left
                        />
                        <img
                            src="/img/doodles/star2.png"
                            className="drawing"
                            style={{ bottom: "-20%", right: "-15%" }} // bottom-right
                        />
                    </div>
                </div>
            </div>
        </>
    );


}

export default StartPage;
