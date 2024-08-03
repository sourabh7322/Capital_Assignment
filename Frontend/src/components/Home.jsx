import React, { useEffect } from 'react';
import { useSearch } from '../context/SearchContext'; // Adjust path if necessary

function Home() {
  const { query, results, setResults } = useSearch();

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        try {
          const response = await fetch(`http://localhost:5050/api/search?search=${query}`);
          const data = await response.json();
          setResults(data);
        } catch (err) {
          console.error('Error fetching search results:', err);
        }
      };
      fetchResults();
    }
  }, [query, setResults]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <h2>Bikes</h2>
        {results.bikes.length > 0 ? (
          <ul>
            {results.bikes.map((bike) => (
              <li key={bike._id}>
                {bike.productName} - {bike.brandName}
              </li>
            ))}
          </ul>
        ) : (
          <p>No bikes found.</p>
        )}
      </div>
      <div>
        <h2>Cars</h2>
        {results.cars.length > 0 ? (
          <ul>
            {results.cars.map((car) => (
              <li key={car._id}>
                {car.productName} - {car.brandName}
              </li>
            ))}
          </ul>
        ) : (
          <p>No cars found.</p>
        )}
      </div>
      <div>
        <h2>Houses</h2>
        {results.houses.length > 0 ? (
          <ul>
            {results.houses.map((house) => (
              <li key={house._id}>
                {house.productName} - {house.brandName}
              </li>
            ))}
          </ul>
        ) : (
          <p>No houses found.</p>
        )}
      </div>
      <div>
        <h2>Laptops</h2>
        {results.laptops.length > 0 ? (
          <ul>
            {results.laptops.map((laptop) => (
              <li key={laptop._id}>
                {laptop.productName} - {laptop.brandName}
              </li>
            ))}
          </ul>
        ) : (
          <p>No laptops found.</p>
        )}
      </div>
      <div>
        <h2>Mobiles</h2>
        {results.mobiles.length > 0 ? (
          <ul>
            {results.mobiles.map((mobile) => (
              <li key={mobile._id}>
                {mobile.productName} - {mobile.brandName}
              </li>
            ))}
          </ul>
        ) : (
          <p>No mobiles found.</p>
        )}
      </div>
      <div>
        <h2>Items</h2>
        {results.items.length > 0 ? (
          <ul>
            {results.items.map((item) => (
              <li key={item._id}>
                {item.productName} - {item.brandName}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
