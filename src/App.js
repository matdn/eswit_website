import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Pricing from './Views/Pricing';
import Solutions from './Views/Solutions';
import Products from './Views/Products';
import Contact from './Views/Contact';
import React, { useState, useEffect } from 'react';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
      ) : (
      <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/solutions" element={<Solutions/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer/>
      </Router>
      )}
    </div>
  );
}

export default App;
