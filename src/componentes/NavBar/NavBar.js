import React from "react";
import logo from "../../logo.svg";
import "./NavBar.scss";

/*Funçao da nav bar*/
export default function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="BH Tours company"></img>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>

        <li>
          <a href="/" className="nav-link">
            Sobre
          </a>
        </li>

        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
