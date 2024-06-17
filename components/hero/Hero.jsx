import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
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
            animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }}
            src="/hero/scroll.svg"
            alt="Scroll down"
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

      <div className="imageContainer">
        <img
          src="/hero/ankurhalder.png"
          alt="Ankur Halder"
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </div>
    </div>
  );
};

export default Hero;
