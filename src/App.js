import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  )
}

export default App
