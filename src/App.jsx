import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] =useState('pink')
  return (
    
    <div className='w-full h-screen duration-200' style={{background :color}}>
      <div className=' flex  justify-center  '>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='fixed flex flex flex-wrap justify-center bottom-11 inset-x-0 px-2'>
      <button  onClick={()=>setColor((color)=>'red')}  className='bg-red-400 text-white border-black'>red</button>
      <button onClick={()=>setColor((color)=>'green')} className='bg-green-400 text-white border-black'>green</button>
      <button onClick={()=>setColor((color)=>'blue')} className='bg-blue-400 text-white  border-black'>blue</button>
      <button onClick={()=>setColor((color)=>'orange')} className='bg-orange-400 text-white  border-black'>orange</button>
      </div></div>
    
  )
}

export default App
