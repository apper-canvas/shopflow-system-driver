import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/organisms/Layout'
import Home from '@/components/pages/Home'
import Products from '@/components/pages/Products'
import ProductDetail from '@/components/pages/ProductDetail'
import Cart from '@/components/pages/Cart'
import Checkout from '@/components/pages/Checkout'
import OrderConfirmation from '@/components/pages/OrderConfirmation'
import { CartProvider } from '@/hooks/useCart'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:category" element={<Products />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-confirmation/:orderId" element={<OrderConfirmation />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ zIndex: 9999 }}
        />
      </div>
    </CartProvider>
  )
}

export default App