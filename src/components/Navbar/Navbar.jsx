import React from 'react'
import Logo from '../../img/Logo-Barto-Ganaderia.png'
//import css
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand container-fluid" href="">
          <img src={Logo} alt="" className="logoImage" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar