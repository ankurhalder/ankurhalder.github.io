/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { Navbar, Sidebar, Seo } from "../../container";

import {
  Parallax,
  Skills,
  Cursor,
  Projects,
  ProjectsCoverFlow,
  Hero,
} from "../../components";
function Dashboard() {
  return (
    <Fragment>
      <Seo />
      <Cursor />
      <Sidebar />
      <section id="Homepage">
        <Navbar />
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

export default Dashboard;
