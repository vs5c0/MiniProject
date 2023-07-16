import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Common/Login'
import Sign from './Common/Sign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <Routes>
  <Route path='/' Component={Login}/>
  <Route path='/s' Component={Sign}/>
</Routes> */}

  
<Login/>
    </>
  )
}

export default App
