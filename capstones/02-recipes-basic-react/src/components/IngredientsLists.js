import React from "react";
import Ingredient from "./Ingredients";

export default function IngredientsList({
    list
}) {
    return (
        <ul className="ingredients">
            {
                list.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        {...ingredient}
                    ></Ingredient>
                ))
            }
        </ul>
    )
}