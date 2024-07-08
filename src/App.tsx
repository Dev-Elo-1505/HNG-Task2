import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { SavedProducts } from "./pages/SavedProducts";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/savedProducts" element={<SavedProducts />} />
        </Routes>
      </div>
    </Router>
  );}

export default App;
