import { Fragment } from "react";
import { Navbar, Sidebar } from "../../container";
import PropTypes from "prop-types";
import { Parallax, Skills, Hero, Projects } from "../../components";

function Dashboard({ isDarkMode, setIsDarkMode }) {
  return (
    <Fragment>
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <section id="Homepage">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero />
      </section>
      <section>
        <Parallax
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          type="Skills"
        />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section>
        <Parallax
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          type="Projects"
        />
      </section>
      <section id="Projects">
        <Projects />
      </section>

      <section id="Comingsoon">
        <div>Coming Soon</div>
      </section>
    </Fragment>
  );
}

Dashboard.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};
export default Dashboard;
