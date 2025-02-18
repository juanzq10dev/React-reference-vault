import { useState } from 'react'
import './App.css'
import StateStarRating from './components/StateStarRating'
import ReduceStarRating from './components/ReduceStarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ReduceStarRating></ReduceStarRating>
      <StateStarRating></StateStarRating>
    </div>
    </>
  )
}

export default App
