import React from "react";
import { NavLink } from "react-router-dom";
import "./NavContainer.css";

function NavContainer() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="main_selected"
            className="link main"
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            activeClassName="portfolio_selected"
            className="link portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="contact_selected"
            className="link contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavContainer;
