import { Fragment } from "react";

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

        <div className="cards">
          {cardData.map((card) => (
            <div
              className={`card card-${card.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={card.id}
            >
              <img src={card.src} alt={card.alt} />
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </article>
    </Fragment>
  );
}

export default About;
