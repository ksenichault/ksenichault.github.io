// Tabs Component (Tabs.jsx):

// Renders the tab buttons (Games, 3D, AI, …).

// Keeps track of the active tab in React state.

// Passes the selected category to the gallery.
import React, { useState } from "react";
import Gallery from "./Gallery"
import { useLocation } from "react-router-dom";

function Tabs() {
    const location = useLocation();

    const [activeCategory, setActiveCategory] = useState(
        location.state?.category || "3D"
    );

    const categories = ["3D", "Games", "AI", "UX", "Web"];

    return (
        <nav role="navigation" className="tabs-nav">
            <div className="tabs-wrapper">


                <ul>
                    {categories.map((cat, idx) => {
                        const isActive = activeCategory === cat;
                        const zIndex = isActive ? 100 : categories.length - idx;

                        return (
                            <li
                                key={cat}
                                className={`tab-item ${isActive ? "active" : ""}`}
                                style={{ zIndex }}
                            >
                                <a onClick={() => setActiveCategory(cat)}>
                                    <span className="tab-label">{cat}</span>
                                    <svg viewBox="0 0 122 40" className="tab-bg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">

                                        <path
                                            d="M116.486,29.036c-23.582-8-14.821-29-42.018-29h-62.4C5.441,0.036,0,5.376,0,12.003v28.033h122v-11H116.486z"
                                            fill={
                                                isActive
                                                    ? "var(--color-light-purple)"
                                                    : "var(--color-dark-purple)"
                                            }
                                            filter="drop-shadow(3px 0 5px rgba(0,0,0,0.25))"
                                        />
                                    </svg>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="tab-content">
                <Gallery category={activeCategory} />
            </div>
            {/*      <div className="tab-content"
                style={{
                    // backgroundColor: categoryColors[activeCategory],
                    backgroundColor: activeCategory !== categories
                        ? "var(--color-tab-active)"
                        : "var(--color-tabs)",
                    color: "#fff", // adjust text color for contrast
                }}>
                <Gallery category={activeCategory} />
            </div>
        </div> */}

        </nav>
    );
}



// <div className="tabs-container">



export default Tabs;
