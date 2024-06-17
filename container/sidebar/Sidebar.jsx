import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toogleButtom/ToggleButton";
import { ToggleBar } from "../../pieces";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at 50px 50px)",
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
    <motion.div className="sidebar none" animate={open ? "open" : "closed"}>
      <motion.div
        className={`bg ${open ? "open" : "closed"}`}
        variants={variants}
      >
        <h1>Ankur Halder</h1>
        <Links closeSidebar={closeSidebar} />
        <div className="togglebar-container">
          <ToggleBar></ToggleBar>
        </div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
