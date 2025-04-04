import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className='container'>
        <h1>click counter</h1>
        <p>Number of clicks<span id='counter'>0</span></p>
        <button id='clickBtn'>click me</button>
        <button id='resetBtn'>Reset</button>
    </div>
  )
}

export default App
