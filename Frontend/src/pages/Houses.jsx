import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/houses');
        setHouses(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHouses();
  }, []);

  return (
    <div>
      <h2>Houses</h2>
      <div>
        {houses.map(house => (
          <div key={house._id}>
            <h3>{house.productName}</h3>
            <p>{house.description}</p>
            <p>Price: ${house.price}</p>
            <img src={house.productImages[0]} alt={house.productName} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Houses;
