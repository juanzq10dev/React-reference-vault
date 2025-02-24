import React from "react";
import Recipe from "./Recipe";

export default function Menu({
    recipes
}) {
    return (
        <article>
            <header>
                <h1>
                    Delicious Recipes
                </h1>
            </header>

            <div className="recipes">
                {
                    recipes.map((recipe, index) => (
                        <Recipe
                            key={index}
                            {...recipe}
                        ></Recipe>
                    ))
                }
            </div>
        </article>
    )
}