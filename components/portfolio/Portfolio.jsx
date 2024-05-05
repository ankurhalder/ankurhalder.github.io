import { useRef } from "react";
import PropTypes from "prop-types";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Space Otaku",
    img: "/projects/spaceotaku.png",
    desc: "Space Otaku – your ultimate destination for staying up-to-date with the latest space news, astronaut activities, satellite locations, solar system details, and much more! This project combines the power of Next.js, Sass, and the Dialogflow chatbot to provide you with a seamless and interactive experience.",
  },
  {
    id: 2,
    title: "Adcomsys",
    img: "/projects/adcomsys.png",
    desc: "eveloped the official website for the First International Conference on Advanced Computing and Systems, AdComSys 2024, organized by UEM. Collaborated with Vidit Modi to create a seamless digital experience facilitating knowledge exchange and collaboration in cutting-edge technologies.",
  },
  {
    id: 3,
    title: "Eduversa",
    img: "/projects/eduversa.png",
    desc: "Discover Eduversa: the ultimate student management solution. Empowering students with data access and aiding teachers in attendance and student info management. Utilizing Next-gen tech for seamless operation.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  Single.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  };
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Github</button>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
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

export default Portfolio;
