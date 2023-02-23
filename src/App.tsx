import { useState } from 'react'

import './App.css'
import Navbar from './components/header/Navbar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'
import UpdatesPage from './pages/UpdatesPage'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/updates" element={<UpdatesPage />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
