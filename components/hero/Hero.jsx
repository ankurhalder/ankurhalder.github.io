import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textContainerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const scrollIconVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: [1, 0.8, 1],
    y: [10, 0, 10],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
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
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: ["0%", "-100%", "-200%", "-300%"],
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    },
  },
};

function contactMeHandler() {
  alert("Coming soon please stay tuned!");
}

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
          <motion.h1 variants={titleVariants} whileHover="hover">
            <span>Ankur</span> Halder
          </motion.h1>
          <motion.h2 variants={titleVariants} whileHover="hover">
            Full-stack Web Developer
          </motion.h2>
          <motion.div variants={buttonVariants} className="buttons">
            <a
              href="/ankurhalder.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                // variants={buttonVariants}
                // whileHover="hover"
                // whileTap={{ scale: 0.95 }}
                className="cvButton"
              >
                Download My CV
              </motion.button>
            </a>
            <motion.button
              onDoubleClick={contactMeHandler}
              // variants={buttonVariants}
              // whileHover="hover"
              // whileTap={{ scale: 0.95 }}
              className="contactButton"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={scrollIconVariants}
            src="/hero/scroll.svg"
            alt="Scroll down"
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
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
