import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contact from "../../Contact/Contact";

const Home = () => {
  return (
    <>
      <div id="home">
        <Banner></Banner>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="skills">
        <Services></Services>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;
