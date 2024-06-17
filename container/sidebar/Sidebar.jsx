import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toogleButtom/ToggleButton";

import PropTypes from "prop-types";
const variants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      // stiffness: 20,
    },
  },
  closed: {
    x: "100%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      // damping: 40,
    },
  },
};

function Sidebar({ isDarkMode, setIsDarkMode }) {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      variants={variants}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        zIndex: 9999,
      }}
    >
      <motion.div className="bg" variants={variants}>
        <h1>Ankur Halder</h1>
        <Links closeSidebar={closeSidebar} />
      </motion.div>
      <ToggleButton
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setOpen={setOpen}
        isOpen={open}
      />
    </motion.div>
  );
}

Sidebar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};
export default Sidebar;
