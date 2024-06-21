import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    backgroundColor: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 1.05,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: 1,
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
      ease: "linear",
    },
  },
};

const scrollIconVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: [1, 0.8, 1],
    y: [10, 0, 10],
    transition: {
      duration: 2,
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

const Hero = () => {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="hero none">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          ref={textRef}
          variants={textVariants}
          initial="initial"
          animate={textInView ? "animate" : "initial"}
        >
          <motion.h1 variants={textVariants} whileHover="hover">
            Ankur Halder
          </motion.h1>
          <motion.h2 variants={textVariants} whileHover="hover">
            Full-stack Web Developer
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <a
              href="/ankurhalder.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button variants={buttonVariants} whileHover="hover">
                Download My CV
              </motion.button>
            </a>
            <motion.button variants={buttonVariants} whileHover="hover">
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

      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "ImageObject",
            "contentUrl": "/hero/ankurhalder.png",
            "description": "Ankur Halder",
            "name": "Ankur Halder"
          }
        `}
      </script>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Dev Fullstack
      </motion.div>

      <motion.div
        className="imageContainer"
        variants={imageVariants}
        initial="initial"
        animate={textInView ? "animate" : "initial"}
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
