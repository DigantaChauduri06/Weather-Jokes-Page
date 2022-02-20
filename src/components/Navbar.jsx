import React from "react";
import Button from "./Button";

import "./Navbar.css";

const btnElement = (logo, tag) => {
  return <img src={logo} alt={tag} height="90%" />;
};

function Navbar() {
  return (
    <section>
      <nav>
        <div className="flex">
          <div className="logo">
            <h3 className="logo-text">Logo</h3>
          </div>
          <div className="buttons">
            <Button
              tag="google-btn"
              logo={btnElement("/logos/google.svg", "github-btn")}
            />
            <Button
              tag="github-btn"
              logo={btnElement("/logos/github.svg", "github-btn")}
            />
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
