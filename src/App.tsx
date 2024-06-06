import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/portal/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
