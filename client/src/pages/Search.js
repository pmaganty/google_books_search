import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {useStoreContext} from "../utils/GlobalState";
import SearchBar from "../components/SearchBar";
import SearchBookList from "../components/SearchBookList";

function Search() {
  
    return (
      <div>
        <SearchBar />
        <SearchBookList />
      </div>
    );
  }


export default Search;
