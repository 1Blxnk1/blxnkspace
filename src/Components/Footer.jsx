/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    twitter,
    youTube,
  } = props;

  return (
    <footer id="footer" className="site-footer">
      <div className="footer-content">
        <h2 className="footer-title">Connect With Me</h2>
        
        <div className="social-links">
          {email && (
            <a href={`mailto:${email}`} className="social-link" aria-label="Email">
              <img src={envelopeIcon} alt="Email" className="socialIcon" />
            </a>
          )}
          {gitHub && (
            <a 
              href={`https://github.com/${gitHub}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
          )}
          {linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
            </a>
          )}
          {twitter && (
            <a 
              href={`https://twitter.com/${twitter}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter Profile"
            >
              <img src={twitterIcon} alt="Twitter" className="socialIcon" />
            </a>
          )}
          {instagram && (
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram Profile"
            >
              <img src={instagramIcon} alt="Instagram" className="socialIcon" />
            </a>
          )}
          {devDotTo && (
            <a 
              href={`https://dev.to/${devDotTo}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Dev.to Profile"
            >
              <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
            </a>
          )}
          {medium && (
            <a 
              href={`https://medium.com/@${medium}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Medium Profile"
            >
              <img src={mediumIcon} alt="Medium" className="socialIcon" />
            </a>
          )}
          {youTube && (
            <a
              href={`https://www.youtube.com/c/${youTube}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="YouTube Channel"
            >
              <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
            </a>
          )}
        </div>
        
        <div className="footer-divider"></div>
        
        <p className="copyright">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  name: "",
  primaryColor: "#2196f3",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
