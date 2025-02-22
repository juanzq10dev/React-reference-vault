import { ColorType } from "../types/color"
import Color from "./Color"

export default function ColorList({
    colors = [],
    onRemoveColor = (id: string) => id,
    onRateColor = (id: string, _newRating: number) => id
}: {
    colors: ColorType[],
    onRemoveColor: (id: string) => any,
    onRateColor: (id: string, newRating: number) => any
}) {
    if (!colors.length) return <div>No colors listed.</div>

    return (
        <div>
            {
                colors.map(color => (
                    <Color
                      key={color.id}
                      {...color}
                      onRemove={onRemoveColor}
                      onRate={onRateColor}
                    ></Color>
                ))
            }
        </div>
    )
} 