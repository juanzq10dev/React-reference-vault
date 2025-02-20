import './App.css'
import ColorList from './components/ColorList'
import AddColorForm from './components/Form'

// Color provider used on main.tsx
function App() {
  return (
    <>
      <AddColorForm></AddColorForm>
      <ColorList></ColorList>
    </>
  )
}

export default App
