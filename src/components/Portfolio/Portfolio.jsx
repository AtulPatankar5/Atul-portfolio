import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    description:
      "React Commerce is a simple e-commerce website built using React and Redux.React Commerce is a simple e-commerce website built using React and Redux.",
    image:
      "https://images.pexels.com/photos/29609563/pexels-photo-29609563/free-photo-of-scenic-alpine-landscape-with-rustic-cabins.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    title: "Next js Commerce",
    description:
      "React Commerce is a simple e-commerce website built using React and Redux.",
    image:
      "https://images.pexels.com/photos/27219452/pexels-photo-27219452/free-photo-of-woman-in-white-dress-lying-down-on-couch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    title: "Vanilla Commerce",
    description:
      "React Commerce is a simple e-commerce website built using React and Redux.",
    image:
      "https://images.pexels.com/photos/920689/pexels-photo-920689.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    title: "Music App",
    description:
      "React Commerce is a simple e-commerce website built using React and Redux.",
    image:
      "https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer"  style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef();
  const [progressColor, setProgressColor] = useState("green");

  // useScroll hook to track the scroll progress of the target (ref)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // This defines when the scroll event should trigger
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Function to get color based on scroll progress
  const getColor = (progress) => {
    if (progress < 0.25) {
      return "linear-gradient(90deg, #00FF00, #00FF00)"; // Green
    } else if (progress < 0.5) {
      return "linear-gradient(90deg, #FFA500, #FFA500)"; // Green to Orange
    } else if (progress < 0.75) {
      return "linear-gradient(90deg, #FFFF00, #FFFF00)"; // Orange to Yellow
    } else {
      return "linear-gradient(90deg, #FF0000, #FF0000)"; // Yellow to Red (Final stage)
    }
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      // Set the gradient background color based on scroll progress
      const newColor = getColor(progress);
      setProgressColor(newColor);
    });

    // Cleanup subscription when the component is unmounted
    return () => unsubscribe();
  }, [scrollYProgress]); // Only re-run when scrollYProgress changes

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{
            scaleX: scaleX,
            backgroundImage: progressColor, // Set the dynamic gradient as background
          }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
}
