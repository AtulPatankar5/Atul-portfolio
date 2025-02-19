import React from "react";
import "./Hero.scss";
import { stagger } from "framer-motion";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbuttons: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
      repeatType: "mirror",
    },
  },
  scrollbuttons: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const handleScrollToPortfolio = () => {
  const portfolioSection = document.getElementById("Portfolio");
  portfolioSection.scrollIntoView({ behavior: "smooth" });
};
const handleScrollToContacts = () => {
  const portfolioSection = document.getElementById("Contact");
  portfolioSection.scrollIntoView({ behavior: "smooth" });
};
export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ATUL PATANKAR</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI Designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={handleScrollToPortfolio}
            >
              See the latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={handleScrollToContacts}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollbuttons"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer and UI Designer
      </motion.div>
      <div className="imgContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
}
