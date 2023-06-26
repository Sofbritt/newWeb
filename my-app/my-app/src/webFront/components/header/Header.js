import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch, BsBasket } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false)

  return (
    <div className="header">
      <Link to={'/#'}>
        <img
          className="logo"
          alt="no"
          src="https://i.fbcd.co/products/resized/resized-750-500/sf-fs-modern-logo-designs-2-f6a94cb89c415dc12a346af7ca2e5d2e5077f0687cdc5184030fd397aa46b777.jpg"
        />
      </Link>

      <div className="search">
        <input
          type="text"
          name="search"
          className="search-inp"
          placeholder="Search"
        />
        <div>

          <BsSearch className="search-icon" />
        </div>
      </div>



      <h4 className="menu" onClick={() => setShow(!show)}>
        Menu
        {show === true && (
          <div className="menues">
            <Link className="menu-link" to={'clothes'}>
              <h5 className="menu-links">Clotes</h5>
            </Link>
            <Link className="menu-link" to={'cosmetics'}>
              <h5 className="menu-links">Cosmetics</h5>
            </Link>
            <Link className="menu-link" to={'skincare'}>
              <h5 className="menu-links">SkinCare</h5>
            </Link>
            <Link className="menu-link" to={'others'}>
              <h5 className="menu-links">Others</h5>
            </Link>
            <Link className="menu-link" to={'seasonsoffers'}>
              <h5 className="menu-links">Seasons Offers</h5>
            </Link>
            <Link className="menu-link" to={'specialoffers'}>
              <h5 className="menu-links">Special Offers</h5>
            </Link>

          </div>
        )}
      </h4>
      <div>


        <Link to={'/login'}>
          <button className="sign-in">Sign in</button>
        </Link>


        <Link to={'/basket'}>
          <BsBasket className="basket-icon" />
        </Link>



        <select className="choose-language">
          <option value="Eng">Eng</option>
          <option value="Rus">Rus</option>
          <option value="Arm">Arm</option>
        </select>
      </div>
    </div>
  )
}

export default Header;