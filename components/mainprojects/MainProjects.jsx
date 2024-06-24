import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring } from "framer-motion";

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

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section className="single-project">
      <div className="container">
        <div className="wrapper">
          <div className="videoContainer" ref={ref}>
            <motion.video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controls={false}
              preload="auto"
              poster={`/projects/posters/${item.id}.png`}
              alt={`Video preview of ${item.title}`}
              loading="lazy"
              aria-label={`Video preview of ${item.title}`}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="animated-video"
            ></motion.video>
            <div className="videoOverlay"></div>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonGroup">
              {item.githubLink && (
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>See Github</button>
                </a>
              )}
              {item.demoLink && (
                <a
                  href={item.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>See Demo</button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
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

const MainProjects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="main-project" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MainProjects;