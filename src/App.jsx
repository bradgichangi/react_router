import React from "react"
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import Cohort from './pages/Cohort'
import Cohorts from './pages/Cohorts'
import Header from "./layouts/Header"

function App() {

return (
  <Routes>
    <Route path="/" element={<Header />} >
      <Route path="cohorts" element={<Cohorts />} >
        <Route path=":name" element={<Cohort />} />
      </Route>  
      <Route path="*" element={<h1>404</h1>} />
      <Route index element={<h1>Hello World</h1>} />
    </Route>
    
  </Routes>
  )
}

export default App
