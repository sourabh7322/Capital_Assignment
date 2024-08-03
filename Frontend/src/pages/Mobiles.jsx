import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mobiles() {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/mobiles');
        setMobiles(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMobiles();
  }, []);

  return (
    <div>
      <h2>Mobiles</h2>
      <div>
        {mobiles.map(mobile => (
          <div key={mobile._id}>
            <h3>{mobile.productName}</h3>
            <p>{mobile.description}</p>
            <p>Price: ${mobile.price}</p>
            <img src={mobile.productImages[0]} alt={mobile.productName} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobiles;
