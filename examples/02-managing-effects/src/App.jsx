import './App.css'
import CorrectWordCount from './components/CorrectWordCount'
import IncorrectWordCount from './components/IncorrectWordCount'

function App() {
  return (
      <div>
        <CorrectWordCount>
          Hello world
        </CorrectWordCount>


        <IncorrectWordCount>
          Hello world
        </IncorrectWordCount>
      </div>
  )
}

export default App
