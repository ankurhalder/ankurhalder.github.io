import { useRef } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const items = [
  {
    id: 1,
    title: "Space Otaku",
    subTitle: "Solo Project",
    video: "/projects/spaceotaku.mp4",
    poster: "/projects/spaceotaku.png",
    desc: "Space Otaku – your ultimate destination for staying up-to-date with the latest space news, astronaut activities, satellite locations, solar system details, and much more! This project combines the power of Next.js, Sass, and the Dialogflow chatbot to provide you with a seamless and interactive experience.",
    githubLink: "https://github.com/ankurhalder/spaceotaku",
    demoLink: "https://www.spaceotaku.online",
  },
  {
    id: 2,
    title: "Adcomsys",
    subTitle: "Official College Project",
    video: "/projects/adcomsys.mp4",
    poster: "/projects/adcomsys.png",
    desc: "Developed the official website for the First International Conference on Advanced Computing and Systems, AdComSys 2024, organized by UEM. The International Conference on Advanced Computing and Systems (AdcomSYS) will foster an excellent international forum for exchanging knowledge and the recent developments in theory.",
    githubLink: "https://github.com/uem-conference/uem-conference.github.io",
    demoLink: "https://adcomsys.uem.edu.in",
  },
  {
    id: 3,
    title: "Eduversa",
    subTitle: "Group Project",
    poster: "/projects/eduversa.png",
    video: "/projects/eduversa.mp4",
    desc: "Discover Eduversa: the ultimate student management solution. Empowering students with data access and aiding teachers in attendance and student info management. Utilizing Next-gen tech for seamless operation.",
    githubLink: "https://github.com/eduversa/eduversa.github.io",
    demoLink: "https://www.eduversa.in",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const parallaxY = useMotionValue(0);
  const opacity = useTransform(parallaxY, [-200, 0], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6, ease: "easeInOut" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      ref={inViewRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="singleProject"
    >
      <div className="container none">
        <div className="wrapper">
          <motion.div
            className="videoContainer"
            ref={ref}
            variants={videoVariants}
          >
            <motion.video
              autoPlay
              muted
              loop
              src={item.video}
              alt={`Video of ${item.title}`}
              loading="lazy"
              style={{ opacity, y: parallaxY }}
              poster={item.poster}
            />
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <h3>{item.subTitle}</h3>
            <p>{item.desc}</p>
            {item.githubLink && (
              <motion.a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
              >
                <button>See Github</button>
              </motion.a>
            )}
            {item.demoLink && (
              <motion.a
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
              >
                <button>See Demo</button>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    demoLink: PropTypes.string,
  }).isRequired,
};

const MainProject = () => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
  });

  const progressBarVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="main-project" ref={ref}>
      <div className="progress-wrapper">
        <motion.h1
          ref={inViewRef}
          className="projectsTitle"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          Featured Projects
        </motion.h1>
        <div className="progress">
          <motion.div
            style={{ scaleX }}
            className="progressBar"
            initial="hidden"
            animate="visible"
            variants={progressBarVariants}
          />
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MainProject;
