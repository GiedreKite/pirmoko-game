import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Game } from './components/game/Game'
import { Plus } from './components/game/Plus'
import { Minus } from './components/game/Minus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Minus />
      <Footer />
    </>
  )
}

export default App
