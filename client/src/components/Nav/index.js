import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Google Books</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/books">Saved</a>
            </li>
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
