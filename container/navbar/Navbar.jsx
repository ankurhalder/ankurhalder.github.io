import { Fragment } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 200 },
    });
  }, [controls]);

  return (
    <Fragment>
      <div className="navbar">
        <Sidebar></Sidebar>
        <div className="wrapper">
          <motion.img
            className="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controls}
            src="/apple-icon.png"
            alt=""
          />

          <div className="social">
            <a href="#">
              <img src="/social/github.png" alt="github" />
            </a>
            <a href="#">
              <img src="/social/linkedin.png" alt="linkedin" />
            </a>
            <a href="#">
              <img src="/social/facebook.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/social/instagram.png" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
