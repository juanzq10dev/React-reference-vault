import { useState } from 'react'
import './App.css'
import colorData from "./color-data.json"
import ColorList from './components/ColorList'
import { ColorType } from './types/color'
import AddColorForm from './components/Form'
import { v4 } from 'uuid'

function App() {
  const [colors, setColors] = useState<ColorType[]>(colorData)

  return (
    <>
      <AddColorForm
        onNewColor={(title, hexColor) => setColors(
          [
            ...colors,
            {
              id: v4(),
              title: title,
              color: hexColor,
              rating: 0
            }
          ]
        )}
      ></AddColorForm>
      <ColorList
        colors={colors}
        onRemoveColor={(id => {
          const newColors = colors.filter(
            color => color.id !== id
          )
          setColors(newColors)
        })}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          )
          setColors(newColors)
        }}
      ></ColorList>
    </>
  )
}

export default App
