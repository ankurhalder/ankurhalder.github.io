import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound, Dashboard } from "./pages";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
