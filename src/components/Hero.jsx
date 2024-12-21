import React from "react";
import {motion} from "framer-motion";
import {ReactTyped} from "react-typed"; // Importing the typing effect library
import Technologies from "./Technologies";

const Hero = () => {
  return (
    <div className="pt-20 pb-10 lg:mb-35 bg-black">
      <div className="flex flex-wrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{x: -100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.7, delay: 0.5}}
              className="pb-8 text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight lg:mt-16 select-none"
            >
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent font-extrabold">
                Arjun Vats
              </span>
            </motion.h1>

            <motion.div
              initial={{x: -100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 1.5}}
              className="bg-gradient-to-r from-slate-500 via-blue-200 to-blue-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent select-none font-chakra"
            >
              <ReactTyped
                strings={["MERN Stack Developer", "Programmer"]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={1000}
                startDelay={500}
                loop
              />
            </motion.div>

            <motion.p
              initial={{x: -100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 2}}
              className="my-4 max-w-xl py-6 tracking-tighter select-none font-inconsolata text-lg sm:text-xl text-white"
            >
              A passionate{" "}
              <span className="italic text-slate-400">
                MERN stack developer
              </span>{" "}
              with a knack for creating intuitive and{" "}
              
                responsive web applications. I enjoy solving problems and turning{" "}
              complex ideas into
              simple, functional solutions. Always eager to learn and experiment
              with{" "}
              new technologies, I
              strive to blend creativity with technical skill to build seamless,
              impactful experiences. Dedicated to continuous improvement, I’m
              always looking for ways to enhance my work and collaborate on
              exciting projects.
            </motion.p>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="w-full lg:w-1/2 lg:p-8 select-none">
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Hero;
