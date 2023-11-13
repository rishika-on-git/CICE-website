import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <>
      <nav>
        <a href="index.html" id="img">
          
        </a>

        <div>
          <ul id="navbar">
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Team">Team</a>
            </li>
            <li>
              <a href="Events">Events</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
           
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
