import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      style={{
        zIndex: 99999,
      }}
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="var(--background-color)"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="var(--background-color)"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="var(--background-color)"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
export default ToggleButton;
