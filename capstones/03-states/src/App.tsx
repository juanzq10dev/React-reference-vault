import { useState } from 'react'
import './App.css'
import colorData from "./color-data.json"
import ColorList from './components/ColorList'

function App() {
  const [colors] = useState(colorData)

  return (
    <>
      <ColorList
        colors={colors}
      ></ColorList>
    </>
  )
}

export default App
