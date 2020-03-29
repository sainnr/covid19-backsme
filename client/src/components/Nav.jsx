import React from "react"
import {Link} from "react-router-dom";

export const Nav = () => 	<nav className="navbar navbar-expand navbar-dark bg-dark navbar-top">
  <div className="collapse navbar-collapse">
    <div className="navbar-nav mr-auto">
      <a href="/" className="navbar-brand">
        BackSME
      </a>
      <Link to={"/demo/products"} className="nav-item nav-link">Products</Link>
      <Link to={"/demo/account"} className="nav-item nav-link">Account</Link>
    </div>
  </div>
</nav>
