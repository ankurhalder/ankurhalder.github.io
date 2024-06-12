// import Layout from "./Layout";
import { Fragment } from "react";
import { Navbar, Sidebar } from "../container";
import { Parallax, Skills, Cursor, Portfolio, Hero } from "../components";
import { MetaTags } from "../pieces";
function App() {
  return (
    <Fragment>
      <MetaTags />
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
      <Portfolio />
      <section id="Contact">{/* <Contact /> */}</section>
    </Fragment>
  );
}

export default App;
