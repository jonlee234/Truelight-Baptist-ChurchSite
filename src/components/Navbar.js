import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
const [click,setClick] = useState(false)
const [dropdown,setDropdown] = useState(false)

const handleCLick = () => setClick(!click)
const closeMobileMenu =()=>setClick(false)

const onMouseEnter =() =>{
    if(window.innerWidth < 960){
        setDropdown(false)
    } else{
        setDropdown(true)
    }
}

const onMouseLeave =() =>{
    if(window.innerWidth < 960){
        setDropdown(false)
    } else{
        setDropdown(false)
    }
}
  return (
    <>
      <nav className="navbar">
          <Link to='/' className ='navbar-logo'>
              Truelight Baptist Church
          </Link>
          <div className = 'menu-icon' onClick={handleCLick}>
              <i className ={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className ={click ? 'nav-menu active' : 'nav-menu' }>
              <li className ='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                  </Link>
              </li>
              <li className ='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
                  <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                      About us <i className = 'fas fa-caret-down' />
                  </Link>
                  {dropdown && <Dropdown/>}
              </li>
              <li className ='nav-item'>
                  <Link to='/watch-live' className='nav-links' onClick={closeMobileMenu}>
                      Watch Live
                  </Link>
              </li>
              <li className ='nav-item'>
                  <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                      Events
                  </Link>
              </li>
              <li className ='nav-item'>
                  <Link to='/giving' className='nav-links' onClick={closeMobileMenu}>
                      Giving
                  </Link>
              </li>
              <li className ='nav-item'>
                  <Link to='/resources' className='nav-links' onClick={closeMobileMenu}>
                      Resources
                  </Link>
              </li>
              <li className ='nav-item'>
                  <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Contact us
                  </Link>
              </li>
          </ul>
          <Button />
      </nav>
    </>
  );
}
