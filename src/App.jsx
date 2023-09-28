import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import { Home, Shop, Cart, NotFound } from './containers';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [numItems, setNumItems] = useState(0);
  return (
    <Router>
      <NavBar numItems={numItems} />
      <div className="flex-1">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
