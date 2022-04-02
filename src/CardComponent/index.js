import React from "react";
import './CardComponent.css';


function CardComponent(props) {
  const url_img = "https://media.istockphoto.com/vectors/tiny-people-reading-books-in-online-library-vector-id1227213224?k=20&m=1227213224&s=170667a&w=0&h=KI4exDvy6qVk9P--TyAIjf4rNZcRNlijWkMAQLe3TyE=";
  
  return (
    <div className="card CardComponent">
      <div className="card-body">
        <h5 className="card-title">Add a New Serie</h5>
        {props.children}
      </div>
      <img className="card-img-top" src={url_img} alt="Card" />
    </div>
  );
}

export { CardComponent };