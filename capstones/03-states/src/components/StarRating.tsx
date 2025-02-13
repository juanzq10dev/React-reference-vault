import Star from "./Stars"

export default function StarRating({
    totalStars = 5,
    selectedStars = 0,
}) {
    const createArray = (length: number) => [...Array(length)]
    return (
        <>
            {
                createArray(totalStars).map((_value, index) =>
                    <Star
                        key={index}
                        selected={selectedStars > index}
                    ></Star>
                )

            }
        </>
    )
}