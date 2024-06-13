const ProjectsComponent = () => {
  const projects = [
    {
      title: "AdComSys 2024 Website",
      duration: "May 2023 - Sep 2023",
      organization: "University of Engineering & Management (UEM)",
      description:
        "Developed the official website for the First International Conference on Advanced Computing and Systems, AdComSys 2024, organized by UEM. Collaborated with Vidit Modi to create a seamless digital experience facilitating knowledge exchange and collaboration in cutting-edge technologies.",
      technologies: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Google Dialogflow",
      ],
      skillsGained: [
        "Next.js",
        "React.js",
        "Cascading Style Sheets (CSS)",
        "Advanced React",
        "Dialogflow",
      ],
      website: {
        production: "adcomsys.uem.edu.in",
        development: "adcomsys.vercel.app",
      },
      eventDate: "June 26th-27th, 2024",
      additionalInfo:
        "The website serves as the central hub for the conference, offering a comprehensive overview of the event's objectives, agenda, and speakers.",
      hashtags: [
        "AdComSys2024",
        "UEM",
        "TechConference",
        "SoftwareDevelopment",
        "ProfessionalAchievement",
        "NextGenLeaders",
      ],
      githubUrl: "not public yet",
      projectLink: "https://adcomsys.uem.edu.in",
    },
    {
      title: "Space Otaku",
      duration: "Jan 2023 - Sep 2023",
      organization: "University of Engineering & Management (UEM)",
      description:
        "Space Otaku is your ultimate destination for all things space! Powered by Next.js, Sass, and Dialogflow, it provides a seamless experience for space enthusiasts. Track astronauts, explore the ISS, and dive into celestial wonders!",
      features: [
        "Live Astronaut Tracking",
        "ISS Location",
        "Satellite Tracker",
        "Solar System Exploration",
        "Amazing Space Facts",
        "Astronauts in Space",
        "Space Shooter",
        "Space Quiz",
      ],
      navigationLinks: [
        "Home",
        "Solar System",
        "Celestial Bodies",
        "ISS Tracker",
        "Amazing Space Facts",
        "Astronauts in Space",
        "Space Shooter",
        "Space Quiz",
      ],
      technologies: [
        "Next.js",
        "Sass",
        "Dialogflow",
        "HTML5 Canvas",
        "Three.js",
        "Git",
        "GitHub",
        "Responsive Web Design",
      ],
      skillsGained: [
        "Next.js",
        "React.js",
        "Advanced React",
        "Cascading Style Sheets (CSS)",
        "Dialogflow",
        "HTML5 Canvas",
        "Three.js",
        "Git",
        "GitHub",
        "Responsive Web Design",
      ],
      githubUrl: "https://github.com/ankurhalder/spaceotaku",
      projectLink: "https://www.spaceotaku.online",
      license: "GNU AFFERO GENERAL PUBLIC LICENSE",
    },
  ];

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>
            <strong>Duration:</strong> {project.duration}
          </p>
          <p>
            <strong>Organization:</strong> {project.organization}
          </p>
          <p>
            <strong>Description:</strong> {project.description}
          </p>
          <p>
            <strong>Technologies Used:</strong>
          </p>
          <ul>
            {project.technologies.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
          <p>
            <strong>Skills Gained:</strong>
          </p>
          <ul>
            {project.skillsGained.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
          <p>
            <strong>Website:</strong>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.projectLink}
            </a>
          </p>
          {project.githubUrl && (
            <p>
              <strong>GitHub:</strong>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.githubUrl}
              </a>
            </p>
          )}
          {project.additionalInfo && (
            <p>
              <strong>Additional Info:</strong> {project.additionalInfo}
            </p>
          )}
          {project.hashtags && (
            <p>
              <strong>Hashtags:</strong> {project.hashtags.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectsComponent;
