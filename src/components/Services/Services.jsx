import React, { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const servicesVariants = {
  initial: {
    x: -100,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
export default function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-500px" });

  return (
    <motion.div
      className="services"
      variants={servicesVariants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={servicesVariants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={servicesVariants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button> WHAT WE DO ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={servicesVariants}>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
          }}
        >
          <h3>Branding</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptates aspernatur dolorem corrupti quidem minima natus beatae
            deserunt accusamus minus nulla sunt id praesentium, cum dolorum
            dignissimos distinctio eum ex.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h3>Branding</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptates aspernatur dolorem corrupti quidem minima natus beatae
            deserunt accusamus minus nulla sunt id praesentium, cum dolorum
            dignissimos distinctio eum ex.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h3>Branding</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptates aspernatur dolorem corrupti quidem minima natus beatae
            deserunt accusamus minus nulla sunt id praesentium, cum dolorum
            dignissimos distinctio eum ex.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h3>Branding</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptates aspernatur dolorem corrupti quidem minima natus beatae
            deserunt accusamus minus nulla sunt id praesentium, cum dolorum
            dignissimos distinctio eum ex.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
