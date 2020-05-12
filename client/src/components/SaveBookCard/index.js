import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import BookContent from "../BookContent";

const SearchBookCard = (props) => {

  return (
    <div id="head" className="row">
        <div id="headInner" className="col-sm-11 col-md-11 col-lg-11">
            <div className="row">
                <div className="col-sm-10 col-md-10 col-lg-10"></div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                <button><a target="_blank" href={props.link}>View</a></button>
                    <button>Delete</button>
                </div>
            </div>
            <BookContent 
                title={props.title}
                author={props.authors}
                picture={props.picture}
                description={props.description}
                key={props.title}
            />
        </div>
    </div>
  );
};

export default SearchBookCard;