import React from "react";
import { NavLink } from "react-router-dom";
import "./NavContainer.css";

function NavContainer() {
  return (
    <nav>
      <button id="hamburger" className="hamburger hide"></button>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="main_selected"
            className="main"
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            activeClassName="portfolio_selected"
            className="portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="contact_selected"
            className="contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavContainer;
