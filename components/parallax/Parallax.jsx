import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

// Utility function to detect theme
const detectTheme = () => {
  if (typeof document !== "undefined") {
    return document.body.classList.contains("theme-dark") ? "dark" : "light";
  }
  return "dark"; // default to dark theme
};

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotateStars = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);

  const backgroundStyle = {
    backgroundColor: "var(--background-color)",
  };

  // State to hold the current theme
  const [theme, setTheme] = useState(detectTheme());

  // Effect to update theme when body class changes
  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(detectTheme());
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const planetImage =
    theme === "dark" ? "/parallax/planets.png" : "/parallax/sun.png";

  return (
    <div
      className={`parallax ${type.toLowerCase()}`}
      ref={ref}
      style={backgroundStyle}
    >
      <motion.h1
        style={{ y: yText }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {type === "Skills"
          ? "Looking for a Skill Set That Matches Your Needs?"
          : "Explore My Projects and Get to Know Me Better!"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          scale: scaleBg,
          backgroundImage: `url(${planetImage})`,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      ></motion.div>
      {theme === "dark" && (
        <motion.div
          className="stars"
          style={{ rotate: rotateStars }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        ></motion.div>
      )}
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.oneOf(["Skills", "Projects"]).isRequired,
};

export default Parallax;
