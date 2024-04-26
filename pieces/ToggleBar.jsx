import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ToggleBar = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    onToggle && onToggle(!isDarkMode);
  };

  return (
    <motion.div
      className={`toggle-bar ${isDarkMode ? "dark-mode" : ""}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleMode}
      style={{ backgroundColor: isDarkMode ? "#000" : "#fff" }}
    >
      <motion.div
        className="toggle-button"
        animate={{ marginLeft: isDarkMode ? "0px" : "20px" }}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4" y1="4" x2="4" y2="4" />
            <line x1="4" y1="12" x2="4" y2="12" />
            <line x1="4" y1="20" x2="4" y2="20" />
            <line x1="20" y1="4" x2="20" y2="4" />
            <line x1="20" y1="12" x2="20" y2="12" />
            <line x1="20" y1="20" x2="20" y2="20" />
            <line x1="1" y1="4" x2="3" y2="4" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="1" y1="20" x2="3" y2="20" />
            <line x1="21" y1="4" x2="23" y2="4" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="21" y1="20" x2="23" y2="20" />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
};

ToggleBar.propTypes = {
  onToggle: PropTypes.func,
};

export default ToggleBar;
