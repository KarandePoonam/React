import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Vite with Tailwind</h1>
      <h1 className='text-3xl font-bold underline'>Hiiii</h1>
      <h2 className='text-3xl '></h2>
    </>
  )
}

export default App
