import { useState } from 'react'
import './App.css'

  function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev +1);
    };
    const handleReset = () =>{
        setCount(0);
    };

  return (
    <div className='container'>
        <h1>Click counter</h1>
        <p>Number of clicks<span> {count}</span></p>
        <button onClick={handleClick}>click me</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
