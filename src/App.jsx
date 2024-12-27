import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from './pages/Product'
import Navbar from "./components/Navbar";
import Category from "./components/Category/Category";

function App() {
  return <>
    <Navbar/>
    <Category/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
  </>;
}

export default App;
