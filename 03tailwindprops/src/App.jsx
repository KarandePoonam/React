import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 font underline'>Vite with Tailwind</h1>
      {/* <h1 className='text-3xl font-bold underline'>Hiiii</h1> */}
      <h2 className='text-3xl bg-purple-400 mb-4'>Fun with Tailwind</h2>
      <Card username="Poonam" />
      <Card />
    </>
  )
}

export default App
