import React from "react";

import "./global.css";
import style from "./recipe.module.css";

function Recipe({ label, image, ingredientLines, url }) {
  const [showIngredients, setShowIngredients] = React.useState(false);

  function toggleIngredients() {
    setShowIngredients((prevState) => !prevState);
  }

  return (
    <div className={style.recipe}>
      <h2 className={style.title}>{label}</h2>
      <a href={url} target="_blank" rel="noreferrer" className={style.link}>
        <img src={image} alt={label} className={style.image} />
      </a>
      <button className="btn" onClick={toggleIngredients}>
        {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
      </button>
      {showIngredients && (
        <ul className={style.ingredients}>
          {ingredientLines.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Recipe;
