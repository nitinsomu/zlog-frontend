import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Layout from './components/layout'
import CreatePost from './pages/createPost'
import { UserContextProvider } from './UserContext'
import PostPage from './pages/postPage'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path={'/login'} element={<Login/>} />
          <Route path={'/register'} element={<Register/>} />
          <Route path={'/create'} element={<CreatePost/>} />
          <Route path={'/post/:id'} element={<PostPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
