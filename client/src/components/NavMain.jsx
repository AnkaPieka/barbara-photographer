import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/navbar.css";
import "../styles/global.css";

function NavMain() {
  return (
    <div className="navbar">
      <div className="nav-all-links">
        <NavLink className="nav-each-link" to="/">
          Accueil
        </NavLink>
        <div className="subnav">
          <div className="nav-each-link">Galeries</div>
          <div className="subnav-content">
            <NavLink  to="/portraits">Portraits</NavLink>
            <NavLink  to="/photo-de-rue">Photo de rue</NavLink>
          </div>
        </div>
        <NavLink className="nav-each-link" to="/a-propos">
          À propos
        </NavLink>
        <NavLink className="nav-each-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default NavMain;
