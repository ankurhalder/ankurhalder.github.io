// import Layout from "./Layout";
import { Fragment } from "react";
import { Navbar } from "../container";
function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <section>
        <a href="hero">Hero</a>
      </section>
      <section>
        <a href="parallex">Parallex</a>
      </section>
      <section>
        <a href="services">Services</a>
      </section>
      <section>
        <a href="parallex">Parallex</a>
      </section>
      <section>
        <a href="portfolio1">Portfolio1</a>
      </section>
      <section>
        <a href="portfolio2">Portfolio2</a>
      </section>
      <section>
        <a href="portfolio3">Portfolio3</a>
      </section>
      <section>
        <a href="contact">Contact</a>
      </section>
    </Fragment>
  );
}

export default App;
