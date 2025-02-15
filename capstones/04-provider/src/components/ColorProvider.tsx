import React, { createContext, useState } from "react";
import colorData from "../color-data.json"
import { v4 } from "uuid"
import { ColorType } from "../types/color";


type ColorContextType = {
    colors: ColorType[],
    addColor: (title: string, color: string) => void,
    rateColor: (id: string, rating: number) => void,
    removeColor: (id: string) => void
}
export const ColorContext = createContext<ColorContextType>({
    colors: [],
    addColor: f  => f,
    rateColor: f => f,
    removeColor: f => f

})

export default function ColorProvider({
    children
}: {
    children: React.ReactElement
}) {
    const [colors, setColors] = useState(colorData)

    const addColor = (title: string, color: string) => (
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ])
    )

    const rateColor = (id: string, rating: number) => (
        setColors(
            colors.map(color => color.id === id ? { ...color, rating } : color)
        )
    )

    const removeColor = (id: string) => (
        setColors(
            colors.filter(color => color.id !== id)
        )
    )

    return (
        <ColorContext.Provider
            value={{ colors, addColor, rateColor, removeColor }}
        >
            {children}
        </ColorContext.Provider>
    )
}