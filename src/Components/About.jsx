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
  "I'm a Computer Science student at Eduvos Midrand, with hands-on experience in AI training, Linux systems, and full-stack development. I’m passionate about cybersecurity, systems engineering, and solving real-world problems with technology.";

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
  "I approach every project with precision, discipline, and an ethical hacker’s mindset. I’m driven by curiosity and a desire to understand the deeper layers of technology—building secure, scalable systems while continuously evolving in the digital space.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
