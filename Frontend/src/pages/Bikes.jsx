import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Bikes() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/bikes');
        setBikes(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBikes();
  }, []);

  return (
    <div>
      <h2>Bikes</h2>
      <div>
        {bikes.map(bike => (
          <div key={bike._id}>
            <h3>{bike.productName}</h3>
            <p>{bike.description}</p>
            <p>Price: ${bike.price}</p>
            <img src={bike.productImages[0]} alt={bike.productName} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bikes;
