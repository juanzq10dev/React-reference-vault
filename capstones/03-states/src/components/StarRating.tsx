import React, { useState } from "react"
import Star from "./Stars"

export default function StarRating({
    totalStart: totalStars = 5
}) {
    const [selectedStars, setSelectedStart] = useState(2)
    const createArray = (length: number) => [...Array(length)]
    return (
        <>
            {
                createArray(totalStars).map((_value, index) =>
                    <Star
                        key={index}
                        selected={selectedStars > index}
                        onSelect={() => setSelectedStart(index + 1)}
                    ></Star>
                )

            }
        </>
    )
}