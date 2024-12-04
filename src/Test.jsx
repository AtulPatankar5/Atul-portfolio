import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Test() {
  const [open, setOpen] = useState(false);

  const variants = {
    // visible: {
    //   opacity: 1,
    //   y: 200,
    //   transition: { type: "spring", stiffness: 100 , damping:10},//, damping: 50
    // },
    visible: (i) => ({
      opacity: 1,
    //   x: 200,
      transition: { delay: i * 0.3 }, //, damping: 50
    }),
    hidden: { opacity: 0 },
  };

  const items = ["items1", "item2", "items3", "items4", "items5"];
  return (
    // <div className="course">
    //   <motion.div
    //     className="box"
    //     // initial={{ opacity: 0.2, scale: 0.5 }}
    //     // animate={{opacity:1,scale:1,x:100,y:100}}//animate while loading to a direction
    //     // transition={{ duration: 2 }}
    //     // whileHover={{opacity:0.6,scale:1}}
    //     // whileInView={{ opacity: 1, scale: 1 }}
    //     // drag
    //     // whileTap={{scale:1}}

    // variants={variants}
    // animate={open?"visible":"hidden"}

    //     />

    //     <div>

    //   {/* <button onClick={()=>setOpen(prev=>!prev)}> Box View</button> */}
    //     </div>
    // </div>
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, index) => (
          <motion.li key={index} variants={variants} custom={index}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
