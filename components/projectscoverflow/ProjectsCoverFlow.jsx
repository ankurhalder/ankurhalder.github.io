import { useReducer, Fragment } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slide from "./Slide";

const slides = [
  {
    title: "Space Otaku",
    subtitle: "Solo Project",
    description:
      "Welcome to Space Otaku – your ultimate destination for staying up-to-date with the latest space news, astronaut activities, satellite locations, solar system details, and much more!",
    video: "/projects/spaceotaku.mp4",
    poster: "/projects/spaceotaku.png",
    githubLink: "github.com/ankurhalder/spaceotaku",
    websiteLink: "www.spaceotaku.online",
  },
  {
    title: "Eduversa",
    subtitle: "Group Project",
    description:
      "Discover Eduversa: the ultimate student management solution. Empowering students with data access and aiding teachers in attendance and student info management. Utilizing Next-gen tech for seamless operation.",
    video: "/projects/eduversa.mp4",
    poster: "/projects/eduversa.png",
    githubLink: "github.com/eduversa/eduversa.github.io",
    websiteLink: "www.eduversa.in",
  },
  {
    title: "Adcomsys",
    subtitle: "Official College Project",
    description:
      "The International Conference on Advanced Computing and Systems (AdcomSYS) will foster an excellent international forum for exchanging knowledge and the recent developments in theory,",
    video: "/projects/adcomsys.mp4",
    poster: "/projects/adcomsys.png",
    githubLink: "github.com/uem-conference/uem-conference.github.io",
    websiteLink: "adcomsys.uem.edu.in",
  },
];

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
  return state;
};

function ProjectsCoverFlow() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Fragment>
      <div className="coverflow none">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          Projects
        </motion.h1>
        <div className="slides">
          <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
      </div>
    </Fragment>
  );
}

export default ProjectsCoverFlow;
