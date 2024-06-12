import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

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
  const ref = useRef();

  return (
    <motion.div
      className="skills none"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Ready to Elevate Your Projects with My Skills?
          <br /> Explore My Skills
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/skills/skills.svg" alt="Skills" />
          <h1>
            <motion.span whileHover={{ color: "orange" }}>Explore</motion.span>{" "}
            My
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.span whileHover={{ color: "orange" }}>Skills</motion.span>
          </h1>
          <button>Download My CV</button>
        </div>
      </motion.div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card">
            <img src="/skills/javascript.svg" alt="JavaScript" />
            <span>JavaScript</span>
            <button>See More</button>
            <p>
              I have experience in building web applications using JavaScript. I
              have also worked on various projects using JavaScript. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Quaerat est delectus
              nisi soluta dolores blanditiis sequi culpa, modi voluptatem nam
              asperiores possimus nobis voluptate odio ex harum? Nisi doloribus,
              sint architecto quidem fuga necessitatibus amet vitae at officia
              iure iste dolorum mollitia voluptatum quaerat optio itaque
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/reactjs.svg" alt="React" />
            <span>React</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/nodejs.svg" alt="Node.js" />
            <span>Node.js</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/mongodb.svg" alt="MongoDB" />
            <span>MongoDB</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/sql.svg" alt="MySQL" />
            <span>SQL</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/next.svg" alt="next" />
            <span>next</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/python.svg" alt="python" />
            <span>python</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/java.svg" alt="java" />
            <span>java</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/c.svg" alt="c" />
            <span>c</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/html.svg" alt="HTML" />
            <span>HTML</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/css3.svg" alt="CSS" />
            <span>CSS</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/scss.svg" alt="scss" />
            <span>scss</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/django.svg" alt="django" />
            <span>django</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/skills/github.svg" alt="GitHub" />
            <span>GitHub</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Skills;
