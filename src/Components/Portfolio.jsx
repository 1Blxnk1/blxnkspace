/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 */
import image from "../images/desk-setup.jpg";

const imageAltText = "Desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project links section.
 */
const projectList = [
  {
    title: "Coding Club Hackathon Site",
    description:
      "A responsive website built using Tailwind CSS and next.js during a 5-day hackathon. Designed to promote coding culture at Eduvos campus.",
    url: "https://github.com/1Blxnk1/coding-club-site-vossie",
  },
  // Add more real projects here as you build them
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="portfolio-content">
          <div className="portfolio-image">
            <img src={image} alt={imageAltText} />
          </div>
          
          <div className="projects-container">
            {projectList.length === 0 ? (
              <p className="no-projects">Projects coming soon!</p>
            ) : (
              projectList.map((project, index) => (
                <div className="project-card" key={index}>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a 
                    href={project.url} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} project`}
                  >
                    View Project
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
