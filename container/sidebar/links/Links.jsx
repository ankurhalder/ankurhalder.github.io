import { motion } from "framer-motion";
import PropTypes from "prop-types";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
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
    y: 50,
    opacity: 0,
  },
};

const Links = ({ closeSidebar }) => {
  const items = [
    "Homepage",
    "Skills",
    "Projects",
    "ComingSoon",
    "ComingSoon ",
    "ComingSoon  ",
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeSidebar}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

Links.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
};

export default Links;
