import { FaTrash } from "react-icons/fa"
import StarRating from "./StarRating"

export default function Color({
    id,
    title,
    color, 
    rating,
    onRemove = (f: any) => f,
    onRate = (f: any) => f
}: {
    id: string
    title: string,
    color: string,
    rating: number,
    onRemove: (f: any) => any,
    onRate: (id: string, rating: number) => any

}) {
    return (
        <section>
            <h1>{title}</h1>
            <button
              onClick={() => onRemove(id)}
            >
                <FaTrash></FaTrash>
            </button>
            <div
              style={{
                height: 50,
                backgroundColor: color
              }}
            ></div>
            <StarRating
              selectedStars={rating}
              onRate={rating => onRate(id, rating)}
            ></StarRating>
        </section>
    )
}