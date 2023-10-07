import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from '../../helpers/ResetLocation'

const RecipePosts = ({ recipePost }) => {
  return (
    <section className="recipe-grid-item">
      <img
        src={recipePost.img}
        alt={recipePost.name}
      />
      <section className="credentials">
        <p>{recipePost.date}</p>
        <p>by {recipePost.author}</p>
      </section>
      <Link
        onClick={ResetLocation}
        to={`/recipe/${recipePost.name.toLowerCase().replaceAll(' ', '-')}`}
      >
        <h3>{recipePost.name}</h3>
      </Link>
      <p className="intro">{recipePost.intro}</p>
    </section>
  );
}

export default RecipePosts;