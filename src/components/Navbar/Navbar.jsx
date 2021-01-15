// @flow
import React, { useContext,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavbarHamburgerMenuContext } from './NavbarHamburgerMenu/NavbarHamburgerMenuContext';
import './Navbar.scss';
import logo from 'assets/images/2.jpeg';
import admission_form from 'assets/form/admission.pdf';

const Navigation = () => {
  const context = useContext(NavbarHamburgerMenuContext);
  const [loggedin,setLoggedIn] = useState(localStorage.getItem('loggedin'));

  const signout = () => {
    console.log("reached signout");
    localStorage.removeItem('loggedin');
    localStorage.removeItem('user');
    setLoggedIn(null);
  }
  return (
    <nav className="navbar-main">
      <div className="navbar-main-items">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" style={{width:'6rem',height:'3.5rem'}} />
            {/* eslint-disable-next-line */}
           {/*  <p role="text">
              Srijan Play Way <br /> 
            </p> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="NavbarMainLinks">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/notices">Notices</Link>
            </li>
            <li>
              {
              loggedin?
              <Link to="/gallery">Gallery</Link>:
              null
              } 
            </li>
            <li>
            {
             loggedin?
              <Link to="/contact">Contact</Link>:
              null
              } 
            </li>
            <li className="join-button">
            {
             loggedin?
             <Link to={admission_form} target="_blank">Download Admission Form</Link>:
             null
             } 
            </li>
            <li className="join-button">
             {
             loggedin?
             <Link style={{backgroundColor:'red'}} to="#" onClick={() => signout()}>Signout</Link>:
             <Link style={{backgroundColor:'green'}} to="/join">Login / Signup</Link>
             } 
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <button
          className="navbar-hamburger-menu-button"
          onClick={context.toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="48px"
            height="48px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
