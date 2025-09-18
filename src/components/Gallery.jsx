import React from "react";
import "../Styles/gallery.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

function Gallery({ category }) {

    const filteredProjects = projectsData.filter(
        (project) => project.category === category
    );
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="10px">
                
                {filteredProjects.map((project) => (
                    <ProjectCard project={project} category={category}></ProjectCard>

                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
}

export default Gallery;