import { Fragment } from "react";
import { ToggleBar } from "../../pieces";
function NotFound() {
  return (
    <Fragment>
      <div className="not-found">
        <ToggleBar />
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </Fragment>
  );
}

export default NotFound;
