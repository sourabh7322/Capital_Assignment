import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Bikes from './pages/Bikes';
import Cars from './pages/Cars';
import Houses from './pages/Houses';
import Laptops from './pages/Laptops';
import Mobiles from './pages/Mobiles';
import Items from './pages/Items';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <SearchProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/items" element={<Items />} />
          
        </Routes>
        <Footer />
        </AuthProvider>
      </SearchProvider>
    </>
  );
}

export default App;
