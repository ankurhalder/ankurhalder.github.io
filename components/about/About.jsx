import { Fragment } from "react";
import { motion, useAnimation } from "framer-motion";

function About() {
  const cardData = [
    {
      id: 1,
      src: "/about/frontend-dev.svg",
      alt: "Frontend Developer",
      title: "Frontend Developer",
    },
    {
      id: 2,
      src: "/about/backend-dev.svg",
      alt: "Backend Developer",
      title: "Backend Developer",
    },
    {
      id: 3,
      src: "/about/database.svg",
      alt: "Database Engineer",
      title: "Database Engineer",
    },
    {
      id: 4,
      src: "/about/ui.svg",
      alt: "UI/UX Designer",
      title: "UI/UX Designer",
    },
  ];

  // Controls for animations
  const controls = useAnimation();

  // Function to start animations
  const startAnimation = async () => {
    await controls.start("visible");
  };

  // Variant for staggered animation
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // Delay before animating
        staggerChildren: 0.2, // Stagger animation
      },
    },
  };

  // Variants for individual card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50, // Initial position outside viewport (left)
      rotateY: -90, // Start with a 90-degree rotation (facing away)
    },
    visible: {
      opacity: 1,
      x: 0, // Move to the original position (center)
      rotateY: 0, // Rotate back to 0 degrees
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Fragment>
      <article className="about-section">
        <h2 className="section-title">Hello, I&apos;m Ankur Halder 👋</h2>
        <p className="about-description">
          I am a dedicated software developer proficient in the MERN stack,
          Django (full stack, REST API, ORM), Python (OOP), JavaScript (OOP),
          Java (OOP), and Next.js (full stack), with a strong focus on creating
          robust and efficient solutions. Currently pursuing a B.Tech in
          Computer Science at the University Of Engineering & Management, New
          Town, I bring a solid foundation in data structures and algorithms to
          my work.
        </p>
        <p className="about-description">
          My educational journey includes Senior Secondary studies in Science
          and Secondary education, providing me with a comprehensive academic
          background. Beyond coding, I find joy in exploring diverse interests
          like watching anime, discovering new movies and TV series, and diving
          into captivating science fiction and space exploration topics.
        </p>

        <motion.div
          className="cards"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onAnimationStart={startAnimation}
        >
          {cardData.map((card) => (
            <motion.div
              className={`card card-${card.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={card.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: -10,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img src={card.src} alt={card.alt} />
              <h3>{card.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </article>
    </Fragment>
  );
}

export default About;
