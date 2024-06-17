import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cursor } from "../components";
import { NotFound, Dashboard } from "./pages";
function App() {
  //@ prop drilling darm mode
  //@ Main code is in src/pages/Dashboard.jsx
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <Fragment>
      {/* common Components */}
      <Cursor />

      {/* Routes */}
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
