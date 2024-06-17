import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound, Dashboard } from "./pages";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
