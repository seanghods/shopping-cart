import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home, Shop, Cart, NotFound } from './containers';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      setItems(data);
    }
    fetchItems();
  }, []);
  function addToCart(item) {
    const newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  }
  function removeFromCart(e) {
    const index = e.target.id;
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }
  return (
    <Router>
      <NavBar cart={cart} />
      <div className="flex-1">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop items={items} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
