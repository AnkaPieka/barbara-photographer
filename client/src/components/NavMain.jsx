import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/navbar.css";
import "../styles/global.css";

function NavMain() {
  return (
    <div className="navbar">
      <p className="barb-name">Barbara photography</p>
      <div className="absolute-positioning">
        <div className="nav-all-links">
          <NavLink className="nav-each-link" to="/">
            Accueil
          </NavLink>
          <div className="subnav">
            <div className="nav-gallery-category">Galeries</div>
            <div className="subnav-content fade-in">
              <NavLink className="navlinks" to="/portraits">
                Portraits
              </NavLink>
              <NavLink className="navlinks" to="/photo-de-rue">
                Photo de rue
              </NavLink>
              <NavLink className="navlinks" to="/photo-de-rue">
                Marques
              </NavLink>
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
      <p className="credits">Developed by Anna Lefour · 2021</p>
    </div>
  );
}

export default NavMain;
