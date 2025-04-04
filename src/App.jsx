import { useState } from 'react'
import './App.css'

  function App() {
     let count = 0;
     const counterDisplay = document.getElementById('counter');
     const clickBtn = document.getElementById('clickBtn');
     const resetBtn = document.getElementById('resetBtn');

     clickBtn.addEventListener('click', () => {
         count++;
         counterDisplay.textContent = count;
     });

     resetBtn.addEventListener('click', ()=>{
         count = 0;
         counterDisplay.textContent = count;
     });

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
