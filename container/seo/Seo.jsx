import PersonalInfoComponent from "./PersonalInfoComponent";
import EducationComponent from "./EducationComponent";
import SkillsComponent from "./SkillsComponent";
import CoursesComponent from "./CoursesComponent";
import ProjectsComponent from "./ProjectsComponent";
import InternshipsComponent from "./InternshipsComponent";
import Contact from "./Contact";

import { Fragment } from "react";

function Seo() {
  return (
    <Fragment>
      <div className="seo">
        <PersonalInfoComponent />
        <EducationComponent />
        <SkillsComponent />
        <ProjectsComponent />
        <InternshipsComponent />
        <CoursesComponent />
        <Contact />
      </div>
    </Fragment>
  );
}

export default Seo;
