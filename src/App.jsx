import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Category from "./components/Category/Category";

function App() {
  return <>
    <Navbar/>
    <Category/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </>;
}

export default App;
