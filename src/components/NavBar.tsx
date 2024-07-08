import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="mb-4 bg-blue-800">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/product" className="mr-4">Products</Link>
      <Link to="/cart" className="mr-4">Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );}

export default NavBar