import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Space Otaku",
    img: "/projects/spaceotaku.png",
    desc: "Space Otaku – your ultimate destination for staying up-to-date with the latest space news, astronaut activities, satellite locations, solar system details, and much more! This project combines the power of Next.js, Sass, and the Dialogflow chatbot to provide you with a seamless and interactive experience.",
    githubLink: "https://github.com/ankurhalder/spaceotaku",
    demoLink: "https://www.spaceotaku.online",
  },
  {
    id: 2,
    title: "Adcomsys",
    img: "/projects/adcomsys.png",
    desc: "Developed the official website for the First International Conference on Advanced Computing and Systems, AdComSys 2024, organized by UEM. Collaborated with Vidit Modi to create a seamless digital experience facilitating knowledge exchange and collaboration in cutting-edge technologies.",
    githubLink: "https://github.com/uem-conference/uem-conference.github.io",
    demoLink: "https://adcomsys.uem.edu.in",
  },
  {
    id: 3,
    title: "Eduversa",
    img: "/projects/eduversa.png",
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
    <section>
      <div className="container none">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
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
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            )}
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
    img: PropTypes.string.isRequired,
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

  return (
    <div className="main-project none" ref={ref}>
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

export default MainProject;
