import React  from "react";
import icon from "../assets/icon-hamburger.svg";

//TODO implement smooth scrolling
//responsive navbar
 
function NavBar() {
  function mobileNav() {
    document.querySelector('.nav-lists').classList.toggle('hide')
  }
  return (
    <div className="nav-wrapper">
      <div className="logo-menu-wrapper">
        <a href="index.html" className="logo">
          Guarder
        </a>
        <img src={icon} className="icon-ham" alt="icon" onClick={mobileNav} />
      </div>
      <nav className='nav'>
        <ul className="nav-lists hide">
          <li className="nav-list">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-list">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-list">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-list">
            <a href="#guards" className="nav-link">
              Guards
            </a>
          </li>
          <li className="nav-list">
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
