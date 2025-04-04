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
      "A responsive website built using Tailwind CSS and HTML during a 48-hour hackathon. Designed to promote coding culture at Eduvos campus.",
    url: "https://github.com/1Blxnk1/coding-club-site-vossie",
  },
  // Add more real projects here as you build them
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
