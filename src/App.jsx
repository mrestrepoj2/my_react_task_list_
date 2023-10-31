import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <input type='text' placeholder='Ingrese una nueva tarea'>
      </input>

    </div>
  )
}

export default App
