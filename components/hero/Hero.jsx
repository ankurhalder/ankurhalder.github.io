import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const scrollIconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      yoyo: Infinity,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const sliderVariants = {
  animate: {
    x: ["0%", "-220%"],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
      ease: "linear",
    },
  },
};

const Hero = () => {
  const { ref: textContainerRef, inView: textContainerInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          ref={textContainerRef}
          initial="hidden"
          animate={textContainerInView ? "visible" : "hidden"}
          variants={textContainerVariants}
        >
          <motion.h1 variants={textVariants} whileHover="hover">
            Ankur Halder
          </motion.h1>
          <motion.h2 variants={textVariants} whileHover="hover">
            Full-stack Web Developer
          </motion.h2>
          <motion.div variants={buttonVariants} className="buttons">
            <a
              href="/ankurhalder.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                Download My CV
              </motion.button>
            </a>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={scrollIconVariants}
            src="/hero/scroll.svg"
            alt="Scroll down"
            whileHover="hover"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="animate"
        animate="animate"
      >
        <span>Web Dev Fullstack</span>
      </motion.div>

      <motion.div
        className="imageContainer"
        variants={imageVariants}
        initial="hidden"
        animate={textContainerInView ? "visible" : "hidden"}
      >
        <img
          src="/hero/ankurhalder.png"
          alt="Ankur Halder"
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
