import React from 'react'
import './App.css'
import FizzCounter from './FizzCounter/FizzCounter'

function App() {
  return (
    <div className="container">
      <h1 className="header">FizzBuzz example with React</h1>
      <FizzCounter />
    </div>
  )
}

export default App