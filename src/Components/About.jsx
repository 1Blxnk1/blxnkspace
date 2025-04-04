/**
 * About component
 * 
 * Showcasing professional background and technical passion.
 */

import React from "react";
import image from "../images/midnight-fill.png";

const imageAltText = "Midnight blue digital abstract background";

/**
 * Brief introduction aligned with professional branding.
 */
const description =
  "I'm a Computer Science student at Eduvos Midrand, with hands-on experience in AI training, Linux systems, and full-stack development. I'm passionate about cybersecurity, systems engineering, and solving real-world problems with technology.";

/**
 * Technical stack and key proficiencies.
 */
const skillsList = [
  "Python",
  "C++",
  "JavaScript (React Native)",
  "SQL & Database Design",
  "Linux Environments",
  "Delphi",
  "Technical Writing",
  "Cloud Systems (AWS, Azure)",
];

/**
 * Mission-focused statement to highlight mindset and vision.
 */
const detailOrQuote =
  "I approach every project with precision, discipline, and an ethical hacker's mindset. I'm driven by curiosity and a desire to understand the deeper layers of technology—building secure, scalable systems while continuously evolving in the digital space.";

const About = () => {
  return (
    <section className="about-section padding" id="about">
      <div className="about-background-wrapper">
        <img className="about-background" src={image} alt={imageAltText} />
      </div>
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="about-description">{description}</p>
        
        <div className="skills-container">
          <h3 className="skills-title">Technical Skills</h3>
          <ul className="skills-list">
            {skillsList.map((skill) => (
              <li key={skill} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="about-quote">
          <p>{detailOrQuote}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
