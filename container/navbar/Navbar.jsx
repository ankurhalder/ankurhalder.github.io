import { Fragment } from "react";
function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        {/* sidebar */}
        <div className="wrapper">
          <span>Ankur Halder</span>
          <div className="social">
            <a href="#">
              <img src="/social/github.png" alt="github" />
            </a>
            <a href="#">
              <img src="/social/linkedin.png" alt="linkedin" />
            </a>
            <a href="#">
              <img src="/social/facebook.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/social/instagram.png" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
