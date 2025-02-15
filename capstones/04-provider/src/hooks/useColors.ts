import { createContext, useContext } from "react";
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

export const useColors = () => useContext(ColorContext)