import React from "react";
import "./style.css";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import BookContent from "../BookContent";

const SaveBookCard = (props) => {

  const [state, dispatch] = useStoreContext();

  const saveBook = async () => {
    const formData = {
        title: props.title,
        authors: props.author,
        description: props.description,
        image: props.picture,
        link: props.link
    };
    const result = await API.saveBook(formData);
    console.log(result.data); //FOR DEBUG
    dispatch({type: "ADD_BOOK", "book": result.data});
  };

  return (
    <div id="head" className="row">
        <div id="headInner" className="col-sm-11 col-md-11 col-lg-11">
            <div className="row">
                <div className="col-sm-10 col-md-10 col-lg-10"></div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <button><a target="_blank" href={props.link}>View</a></button>
                    <button onClick={e => saveBook()}>Save</button>
                </div>
            </div>
            <BookContent 
                title={props.title}
                author={props.author}
                picture={props.picture}
                description={props.description}
                key={props.description}
            />
        </div>
    </div>
  );
};

export default SaveBookCard;