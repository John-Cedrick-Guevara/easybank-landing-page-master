import React, { useState } from 'react'

const NavComponent = () => {
    const [showNav, setShowNav] = useState(false)


  return (
    <nav>
      <div className="mobile-nav-container">
        <img src="../images/logo.svg" alt="asdad" />
        <img
          src={`../images/${showNav ? "icon-close" : "icon-hamburger"}.svg`}
          alt="asdad"
          onClick={() => setShowNav((prev) => !prev)}
          className="burger-btn"
        />
      </div>

      <menu className="desktop-menu">
        <ul>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </ul>
      <button className="invite">Request Invite</button>
      </menu>

      {showNav && (
        <menu className="mobile-menu">
          <ul>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </ul>
        </menu>
      )}
    </nav>
  );
}

export default NavComponent
