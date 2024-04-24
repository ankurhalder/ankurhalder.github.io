// import Layout from "./Layout";
import { Fragment } from "react";
import { Navbar, Hero } from "../container";
import { Parallax, Services } from "../components";
function App() {
  return (
    <Fragment>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        {" "}
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      {/* <Portfolio /> */}
      <section id="Contact">{/* <Contact /> */}</section>
    </Fragment>
  );
}

export default App;
