import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Header from './component/Header.jsx'
import About from './component/About.jsx'
import FAQs from './component/FAQs.jsx'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
