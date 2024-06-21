import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import planetsImage from "/parallax/planets.png";
import sunImage from "/parallax/sun.png";
import starsImage from "/parallax/stars.png";
import cloud1Image from "/parallax/cloud-1.png";
import cloud2Image from "/parallax/cloud-2.png";
import mountainsImage from "/parallax/mountains.png";
import sky1Image from "/parallax/sky-1.png";

const Parallax = ({ type, isDarkMode }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animations for different elements
  const yText = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "20%", "40%"]
  );
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotateStars = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
  const moveCloud1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const moveCloud2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Dynamic styles based on dark mode
  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#111" : "#fff",
  };

  // Choose planet image based on dark mode
  const planetImage = isDarkMode ? planetsImage : sunImage;

  return (
    <div
      className={`parallax ${type.toLowerCase()} ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
      ref={ref}
      style={backgroundStyle}
    >
      {/* Animated heading */}
      <motion.h1
        className="parallax-heading"
        style={{ y: yText }}
        initial={{ opacity: 0, y: "-10%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {type === "Skills"
          ? "Looking for a Skill Set That Matches Your Needs?"
          : "Explore My Projects and Get to Know Me Better!"}
      </motion.h1>

      {/* Static mountains */}
      <motion.div
        className="mountains"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <img src={mountainsImage} alt="Mountains" />
      </motion.div>

      {/* Render elements based on dark mode and type */}
      {isDarkMode ? (
        <>
          {/* Animated stars */}
          <motion.div
            className="stars"
            style={{
              backgroundImage: `url(${starsImage})`,
              rotate: rotateStars,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          ></motion.div>

          {/* Animated planets */}
          <motion.div
            className="planets"
            style={{
              y: yBg,
              scale: scaleBg,
              backgroundImage: `url(${planetImage})`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          ></motion.div>
        </>
      ) : (
        <>
          {/* Sky background (conditional based on type) */}
          {(type === "Skills" || type === "Projects") && (
            <motion.div
              className="sky"
              style={{ backgroundImage: `url(${sky1Image})` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            ></motion.div>
          )}

          {/* Animated clouds */}
          <motion.div
            className="cloud cloud-1"
            style={{ x: moveCloud1 }}
            initial={{ opacity: 0, x: "-10%" }}
            animate={{ opacity: 1, x: "10%" }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <img src={cloud1Image} alt="Cloud 1" />
          </motion.div>

          <motion.div
            className="cloud cloud-2"
            style={{ x: moveCloud2 }}
            initial={{ opacity: 0, x: "-20%" }}
            animate={{ opacity: 1, x: "20%" }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <img src={cloud2Image} alt="Cloud 2" />
          </motion.div>

          {/* Animated planets */}
          <motion.div
            className="planets"
            style={{
              y: yBg,
              scale: scaleBg,
              backgroundImage: `url(${planetImage})`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          ></motion.div>
        </>
      )}
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.oneOf(["Skills", "Projects"]).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Parallax;
