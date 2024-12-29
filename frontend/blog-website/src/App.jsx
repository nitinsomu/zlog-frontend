import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Content from './components/body'

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  )
}

export default App
