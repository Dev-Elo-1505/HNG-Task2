import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { SavedProducts } from "./pages/SavedProducts";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route />
        </Route>
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/savedProducts" element={<SavedProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
