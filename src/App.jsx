import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Content/>
    </div>
  )
}

export default App
