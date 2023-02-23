import { useState, createContext, useEffect } from 'react';

import './App.css'
import Navbar from './components/header/Navbar'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'
import UpdatesPage from './pages/UpdatesPage'
import Footer from './components/Footer/Footer'
import ResponsiveAppBar from './components/header/ResponsiveAppBar'


type IsMobileContextType = {
  isMobile: Boolean
}
export const IsMobileContext = createContext<IsMobileContextType>({isMobile: false})

function App() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  return (
    <div className="App">
      {/* <Navbar /> */}
     <IsMobileContext.Provider value={{isMobile}}>
     <ResponsiveAppBar />
     </IsMobileContext.Provider>
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
