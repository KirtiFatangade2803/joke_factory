import React from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
    <div className="sidebar">
    <div className="top_section">

        <div className="center_section">
          <ul>
            <li className="navitem">HOME</li>
            <li className="navitem">ABOUT</li>
            <li className="navitem">REVIEWS</li>
            <li className="navitem">CONTACT</li>
            <li className="navitem">ARTICLES</li>
          </ul>
        </div>

        <div className="right_section">
        <NavLink to='editpage' className="create_joke" >WRITE A JOKE</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}
