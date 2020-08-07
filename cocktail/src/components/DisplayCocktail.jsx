import React from "react";
// import { render } from "react-dom";

function DisplayCocktail(props) {
  let { title, image, instruction } = props;
  return (
    <div>
      <div className="col mb-3 p-1">
        <div className="card h-100">
          <h5 className="card-title">{title}</h5>
          <img src={image} className="card-img-top" alt="img" />
          <div className="card-body">
            <p className="card-text truncate">{instruction}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCocktail;
