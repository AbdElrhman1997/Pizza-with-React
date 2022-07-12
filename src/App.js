import React from 'react';
import Home from './Components/Home/Home';
import Pizza from './Components/Pizza/Pizza';
import Offer from './Components/Offer/Offer';
import Sweet from './Components/Sweet/Sweet';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/> 
      <Pizza/>
      <Offer/>
      <Sweet/>
      <Footer/>
    </div>
  );
}

export default App;
