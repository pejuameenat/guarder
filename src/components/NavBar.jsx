import React from "react";
import icon from "../assets/icon-hamburger.svg";

//TODO implement smooth scrolling
//responsive navbar

function mobileNav() {
    const logo = document.querySelector('.logo')
    logo.classList.toggle('logo-position')
    const menu = document.querySelector('.icon-ham')
    menu.classList.toggle('menu-position')
    const ul = document.querySelector(".nav-lists");
    ul.classList.toggle('ul-class')
    ul.classList.toggle("hide");
}
function NavBar() {
  return (
    <div className="nav-wrapper">
      <a href="index.html" className="logo">
        Guarder
      </a>
      <nav className="nav">
        <img src={icon} onClick={mobileNav} className="icon-ham" alt="" />
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
  );
}

export default NavBar;
