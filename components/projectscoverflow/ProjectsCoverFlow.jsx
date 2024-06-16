import { useReducer, Fragment } from "react";
import Slide from "./Slide";

const slides = [
  {
    title: "Space Otaku",
    subtitle: "Solo Project",
    description:
      "Welcome to Space Otaku – your ultimate destination for staying up-to-date with the latest space news, astronaut activities, satellite locations, solar system details, and much more!",
    video: "/projects/spaceotaku.mp4",
    poster: "/projects/spaceotaku.png",
  },
  {
    title: "Eduversa",
    subtitle: "Group Project",
    description:
      "Discover Eduversa: the ultimate student management solution. Empowering students with data access and aiding teachers in attendance and student info management. Utilizing Next-gen tech for seamless operation.",
    video: "/projects/eduversa.mp4",
    poster: "/projects/eduversa.png",
  },
  {
    title: "Adcomsys",
    subtitle: "College Official Project",
    description:
      "The International Conference on Advanced Computing and Systems (AdcomSYS) will foster an excellent international forum for exchanging knowledge and the recent developments in theory,",
    video: "/projects/adcomsys.mp4",
    poster: "/projects/adcomsys.png",
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

  return (
    <Fragment>
      <div className="coverflow">
        <h1>Projects</h1>
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
