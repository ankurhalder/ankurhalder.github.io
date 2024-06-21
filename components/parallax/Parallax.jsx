import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import planetsImage from "/parallax/planets.png";
import sunImage from "/parallax/sun.png";
import starsImage from "/parallax/stars.png";
import cloud1Image from "/parallax/cloud-1.png";
import cloud2Image from "/parallax/cloud-2.png";
import mountainsImage from "/parallax/mountains.png";
import sky1Image from "/parallax/sky-1.jpg";
import sky2Image from "/parallax/sky-2.jpg";

const Parallax = ({ type, isDarkMode }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const rotateStars = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
  const moveCloud1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const moveCloud2 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#111" : "#fff",
  };

  const planetImage = type === "Skills" ? planetsImage : sunImage;

  return (
    <div
      className={`parallax ${type.toLowerCase()} ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
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
      <motion.div className="mountains">
        <img src={mountainsImage} alt="Mountains" />
      </motion.div>
      {isDarkMode ? (
        <>
          <motion.div
            className="stars"
            style={{
              backgroundImage: `url(${starsImage})`,
              rotate: rotateStars,
            }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          ></motion.div>
          <motion.div
            className="planets"
            style={{
              y: yBg,
              scale: scaleBg,
              backgroundImage: `url(${planetImage})`,
            }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          ></motion.div>
        </>
      ) : (
        <>
          {type === "Skills" && (
            <motion.div
              className="sky"
              style={{ backgroundImage: `url(${sky1Image})` }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            ></motion.div>
          )}
          {type === "Projects" && (
            <motion.div
              className="sky"
              style={{ backgroundImage: `url(${sky2Image})` }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            ></motion.div>
          )}
          <motion.div
            className="cloud cloud-1"
            style={{ x: moveCloud1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <img src={cloud1Image} alt="Cloud 1" />
          </motion.div>
          <motion.div
            className="cloud cloud-2"
            style={{ x: moveCloud2 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <img src={cloud2Image} alt="Cloud 2" />
          </motion.div>
          <motion.div
            className="planets"
            style={{
              y: yBg,
              scale: scaleBg,
              backgroundImage: `url(${planetImage})`,
            }}
            transition={{ ease: "easeOut", duration: 0.5 }}
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
