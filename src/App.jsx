import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './Components/NotFound'

const EmployeeDetails = lazy(() => import("./Components/EmployeeDetails"))
const Home = lazy(() => import("./Components/Home"))
import Loader from './Components/Loader'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/:id" element={<EmployeeDetails />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App