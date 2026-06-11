import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/component5";

import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;