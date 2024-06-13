import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Modal } from "../../pieces";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef();

  const handleSeeMoreClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <motion.div
      className="skills none"
      variants={variants}
      initial="initial"
      ref={ref}
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Ready to Elevate Your Projects with My Skills?
          {/* <br /> Explore My Skills */}
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/skills/skills.svg" alt="Skills" />
          <h1>
            <span>Explore</span> My
          </h1>
        </div>
        <div className="title">
          <h1>
            <span>Skills</span>
          </h1>
          <button aria-label="Download My CV">Download My CV</button>
        </div>
      </motion.div>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {[
          {
            src: "/skills/javascript.svg",
            alt: "JavaScript",
            text: "JavaScript",
          },
          { src: "/skills/reactjs.svg", alt: "React", text: "React" },
          { src: "/skills/nodejs.svg", alt: "Node.js", text: "Node.js" },
          { src: "/skills/mongodb.svg", alt: "MongoDB", text: "MongoDB" },
          { src: "/skills/sql.svg", alt: "MySQL", text: "SQL" },
          { src: "/skills/next.svg", alt: "Next.js", text: "Next.js" },
          { src: "/skills/python.svg", alt: "Python", text: "Python" },
          { src: "/skills/java.svg", alt: "Java", text: "Java" },
          { src: "/skills/c.svg", alt: "C", text: "C" },
          { src: "/skills/html.svg", alt: "HTML", text: "HTML" },
          { src: "/skills/css3.svg", alt: "CSS", text: "CSS" },
          { src: "/skills/scss.svg", alt: "SCSS", text: "SCSS" },
          { src: "/skills/django.svg", alt: "Django", text: "Django" },
          { src: "/skills/github.svg", alt: "GitHub", text: "GitHub" },
        ].map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={skill.src} alt={skill.alt} loading="lazy" />
              <span>{skill.text}</span>
              <button
                className="seeMoreButton"
                onClick={() => handleSeeMoreClick(skill)}
                aria-label={`See more about ${skill.text}`}
              >
                See More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        show={isModalOpen}
        onClose={closeModal}
        content={
          selectedSkill && (
            <>
              <h2>{selectedSkill.text}</h2>
              {selectedSkill.text === "JavaScript" && (
                <p>
                  I have experience in building web applications using
                  JavaScript. I have also worked on various projects using
                  JavaScript. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Quaerat est delectus nisi soluta dolores
                  blanditiis sequi culpa, modi voluptatem nam asperiores
                  possimus nobis voluptate odio ex harum? Nisi doloribus, sint
                  architecto quidem fuga necessitatibus amet vitae at officia
                  iure iste dolorum mollitia voluptatum quaerat optio itaque.
                </p>
              )}
              {/* Add more detailed content for each skill here */}
            </>
          )
        }
      />
    </motion.div>
  );
};

export default Skills;
