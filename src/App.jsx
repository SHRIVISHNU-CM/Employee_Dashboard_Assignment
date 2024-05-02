import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import EmployeeDetails from './Components/EmployeeDetails'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<EmployeeDetails/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App