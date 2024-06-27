import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: "/public/about/frontend-dev.svg",
  },
  {
    id: 2,
    title: "Backend Developer",
    icon: "/public/about/backend-dev.svg",
  },
  {
    id: 3,
    title: "Database Engineer",
    icon: "/public/about/database-eng.svg",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    icon: "/public/about/ui-ux-designer.svg",
  },
];

const About = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <div className="about-section">
      <h2 className="section-title">Hello, I`&apos;`m Ankur Halder 👋</h2>
      <p className="about-description">
        I am a dedicated software developer proficient in the MERN stack, Django
        (full stack, REST API, ORM), Python (OOP), JavaScript (OOP), Java (OOP),
        and Next.js (full stack), with a strong focus on creating robust and
        efficient solutions. Currently pursuing a B.Tech in Computer Science at
        the University Of Engineering & Management, New Town, I bring a solid
        foundation in data structures and algorithms to my work.
      </p>
      <p className="about-description">
        My educational journey includes Senior Secondary studies in Science and
        Secondary education, providing me with a comprehensive academic
        background. Beyond coding, I find joy in exploring diverse interests
        like watching anime, discovering new movies and TV series, and diving
        into captivating science fiction and space exploration topics.
      </p>

      <div className="cards">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="card-grid"
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
    </div>
  );
};

export default About;
