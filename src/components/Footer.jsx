import React from "react";
import email from '../assets/email.png';
import phone from '../assets/telephone.png';
import location from '../assets/placeholder.png';


const date = new Date();
const year = date.getFullYear();
function Footer() {
  return (
    <footer className="py-5 section">
      <div className="row" id="footer-container">
        <div className="col-6 col-md-2 mb-3 footer-col">
           <a href="#home" className="footer-link_font">GUARDER</a>
           <p className="footer-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsum!</p>
        </div>

        <div className="col-6 col-md-2 mb-3 footer-col">
          <h5 className="footer-card">Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary footer-card">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary footer-card">
                Guards
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary footer-card">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary footer-card">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary footer-card">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3 footer-card footer-col">
          <h5>Contact Us</h5>
          <div className="footer-info">
            <img src={location} alt="" />
            <p className="footer-card footer-p">Lorem ipsum dolor sit.</p>
          </div>
          <div className="footer-info">
            <img src={phone} alt="" />
            <p className="footer-card footer-p">Call: +01 234567890</p>
          </div>
          <div className="footer-info">
            <img src={email} alt="" />
            <p className="footer-card footer-p">Demo@email.com</p>
          </div>
        </div>

        <div className="col-md-5 offset-md-1 mb-3 footer-card footer-col">
          <form>
            <h5>Newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2" id="flex-column2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control footer-input"
                placeholder="Email address"
              />
              <button className="btn btn-primary" id="footer-btn" type="button">
                SUSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p className="footer-card">&copy; {year} Created by Aminat. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              {" "}
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#"></a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              {" "}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
