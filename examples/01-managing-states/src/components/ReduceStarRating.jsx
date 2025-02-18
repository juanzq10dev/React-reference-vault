import Star from "./Star";
import { useReducer } from "react";

export default function ReduceStarRating() {
    const [rating, setRating] = useReducer((_state, index) => index + 1, 0)

    return (
        <div>
            <h2>Rate this Product</h2>
            <div style={{ display: 'flex' }}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <Star
                        key={index}
                        filled={rating > index}
                        onClick={() => setRating(index)}
                    />
                ))}
            </div>
            <p>Your rating: {rating} out of 5</p>
        </div>
    );
}