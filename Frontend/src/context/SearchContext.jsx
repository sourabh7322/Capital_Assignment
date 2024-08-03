import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ bikes: [], cars: [], houses: [], laptops: [], mobiles: [], items: [] });

  return (
    <SearchContext.Provider value={{ query, setQuery, results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
}
