import React from 'react'
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'
import Favourites from './pages/Favourites'
import NavBar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favourites' element={<Favourites/>}></Route>
          <Route path='/favorites' element={<Favourites/>}></Route>
        </Routes>
      </main >
    </div >
  )
}

export default App