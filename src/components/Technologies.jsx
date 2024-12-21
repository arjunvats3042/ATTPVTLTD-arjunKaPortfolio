import React from "react";
import {RiReactjsLine} from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {motion} from "framer-motion";

const Technologies = () => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const dotVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 0.5}},
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-10 pb-10">
        <motion.div
          initial={{y: -10}}
          animate={{y: [10, -10]}}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-4xl sm:text-7xl md:text-8xl text-green-500" />
        </motion.div>
        <motion.div
          initial={{y: 10}}
          animate={{y: [-10, 10]}}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-4xl sm:text-7xl md:text-8xl text-white" />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: [10, -10]}}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-4xl sm:text-7xl md:text-8xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial={{y: 10}}
          animate={{y: [-10, 10]}}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-4xl sm:text-7xl md:text-8xl text-green-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
