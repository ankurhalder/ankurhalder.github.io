import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toogleButtom/ToggleButton";
import { ToggleBar } from "../../pieces";

const variants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    x: "100%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <motion.div
      className={`sidebar ${open ? "open" : "closed"}`}
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
      <motion.div
        className={`bg ${open ? "open" : "closed"}`}
        variants={variants}
      >
        <h1>Ankur Halder</h1>
        <Links closeSidebar={closeSidebar} />
        <div className="togglebar-container">
          <ToggleBar />
        </div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
