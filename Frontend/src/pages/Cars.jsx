import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/cars');
        setCars(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h2>Cars</h2>
      <div>
        {cars.map(car => (
          <div key={car._id}>
            <h3>{car.productName}</h3>
            <p>{car.description}</p>
            <p>Price: ${car.price}</p>
            <img src={car.productImages[0]} alt={car.productName} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
