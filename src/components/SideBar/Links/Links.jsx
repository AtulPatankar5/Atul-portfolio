import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 10,
    opacity: 0,
  },
};
export default function Links() {
  const items = ["HomePage", "Services", "Portfolio", "Contact"];//, "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          style={{ fontSize: "20px" }}
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
