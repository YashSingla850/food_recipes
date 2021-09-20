import React from "react";

const RecipeItem = (props) => {
  const { name, image, cuisineType, ingredientLines, url } = props;
  return (
    <div className="card">
      <img
        src={image}
        className="card-img-top w-50 mx-auto rounded-circle"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title ms-5 mb-2">{name}</h5>
        <h5 className="cusine  mb-2">cuisine:{cuisineType}</h5>
        <p className="card-text">{ingredientLines}</p>
        <a href={url} className="btn btn-secondary btn-sm ms-5">
          for more...
        </a>
      </div>
    </div>
  );
};

export default RecipeItem;
