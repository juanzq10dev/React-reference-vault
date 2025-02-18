import { useCallback } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

export default function CorrectWordCount({ children = "" }) {
    const [, forceRender] = useState()

    const words = useMemo(() => {
        return children.split(" ")
    }, [children])

    const print = useCallback((children) => {
        console.log(children)
    }, [children])

    useEffect(() => {
        console.log("fresh render")
    }, [words])

    useEffect(() => {
        print(children)
    }, [print])

    return (
        <div>
            <h2>Correct word count</h2>
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