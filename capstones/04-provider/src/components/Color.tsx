import { FaTrash } from "react-icons/fa"
import StarRating from "./StarRating"
import { useContext } from "react"
import { ColorContext } from "./ColorProvider"

export default function Color({
    id,
    title,
    color, 
    rating,
}: {
    id: string
    title: string,
    color: string,
    rating: number,

}) {
  const { rateColor, removeColor } = useContext(ColorContext)
    return (
        <section>
            <h1>{title}</h1>
            <button
              onClick={() => removeColor(id)}
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
              onRate={rating => rateColor(id, rating)}
            ></StarRating>
        </section>
    )
}