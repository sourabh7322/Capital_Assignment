import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext'; 

function Navbar() {
  const { query, setQuery } = useSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality or redirect to search results page
    console.log('Search query:', query);
    // Assuming you want to redirect to a results page:
    window.location.href = `/search?query=${encodeURIComponent(query)}`;
  };

  return (
    <nav>
      <ul>
        <li><Link to="/bikes">Bikes</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/houses">Houses</Link></li>
        <li><Link to="/laptops">Laptops</Link></li>
        <li><Link to="/mobiles">Mobiles</Link></li>
        <li><Link to="/items">Items</Link></li>
        <li>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
            {/* <label htmlFor="search" style={{ marginRight: '8px' }}>Search:</label> */}
            <input
              id="search"
              type="text"
              placeholder="Search all categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ padding: '8px', fontSize: '16px' }}
            />
            <button type="submit" style={{ padding: '8px 12px', fontSize: '16px' }}>Search</button>
          </form>
        </li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
