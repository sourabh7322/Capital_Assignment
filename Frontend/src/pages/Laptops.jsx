import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Laptops() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/laptops');
        setLaptops(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLaptops();
  }, []);

  return (
    <div>
      <h2>Laptops</h2>
      <div>
        {laptops.map(laptop => (
          <div key={laptop._id}>
            <h3>{laptop.productName}</h3>
            <p>{laptop.description}</p>
            <p>Price: ${laptop.price}</p>
            <img src={laptop.productImages[0]} alt={laptop.productName} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laptops;
