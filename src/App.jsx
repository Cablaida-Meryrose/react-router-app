import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer' 
import Landing from './pages/landing'
import About from './pages/about'
import Services from './pages/services'
import Projects from './pages/projects'
import Contacts from './pages/contacts'
import NotFound from './pages/notfound'

function App() {
  return (
    // Main Container
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Main Body Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Footer/Paahan */}
      <Footer />
    </div>
  )
}

export default App