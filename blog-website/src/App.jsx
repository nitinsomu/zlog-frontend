import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Layout from './components/layout'

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/register'} element={<Register/>} />
      </Route>
    </Routes>
  )
}

export default App
