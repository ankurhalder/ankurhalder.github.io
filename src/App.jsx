// import Layout from "./Layout";
import { Fragment } from "react";
import { Navbar, Sidebar, Seo } from "../container";
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
      <Projects />
      <section id="Contact"></section>
    </Fragment>
  );
}

export default App;
