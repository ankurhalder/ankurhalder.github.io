import { Fragment } from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        {/* sidebar */}
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ankur Halder
          </motion.span>

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
