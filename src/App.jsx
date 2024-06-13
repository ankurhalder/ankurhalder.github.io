// import Layout from "./Layout";
import { Fragment } from "react";
import { Navbar, Sidebar, Seo } from "../container";
// eslint-disable-next-line no-unused-vars
import { Parallax, Skills, Cursor, Projects, Hero } from "../components";
import { MetaTags } from "../pieces";
function App() {
  return (
    <Fragment>
      <MetaTags />
      <Seo />
      <Cursor />
      <Sidebar />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="Skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      {/* <Projects /> */}
      <section id="Contact">
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "3rem",
              color: "white",
              padding: "2rem",
            }}
          >
            Coming Soon
          </h1>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
