import { useEffect } from "react";
import { useState } from "react";

export default function IncorrectWordCount({ children = "" }) {
    const [, forceRender] = useState()

    const words = children.split(" ")

    const print = (children) => {
        console.log(children)
    }

    useEffect(() => {
        console.log("fresh render")
    }, [words])

    useEffect(() => {
        print(children)
    }, [print])

    return (
        <div>
            <h2>Incorrect word count</h2>
            <p>{children}</p>
            <button
                onClick={() => {
                    console.log("Click")
                    forceRender({})
                }}
            >
                Force Render
            </button>
            <p>words: {words.toString()}</p>
        </div>
    )

}