import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Teeshirts } from './pages/Teeshirts/Teeshirts'
import { Hoodies } from './pages/Hoodies/Hoodies'
import { Accessories } from './pages/Accessories/Accessories'
import { ShopContextProvider } from './context/shop-context'
import { Cart } from './pages/Cart/Cart'
import { Product } from './pages/Product/Product'

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/teeshirts' element={<Teeshirts />} />
            <Route path='/hoodies' element={<Hoodies />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/actual-product' element={<Product />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
