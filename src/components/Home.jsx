import React from "react";
import Hero from "./Hero";
import Button from "./Button";
import DivAchievements from "./DivAchievements";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />

      <div
        id="projects"
        className="flex justify-center items-center bg-black pb-20 scroll-smooth"
      >
        <Button />
      </div>
      <div
        id="skills"
        className="bg-black flex justify-center items-center pb-20 scroll-smooth"
      >
        <Skills />
      </div>
      <div
        id="achievements"
        className="bg-black flex justify-center items-center pb-20 scroll-smooth"
      >
        <DivAchievements />
      </div>
    </>
  );
};

export default Home;
