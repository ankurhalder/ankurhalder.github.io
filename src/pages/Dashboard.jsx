import { Fragment } from "react";
import { Navbar, Sidebar } from "../../container";
import PropTypes from "prop-types";
import { Parallax, Skills, ProjectsCoverFlow, Hero } from "../../components";

function Dashboard({ isDarkMode, setIsDarkMode }) {
  return (
    <Fragment>
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <section id="Homepage">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero />
      </section>
      <section>
        <Parallax type="Skills" />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section>
        <Parallax type="projects" />
      </section>
      <section id="Projects">
        <ProjectsCoverFlow />
      </section>

      <section id="Coming Soon">
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "var(--font-4)",
              color: "var(--text-color)",
            }}
          >
            Coming Soon
          </h1>
        </div>
      </section>
    </Fragment>
  );
}

Dashboard.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};
export default Dashboard;
