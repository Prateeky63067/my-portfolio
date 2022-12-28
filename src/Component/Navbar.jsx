import React from "react";
import logo from '../images/logo.png'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary navbg sticky">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
             <img className="logo" src={logo} alt="Error" /> 
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item  ">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/"
                  
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/Portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
{/*           
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/Work"
                >
                  Work
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  activeClassName="menu-active"
                  exact
                  className="nav-link"
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;