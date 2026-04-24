import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Catalogo from './pages/Catalogo'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'
import CartProvider from './context/CartContext' // 1. Importar el Provider
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    // 2. Envolver todo el BrowserRouter con CartProvider
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar className="bg-blue-900" />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<Navigate to="/product/:id" replace />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App