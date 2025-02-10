import React from "react";
import IngredientsList from "./IngredientsLists";
import Instructions from "./Instructions";

export default function Recipe({
    name,
    ingredients,
    steps
}) {
    return (
        <section>
            <h1>{name}</h1>
            <IngredientsList
                list={ingredients}
            ></IngredientsList>

            <Instructions
                title={"Cooking Instructions"}
                steps={steps}
            ></Instructions>
        </section>
    )
}