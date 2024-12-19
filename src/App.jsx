// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Header from './componets/Header';
import VideoDetail from './componets/VideoDetail'; // Import the VideoDetail component
import Trending from './componets/Trending';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/TRENDING' element={<Trending />}/>
          <Route path="/video/:id" element={<VideoDetail />} /> {/* Add this route */}
          <Route path="/video/:id" element={<VideoDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;