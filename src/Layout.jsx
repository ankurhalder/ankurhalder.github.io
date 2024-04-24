import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import {
  Dashboard,
  Internships,
  Projects,
  Skills,
  NotFound,
  ContactMe,
} from "./pages";
function Layout() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default Layout;
