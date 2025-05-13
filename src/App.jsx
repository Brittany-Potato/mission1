import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/Navbar/navbar.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
    </Routes>
    </>
  )
}

export default App
