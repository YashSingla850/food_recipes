import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = (props) => {
  const { dish } = props;
  return (
    <>
      <div className="row">
        {dish.map((recipe) => (
          <RecipeItem
            key={Math.random() * 100}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            cuisineType={recipe.recipe.cuisineType}
            ingredientLines={recipe.recipe.ingredientLines}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </>
  );
};

export default Recipes;
// style="width: 18rem;
