import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Category from "./components/Category/Category";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer/>
      </AuthProvider>
    </>
  );
}

export default App;
