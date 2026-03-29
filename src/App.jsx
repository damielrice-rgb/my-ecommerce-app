import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { HomePage } from './Pages/HomePage';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { OrdersPage } from './Pages/OrdersPage';
import { TrackingPage } from './Pages/TrackingPage';
import { NotFound } from './Pages/NotFound';
import './App.css'

function App() {
   const [cart, setCart] = useState([]);
  
   useEffect(() => {
   axios.get('/api/cart-items')
    .then((response) => {
     setCart(response.data);
    });
    }, []);

  return (
    <Routes>
      <Route index element={ <HomePage cart={cart} />}/>
      <Route path="checkout" element={<CheckoutPage cart={cart} />}></Route>
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
 
      
  );
}

export default App
