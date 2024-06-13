import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero none">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Ankur Halder</motion.h1>
          <motion.h2 variants={textVariants}>
            Full-stack Web Developer
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <a
              href="/ankurhalder.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button variants={textVariants}>
                Download My CV
              </motion.button>
            </a>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/hero/scroll.svg"
            alt="scroll down"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Dev Fullstack
      </motion.div>
      <div className="imageContainer">
        <img src="/hero/ankurhalder.png" alt="Ankur Halder" />
      </div>
    </div>
  );
};

export default Hero;
