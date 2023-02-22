import { useState } from 'react'

import './App.css'
import Navbar from './components/header/Navbar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
    </div>
  )
}

export default App
