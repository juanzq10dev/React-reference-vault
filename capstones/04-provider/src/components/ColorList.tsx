import { useContext } from "react"
import Color from "./Color"
import { ColorContext } from "./ColorProvider"

export default function ColorList() {
    const { colors } = useContext(ColorContext)
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