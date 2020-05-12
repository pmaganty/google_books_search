import React, {useEffect} from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import SaveBookCard from "../SaveBookCard";

const SaveBookList = () => {
    const [state, dispatch] = useStoreContext();

    const getBooks = async () => {
        dispatch({type: "LOADING"});
        try {
          const results = await API.getBooks();
          console.log(results.data); //FOR DEBUG
          dispatch({type: "GET_ALL_SAVED", books: results.data});
        } catch(error) {
          console.log(error);
        }
    };
    
    useEffect(() => {
        getBooks();
    }, []);

    return (
      <div id="head" className="row">
          <div id="headInner" className="col-sm-11 col-md-11 col-lg-11">
          {state.savedBooks.map(book => (
                    <div>
                      <SaveBookCard
                          title={book.volumeInfo.title}
                          author={book.volumeInfo.authors}
                          picture={book.volumeInfo.imageLinks.thumbnail}
                          description={book.volumeInfo.description}
                          link={book.volumeInfo.infoLink}
                          key={book.volumeInfo.title}
                      />
                      </div>
            ))}
          </div>
      </div>
    );
};

export default SaveBookList;