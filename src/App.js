import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './ItemList';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    { name: 'Apple', quantity: 1 },
    { name: 'Banana', quantity: 1 },
    { name: 'Carrot', quantity: 1 },
  ]);
  const [cart, setCart] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem && !items.find(item => item.name.toLowerCase() === newItem.toLowerCase())) {
      setItems(prevItems => [...prevItems, { name: newItem, quantity: 1 }]);
      setNewItem('');
    }
  };

  const handleIncrement = (index) => {
    setItems(prevItems => prevItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  const handleDecrement = (index) => {
    setItems(prevItems => prevItems.map((item, i) => {
      if (i === index && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleAddToCart = (item) => {
    const cartItem = cart.find(cartItem => cartItem.name === item.name);
    if (cartItem) {
      setCart(prevCart => prevCart.map(cartItem => {
        if (cartItem.name === item.name) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        }
        return cartItem;
      }));
    } else {
      setCart(prevCart => [...prevCart, { ...item }]);
    }
  };

  const handleDeleteFromCart = (index) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const handleDeleteItem = (index) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const handleBuyItems = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setCart([]);
    }, 2000);
  };

  return (
    <Router>
      <div className="header">
        <h1>Shopping Cart</h1>
        <div className="current-time">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
      <div className="nav">
        <Link to="/">Items</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <ItemList
              items={items}
              newItem={newItem}
              handleInputChange={handleInputChange}
              handleAddItem={handleAddItem}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleAddToCart={handleAddToCart}
              handleDeleteItem={handleDeleteItem}
            />
          } />
          <Route path="/cart" element={
            <Cart
              cart={cart}
              handleDeleteFromCart={handleDeleteFromCart}
              handleBuyItems={handleBuyItems}
            />
          } />
        </Routes>
      </div>
      {showPopup && <div className="popup">Order Successful!</div>}
    </Router>
  );
};

export default App;
