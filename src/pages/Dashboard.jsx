import { Fragment } from "react";
import { Navbar, Sidebar } from "../../container";
import PropTypes from "prop-types";
import { Parallax, Skills, Hero, MainProjects } from "../../components";

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
      <section
        id="Projects"
        style={{
          height: "310dvh",
        }}
      >
        <MainProjects />
      </section>
      {/* <section></section>
      <section></section> */}
      {/* <section></section> */}

      <section id="ComingSoon">
        <div className="comingsoon">
          <h1>Coming Soon</h1>
          <p>More projects and features are coming soon...</p>
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
