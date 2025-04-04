/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

const siteProps = {
  name: "Tadiwanashe Shonhiwa",
  title: "Programmer",
  email: "tadyshonhiwa@Gmail.com",
  gitHub: "1Blxnk1",
  instagram: "tady.wont.miss",
  linkedIn: "tadiwa-shonhiwa-b830b52a6",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#111d2b";
const secondaryColor = "#191970";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
