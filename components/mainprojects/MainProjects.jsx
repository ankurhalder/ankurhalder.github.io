import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";

const items = [
  {
    id: 1,
    title: "Space Otaku",
    video: "/projects/spaceotaku.mp4",
    desc: "Space Otaku – your ultimate destination for staying up-to-date with the latest space news, astronaut activities, satellite locations, solar system details, and much more! This project combines the power of Next.js, Sass, and the Dialogflow chatbot to provide you with a seamless and interactive experience.",
    githubLink: "https://github.com/ankurhalder/spaceotaku",
    demoLink: "https://www.spaceotaku.online",
  },
  {
    id: 2,
    title: "Adcomsys",
    video: "/projects/adcomsys.mp4",
    desc: "Developed the official website for the First International Conference on Advanced Computing and Systems, AdComSys 2024, organized by UEM. Collaborated with Vidit Modi to create a seamless digital experience facilitating knowledge exchange and collaboration in cutting-edge technologies.",
    githubLink: "https://github.com/uem-conference/uem-conference.github.io",
    demoLink: "https://adcomsys.uem.edu.in",
  },
  {
    id: 3,
    title: "Eduversa",
    video: "/projects/eduversa.mp4",
    desc: "Discover Eduversa: the ultimate student management solution. Empowering students with data access and aiding teachers in attendance and student info management. Utilizing Next-gen tech for seamless operation.",
    githubLink: "https://github.com/eduversa/eduversa.github.io",
    demoLink: "https://www.eduversa.in",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
  };

  return (
    <article ref={inViewRef}>
      <motion.div
        className="container"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="wrapper">
          <motion.div
            className="videoContainer"
            ref={ref}
            variants={videoVariants}
          >
            <video
              controls
              src={item.video}
              alt={`Video of ${item.title}`}
              loading="lazy"
            />
          </motion.div>
          <motion.div className="textContainer" style={{ y }}>
            <header>
              <h2>{item.title}</h2>
            </header>
            <p>{item.desc}</p>
            {item.githubLink && (
              <motion.a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
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
              >
                <button>See Demo</button>
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </article>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    demoLink: PropTypes.string,
  }).isRequired,
};

const MainProject = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const progressBarVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1, transition: { duration: 1 } },
  };

  return (
    <main className="main-project" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar"
          initial="hidden"
          animate="visible"
          variants={progressBarVariants}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </main>
  );
};

export default MainProject;
