import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Layout from './components/layout'
import { UserContext, UserContextProvider } from './UserContext'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path={'/login'} element={<Login/>} />
          <Route path={'/register'} element={<Register/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
