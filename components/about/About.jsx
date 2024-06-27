import { Fragment, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: "/about/frontend-dev.svg",
  },
  {
    id: 2,
    title: "Backend Developer",
    icon: "/about/backend-dev.svg",
  },
  {
    id: 3,
    title: "Database Engineer",
    icon: "/about/database.svg",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    icon: "/about/ui.svg",
  },
];

const About = () => {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const textControls = useAnimation();

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textInView, textControls]);

  const { ref: cardRef, inView: cardInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const cardControls = useAnimation();

  useEffect(() => {
    if (cardInView) {
      cardControls.start("visible");
    } else {
      cardControls.start("hidden");
    }
  }, [cardInView, cardControls]);

  const textContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const h2Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <Fragment>
      <article className="about-section">
        <motion.div
          className="text-container"
          variants={textContainerVariants}
          initial="hidden"
          animate={textControls}
          ref={textRef}
        >
          <motion.div className="animated-text" variants={h2Variants}>
            <h2 className="section-title">Hello, I&apos;m Ankur Halder 👋</h2>
          </motion.div>
          <motion.div className="animated-text" variants={textVariants}>
            <p className="about-description">
              I am a dedicated software developer proficient in the MERN stack,
              Django (full stack, REST API, ORM), Python (OOP), JavaScript
              (OOP), Java (OOP), and Next.js (full stack), with a strong focus
              on creating robust and efficient solutions. Currently pursuing a
              B.Tech in Computer Science at the University Of Engineering &
              Management, New Town, I bring a solid foundation in data
              structures and algorithms to my work.
            </p>
          </motion.div>
          <motion.div className="animated-text" variants={textVariants}>
            <p className="about-description">
              My educational journey includes Senior Secondary studies in
              Science and Secondary education, providing me with a comprehensive
              academic background. Beyond coding, I find joy in exploring
              diverse interests like watching anime, discovering new movies and
              TV series, and diving into captivating science fiction and space
              exploration topics.
            </p>
          </motion.div>
          <div className="cards-container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={cardControls}
              className="cards"
              ref={cardRef}
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="card"
                  variants={cardVariants}
                >
                  <div className="card-inner">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="card-icon"
                    />
                    <h3 className="card-title">{service.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </article>
    </Fragment>
  );
};

export default About;
