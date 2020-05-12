import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const BookContent = (props) => {


    console.log(props.picture); //FOR DEBUG
  return (
    <div>
        <div className="row">
            <div id="basicInfo" className="col-sm-12 col-md-12 col-lg-12">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
                <img alt="book cover" src={props.picture}/>
            </div>
            <div className="col-sm-9 col-md-9 col-lg-9">
                <p id="description">{props.description}</p>
            </div>
        </div>
    </div>
  );
};

export default BookContent;