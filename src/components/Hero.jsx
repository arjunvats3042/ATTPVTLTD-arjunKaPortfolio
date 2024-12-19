import React from "react";
import motivation from "../assets/motivation.png"; // Assuming you use this image somewhere
import {motion} from "framer-motion";
import Technologies from "./Technologies";

const Hero = () => {
  return (
    <div className="pt-20 pb-10 lg:mb-35 bg-black ">
      <div className="flex flex-wrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{x: -100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 1}}
              className="pb-16 text-4xl sm:text-7xl lg:text-8xl font-chakra tracking-tight lg:mt-16 select-none"
            >
              <span className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 bg-clip-text tracking-tight text-transparent select-none font-chakra ">
                Arjun Vats
              </span>
            </motion.h1>
            <motion.span
              initial={{x: -100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 1.5}}
              className="bg-gradient-to-r from-slate-500 via-blue-200 to-blue-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent select-none font-chakra"
            >
              MERN Stack Developer
            </motion.span>
            <motion.p
              initial={{x: -100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 2}}
              className="my-2 max-w-xl py-6 font-light tracking-tighter select-none font-inconsolata text-lg sm:text-xl text-white"
            >
              I am a pre-final year B.Tech student and a passionate MERN stack
              developer with a focus on building dynamic, responsive, and
              user-friendly web applications. Alongside my expertise in modern
              web technologies, I have a strong foundation in Data Structures
              and Algorithms, which enhances my problem-solving abilities and
              enables me to write efficient, optimized code. I enjoy combining
              clean, scalable development practices with logical thinking to
              create impactful solutions. Continuously learning and improving, I
              aim to bridge the gap between design and functionality. Let’s
              connect and bring innovative ideas to life!
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
