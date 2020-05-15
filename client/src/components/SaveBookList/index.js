import React, {useEffect} from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import SaveBookCard from "../SaveBookCard";

const SaveBookList = () => {
    const [state, dispatch] = useStoreContext();

    const getBooks = async () => {
        try {
          const results = await API.getBooks();
          console.log(results.data); //FOR DEBUG
          dispatch({type: "GET_ALL_SAVED", savedBooks: results.data});
        } catch(error) {
          console.log(error);
        }
    };
    
    useEffect(() => {
        getBooks();
        console.log(state);
    }, []);

    return (
      <div id="head" className="row">
          <div id="headInner" className="col-sm-11 col-md-11 col-lg-11">
          {state.savedBooks.map(book => (
                    <div>
                      <SaveBookCard
                          title={book.title}
                          author={book.authors}
                          picture={book.image}
                          description={book.description}
                          link={book.link}
                          id={book._id}
                          key={book.description}
                      />
                    </div>
            ))}
          </div>
      </div>
    );
};

export default SaveBookList;