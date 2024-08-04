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
            <h3>{house.sellerName}</h3>
            <img src={house.image[0]} alt="House" width="200" />
            <p>{house.description}</p>
            <p>Price: ${house.price}</p>
            <p>Address: {house.address}</p>
            <p>Post Date: {house.postDate}</p>
            <p>Member Since: {house.memberSince}</p>
            <p>Phone: {house.phone}</p>
            <p>State: {house.state}</p>
            <p>Bathrooms: {house.bathrooms}</p>
            <p>Bedrooms: {house.bedrooms}</p>
            <p>Furnished: {house.furnished}</p>
            <p>Category: {house.category}</p>
            <p>Floor: {house.floor}</p>
            <p>Car Parking: {house.carParking}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Houses;
