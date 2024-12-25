import React from 'react';
import './App.css';
import './style/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomDetails from './page/RoomDetails';
import Home from './page/Home'; // หน้าใหม่ที่รวม Carousel และ Review

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roomdetails" element={<RoomDetails />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
