// import Layout from "./Layout";
import { Fragment } from "react";
import { Navbar, Hero, Sidebar } from "../container";
import { Parallax, Services, Cursor, Portfolio } from "../components";
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
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">{/* <Contact /> */}</section>
    </Fragment>
  );
}

export default App;
