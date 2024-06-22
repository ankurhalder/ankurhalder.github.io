import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
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

  const { ref: textInViewRef, inView: textInView } = useInView({
    threshold: 0.5,
  });

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const yText = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "20%", "40%"]
  );
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotateStars = useTransform(
    scrollYProgress,
    [0, 1],
    viewportWidth >= 450 ? ["0deg", "45deg"] : ["0deg", "0deg"]
  );
  const rotateSky = useTransform(scrollYProgress, [0, 1], ["0deg", "0deg"]);
  const moveCloud1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const moveCloud2 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  const backgroundStyle = {
    backgroundColor: "var(--background-color)",
  };

  const planetImage = isDarkMode ? planetsImage : sunImage;

  return (
    <div
      className={`parallax ${type.toLowerCase()} ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
      ref={ref}
      style={backgroundStyle}
    >
      <motion.h1
        className="parallax-heading"
        style={{ y: yText }}
        initial={{ opacity: 0, y: "-10%" }}
        animate={
          textInView ? { opacity: 1, y: "0%" } : { opacity: 0, y: "-10%" }
        }
        transition={{ ease: "easeInOut", duration: 0.8 }}
        ref={textInViewRef}
      >
        {type === "Skills"
          ? "Looking for a Skill Set That Matches Your Needs?"
          : "Explore My Projects and Get to Know Me Better!"}
      </motion.h1>
      <motion.div className="mountains">
        <img src={mountainsImage} alt="Mountains" />
      </motion.div>

      <AnimatePresence>
        {isDarkMode ? (
          <>
            <motion.div
              className="stars"
              style={{
                backgroundImage: `url(${starsImage})`,
                rotate: rotateStars,
                translateZ: "-10px",
              }}
            />

            <motion.div
              className="planets"
              style={{
                y: yBg,
                scale: scaleBg,
                backgroundImage: `url(${planetImage})`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            />
          </>
        ) : (
          <>
            {(type === "Skills" || type === "Projects") && (
              <motion.div
                className="sky"
                style={{
                  backgroundImage: `url(${sky1Image})`,
                  rotate: rotateSky,
                }}
              />
            )}

            <motion.div
              className="cloud cloud-1"
              style={{ x: moveCloud1, zIndex: 1 }}
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "25%" }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            >
              <img src={cloud1Image} alt="Cloud 1" />
            </motion.div>

            <motion.div
              className="cloud cloud-2"
              style={{ x: moveCloud2 }}
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "25%" }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.oneOf(["Skills", "Projects"]).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Parallax;
