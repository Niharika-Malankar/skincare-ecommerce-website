import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/component5";

import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <BrowserRouter basename="/skincare-ecommerce-website">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/product/:id"
          element={<ProductPage addToCart={addToCart} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;