import { Fragment } from "react";
import { items } from "../../data/projectItems";

function Projects() {
  return (
    <Fragment>
      <div className="projects-container">
        {items.map((project, index) => (
          <div className="project-item" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <h3 className="project-subtitle">{project.subtitle}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-media">
              <video controls poster={project.poster}>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project-links">
              <a
                href={project.githubLink}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.websiteLink}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Projects;
