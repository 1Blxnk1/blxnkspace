/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../images/down-arrow.svg";
import "../styles.css"; // Ensure global styles are imported

const Home = ({ name, title }) => {
  return (
    <section 
      id="home" 
      className="home-section"
      aria-label="Home section"
    >
      <div className="wave-container">
        <div className="gradient-ball"></div>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
      
      <div className="home-content">
        <h1 className="name-heading">{name}</h1>
        <h2>{title}</h2>
      </div>
      
      <div className="home-arrow">
        <a href="#about" aria-label="Scroll down to about section">
          <img src={arrowSvg} alt="Scroll down arrow" />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
