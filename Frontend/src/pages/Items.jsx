import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://capital-assignment-3.onrender.com/api/items');
        setItems(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <div>
        {items.map(item => (
          <div key={item._id}>
            <h3>{item.productName}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <img src={item.productImages[0]} alt={item.productName} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
