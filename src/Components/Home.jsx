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

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/background-img.jpg";


const Home = ({ name, title }) => {
  return (
    <section 
      id="home" 
      className="home-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Home section"
    >
      <div className="home-content">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <div className="home-cta">
          <a href="#about" className="cta-button">Learn More</a>
        </div>
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
