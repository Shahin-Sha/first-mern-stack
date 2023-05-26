import React from 'react'
import Nav1 from './Units/Nav1'
import Home from './Pages/Home'
import Login from './Pages/Login'
import AddItem from './Pages/AddItem'
import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <div>
      <Nav1 />
      <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/login" element={<Login />} />
      <Route path="/addItem" element={<AddItem />} />   
      </Routes>
    </div>
  )
}
