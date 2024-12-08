import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const minusyBg = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #0c0c1d, black)"
            : "linear-gradient(180deg, black, #0c0c1d)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "WHAT I DO ?" : "WHAT I DID ?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services"
              ? "./../../../public/planets.png"
              : "./../../../public/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div
        style={{ x: type === "services" ? yBg : minusyBg }}
        className="stars"
      ></motion.div>
    </div>
  );
}
