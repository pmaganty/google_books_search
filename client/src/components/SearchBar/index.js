import React, {useRef, useEffect} from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import axios from "axios";



const SearchBar = () => {

    const [state, dispatch] = useStoreContext();

    const titleRef = useRef();

    const searchForBooks = async (title)=> {

        console.log("searchForBooks function entered") //FOR DEBUG
        console.log(titleRef.current.value); //FOR DEBUG


        API.googleBooks(title)
          .then(res => {
              console.log(res.data.items); 
              dispatch({type: "GET_ALL_SEARCHED", searchedBooks: res.data.items});
              console.log(state); //why doesn't this show updated info?
          })
          .catch(err => console.log(err));


        titleRef.current.value="";
    }

    return (
    <div id="head" className="row">
        <div id="headInner" className="col-sm-11 col-md-11 col-lg-11">
            <h5>Enter book below</h5>
            <input id="search" placeholder="Title" ref={titleRef}/>
            <div><button onClick={e => searchForBooks(titleRef.current.value)}>Search</button></div>
        </div>
    </div>
    );
};

export default SearchBar;
