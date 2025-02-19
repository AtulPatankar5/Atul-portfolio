import SideBar from "../SideBar/SideBar";
import "./NavBar.scss";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{marginLeft:"250px"}}
        >
          {/* Atul P */}
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/atul-patankar-5963a0289/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
