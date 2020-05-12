import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import SearchBookCard from "../SearchBookCard";

const SearchBookList = () => {

  const [state, dispatch] = useStoreContext();

  return (
    <div id="head" className="row">
        <div id="headInner" className="col-sm-11 col-md-11 col-lg-11">
        {state.searchedBooks.map(book => (
                    <SearchBookCard
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        picture={book.volumeInfo.imageLinks.thumbnail}
                        description={book.volumeInfo.description}
                        link={book.volumeInfo.infoLink}
                        key={book.volumeInfo.description}
                    />
          ))}
        </div>
    </div>
  );
};

export default SearchBookList;