import React from "react";

const NavBar = ({ setMode, mode, keyMap, setKeyMap, theme, setTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="!#">
        Code Engine
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#!"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {mode}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => {
                  setMode("python");
                }}
              >
                Python
              </a>
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => {
                  setMode("javascript");
                }}
              >
                Javascript
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#!"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {keyMap}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => {
                  setKeyMap("sublime");
                }}
              >
                sublime
              </a>
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => {
                  setKeyMap("vim");
                }}
              >
                vim
              </a>
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => {
                  setKeyMap("emacs");
                }}
              >
                emacs
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#!"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {theme}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => {
                  setTheme("material");
                }}
              >
                material
              </a>
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => {
                  setTheme("material-palenight");
                }}
              >
                material-palenight
              </a>
              <a
                className="dropdown-item"
                href="#!"
                onClick={() => {
                  setTheme("neat");
                }}
              >
                neat
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="#!"
            >
              Fonts
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a
                className="dropdown-item"
                href="!#"
                onClick={() => {
                  document.querySelector(".CodeMirror").style.fontSize = "15px";
                }}
              >
                15
              </a>
              <a
                className="dropdown-item"
                href="!#"
                onClick={() => {
                  document.querySelector(".CodeMirror").style.fontSize = "17px";
                }}
              >
                17
              </a>
              <a
                className="dropdown-item"
                href="!#"
                onClick={() => {
                  document.querySelector(".CodeMirror").style.fontSize = "20px";
                }}
              >
                20
              </a>
              <a
                className="dropdown-item"
                href="!#"
                onClick={() => {
                  document.querySelector(".CodeMirror").style.fontSize = "22px";
                }}
              >
                22
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
