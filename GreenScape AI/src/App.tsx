import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Importez vos composants de page
import Home from "./pages/home";
import Generator from "./pages/generator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;