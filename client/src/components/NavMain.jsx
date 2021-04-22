import React from "react";
import { NavLink } from "react-router-dom";

function NavMain() {
  return (
    <div>
      <h1>Hi there</h1>
      <div className="nav-link">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/galeries">Galeries</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default NavMain;
