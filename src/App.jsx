import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Game } from './components/game/Game'
import { Plus } from './components/game/Plus'
import { Minus } from './components/game/Minus'
import { ThemeProvider } from './components/themeContext/ThemeContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>

        <BrowserRouter>
          <Routes>

            <Route path='/minus' element={ <Minus /> }></Route>
            <Route path='/plus' element={ <Plus /> }></Route>
            <Route path='/game' element={ <Game /> }></Route>

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
