import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="landingPage">
      <div id="landingMenu">
        <div
          className={`menuButton ${menuIsOpen && "menuButton--open"}`}
          onClick={ () => setMenuIsOpen(!menuIsOpen) }
        ><i class={`fa-solid fa-xmark ${menuIsOpen ? "menuButton--cross" : "menuButton--cross-hidden"}`}></i></div>
        <h1
          className={`menuText ${menuIsOpen && "menuText--open"}`}
          onClick={() => navigate("/timetable")}  
        >Timetable</h1>
        <h1
          className={`menuText ${menuIsOpen && "menuText--open"}`}
          onClick={() => navigate("/image-scroll")}  
        >Image Scroll</h1>
      </div>
    </div>
  )
}

export default LandingPage