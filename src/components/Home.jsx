import React from "react";
import Hero from "./Hero";
import Button from "./Button";
import DivAchievements from "./DivAchievements";
import Skills from "./Skills";
import Skillsrev from "./Skillsrev";
import AboutWithScrollingImages from "./AboutWithScrollingImages";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div
        id="achievements"
        className="bg-black flex justify-center items-center pb-20 scroll-smooth"
      >
        <DivAchievements />
      </div>

      <div id="about" className="bg-black scroll-smooth select-none">
        <AboutWithScrollingImages />
      </div>

      <div
        id="projects"
        className="flex justify-center items-center bg-black pb-20 scroll-smooth"
      >
        <Button />
      </div>

      <div id="skills" className="bg-black scroll-smooth">
        <Skills />
        <Skillsrev />
      </div>

      <div className="select-none bg-black">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
