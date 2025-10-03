
import React from "react";
import {  Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<Login />} />
         <Route path="/table" element={<Table />} />
      </Routes>
      <Footer/>
      </>
    
  );
};

export default App;
