import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router';

import Homepage from './pages/HomePage'
import VisionPage from './pages/VisionPage'
import EndpointsPage from './pages/EndpointsPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={ <Homepage /> } />
          <Route path="/vision" element={ <VisionPage />} />
          <Route path="/endpoints" element={ <EndpointsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
