import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home, Shop, Cart, NotFound } from './containers';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [buttonStates, setButtonStates] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      setItems(data);
    }
    fetchItems();
  }, []);
  function navigateShop() {
    navigate('/shop');
  }
  function addToCart(e, item) {
    setButtonStates(prevState => ({ ...prevState, [e.target.id]: 'Added' }));
    const newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
    setTimeout(() => {
      setButtonStates(prevState => ({
        ...prevState,
        [e.target.id]: 'Add to Cart',
      }));
    }, 1000);
  }
  function removeFromCart(e) {
    const index = e.target.id;
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }
  return (
    <>
      <NavBar cart={cart} />
      <div className="flex-1">
        <Routes>
          <Route path="/home" element={<Home navigateShop={navigateShop} />} />
          <Route
            path="/shop"
            element={
              <Shop
                items={items}
                buttonStates={buttonStates}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                navigateShop={navigateShop}
              />
            }
          />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
