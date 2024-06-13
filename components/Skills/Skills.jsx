import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Modal } from "../../pieces";
import { skillDetails } from "../../data/skillDetails";

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
        {Object.keys(skillDetails).map((key) => (
          <SwiperSlide key={key}>
            <motion.div
              className={`card ${key.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={`/skills/${key.toLowerCase()}.svg`}
                alt={skillDetails[key].title}
                loading="lazy"
              />
              <span>{skillDetails[key].title}</span>
              <button
                className="seeMoreButton"
                onClick={() => handleSeeMoreClick(skillDetails[key])}
                aria-label={`See more about ${skillDetails[key].title}`}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleSeeMoreClick(skillDetails[key]);
                  }
                }}
              >
                See More
              </button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        show={isModalOpen}
        onClose={closeModal}
        content={
          selectedSkill && (
            <>
              <h2 className="skill-heading">{selectedSkill.title}</h2>
              <div className="subheading">Description:</div>
              <p>{selectedSkill.description}</p>
              <div className="subheading">Key Features:</div>
              <ul>
                {selectedSkill.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )
        }
      />
    </motion.div>
  );
};

export default Skills;
