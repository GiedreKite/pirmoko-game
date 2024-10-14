import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Game } from './components/game/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Game />
      <Footer />
    </>
  )
}

export default App
