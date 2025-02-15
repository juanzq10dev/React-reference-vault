import Color from "./Color"
import { useColors } from "../hooks/useColors"

export default function ColorList() {
    const { colors } = useColors()
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