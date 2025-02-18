import { useState } from "react";
import Star from "./Star";

export default function StateStarRating() {
    const [rating, setRating] = useState(0)

    const handleClick = (index) => {
        setRating(index + 1)
    }

    return (
        <div>
            <h2>Rate this Product</h2>
            <div style={{ display: 'flex' }}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <Star
                        key={index}
                        filled={rating > index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
            <p>Your rating: {rating} out of 5</p>
        </div>
    );
}