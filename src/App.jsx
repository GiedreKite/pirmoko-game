import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react'
import './App.css'

import { Game } from './components/game/Game'
import { Plus } from './components/game/Plus'
import { Minus } from './components/game/Minus'
import { ThemeProvider } from './components/themeContext/ThemeContext';
import Main from './components/main/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Main /> }></Route>

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
