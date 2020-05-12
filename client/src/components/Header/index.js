import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const Header = () => {
  return (
    <div id="head" className="row">
        <div id="headInner" className="col-sm-11 col-md-11 col-lg-11">
            <h1 id="title">(React) Google Books Search</h1>
            <h4>Search for and Save Books of Interest</h4>
        </div>
    </div>
  );
};

export default Header;
