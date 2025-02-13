import { ColorType } from "../types/color"
import Color from "./Color"

export default function ColorList({
    colors = []
}: {
    colors: ColorType[]
}) {
    if (!colors.length) return <div>No colors listed.</div>

    return (
        <div>
            {
                colors.map(color => (
                    <Color
                      key={color.id}
                      {...color}
                    ></Color>
                ))
            }
        </div>
    )
} 