import React from "react";
import { Link } from "react-router-dom";
import categories from "./header-items";

const Navbar = () => {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        to="/"
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Admin</div>
      </Link>
      <hr className="sidebar-divider" />
      {categories.map((category) => {
        return (
          <>
            <li className="nav-item active">
              <Link className="nav-link" to={category.url}>
                {category.name}
              </Link>
            </li>
            <hr className="sidebar-divider" />
          </>
        );
      })}
    </ul>
  );
};

export default Navbar;
