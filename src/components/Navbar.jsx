import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">iTask</a>
        <div className="navbar-buttons">
          <a href="/" className="navbar-button">Home</a>
          <a href="/" className="navbar-button">Your Tasks</a>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
