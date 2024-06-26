import React from 'react';
import './ItemList.css';

const ItemList = ({
  items, newItem, handleInputChange, handleAddItem,
  handleIncrement, handleDecrement, handleAddToCart, handleDeleteItem
}) => {
  return (
    <div className="item-list section">
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
            <button className="increment" onClick={() => handleIncrement(index)}>+</button>
            <button className="decrement" onClick={() => handleDecrement(index)}>-</button>
            <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            <button className="delete-item" onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter item"
        value={newItem}
        onChange={handleInputChange}
      />
      <button className="add-item" onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ItemList;
