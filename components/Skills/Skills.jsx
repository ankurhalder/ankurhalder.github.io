/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Modal } from "../../pieces";
import { skillDetails } from "../../data/skillDetails";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
  });

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
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="textContainer"
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={textInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          Ready to Elevate Your Projects with My Skills?
        </motion.p>
        <motion.hr
          initial={{ width: 0 }}
          animate={textInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="titleContainer"
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="title">
          <motion.img
            src="/skills/skills.svg"
            alt="Skills"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <span>Explore</span> My
          </motion.h1>
        </div>
        <div className="title">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <span>Skills</span>
          </motion.h1>
          <a href="/ankurhalder.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              aria-label="Download My CV"
              initial={{ opacity: 0, y: 20 }}
              animate={
                titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Download My CV
            </motion.button>
          </a>
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
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={0}
      >
        {Object.keys(skillDetails).map((key, index) => (
          <SwiperSlide key={key}>
            <motion.div
              className={`card ${key.toLowerCase()}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={`/skills/${key.toLowerCase()}.svg`}
                alt={skillDetails[key].title}
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {skillDetails[key].title}
              </motion.span>
              <motion.button
                className="seeMoreButton"
                onClick={() => handleSeeMoreClick(skillDetails[key])}
                aria-label={`See more about ${skillDetails[key].title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                See More
              </motion.button>
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
              <motion.h2
                className="skill-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {selectedSkill.title}
              </motion.h2>
              <motion.div
                className="subheading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Description:
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {selectedSkill.description}
              </motion.p>
              <motion.div
                className="subheading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Key Features:
              </motion.div>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {selectedSkill.keyFeatures.map((feature, index) => (
                  <motion.li key={index}>{feature}</motion.li>
                ))}
              </motion.ul>
            </>
          )
        }
      />
    </motion.div>
  );
};

export default Skills;
