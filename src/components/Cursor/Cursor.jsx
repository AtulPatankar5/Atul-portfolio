import React, { useEffect, useState } from "react";
import "./Cursor.scss";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  },[]);

  console.log(position);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x-10, y: position.y-10 }}
    ></motion.div>
  );
}
