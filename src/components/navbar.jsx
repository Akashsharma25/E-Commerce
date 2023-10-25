import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="brand"> Shop Of Myst </Link>
        <Link to="/"> Shop </Link>
        <Link to="/login"> Profile <i class="fa-solid fa-user"></i> </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
