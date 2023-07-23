
import React from 'react';
import NavBar from './Components/NavBar';
import HelpPage from './Pages/HelpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      {/* Top-level route for HomePage */}
      <Route path="/" element={<HomePage />} />

      {/* Top-level route for HelpPage */}
      <Route path="/help" element={<HelpPage />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
