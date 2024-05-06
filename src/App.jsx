import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './Components/NotFound'
import Skeleton from './Components/Skeleton'
const EmployeeDetails = lazy(() => import("./Components/EmployeeDetails"))
const Home = lazy(() => import("./Components/Home"))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Suspense fallback={<Skeleton />}>
          <Route path="/" element={<Home />} />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <Route path="/:id" element={<EmployeeDetails />} />

        </Suspense>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App