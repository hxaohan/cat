import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Guide from './pages/Guide'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Detail />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
