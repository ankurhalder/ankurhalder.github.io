import { Fragment } from "react";
import { Navbar, Sidebar } from "../../container";
import PropTypes from "prop-types";
import { Parallax, Skills, Hero, MainProjects, About } from "../../components";

function Dashboard({ isDarkMode, setIsDarkMode }) {
  return (
    <Fragment>
      <Sidebar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <section id="Homepage">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero />
      </section>
      <section id="About">
        <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
          height: "305dvh",
        }}
      >
        <MainProjects />
      </section>
      {/* <section></section>
      <section></section> */}
      {/* <section></section> */}

      <section id="ComingSoon">
        <div className="comingsoon">
          <span>More Content coming soon please stay tuned.</span>
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
