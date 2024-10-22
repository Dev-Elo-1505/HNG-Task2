// import { Link } from "react-router-dom"
import MenuIcon from "../assets/icons/menu.svg";
import ShoppingBagIcon from "../assets/icons/shopping-bag.svg";
import FavoriteIcon from "../assets/icons/favorite.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="shadow-custom-medium w-full">
        {/* For Mobile View */}
        <div className="flex justify-between items-center md:hidden p-5">
          <div>
            <img src={MenuIcon} alt="menu-icon" />
          </div>
          <h3 className="text-customGreen font-semibold text-2xl cursor-pointer"><Link to="/">Footerz</Link></h3>
          <div>
            <Link to={"/cart"}>
              <img
                className="cursor-pointer icon-hover"
                src={ShoppingBagIcon}
                alt="shopping bag icon"
              />
            </Link>
          </div>
        </div>

        {/* For Tablet and Desktop View */}
        <div className="hidden justify-between items-center md:flex py-6 px-20">
          <div>
            <h4 className="text-customGreen font-semibold text-2xl cursor-pointer"><Link to="/">Footerz</Link></h4>
          </div>
          <div className="flex gap-8">
            <img src={FavoriteIcon} alt="favourite icon" />
            <Link to={"/cart"}>
              <img
                className="cursor-pointer icon-hover"
                src={ShoppingBagIcon}
                alt="shopping bag icon"
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
    // <nav className="mb-4 bg-blue-800">
    //   <Link to="/" className="mr-4">Home</Link>
    //   <Link to="/product" className="mr-4">Products</Link>
    //   <Link to="/cart" className="mr-4">Cart</Link>
    //   <Link to="/checkout">Checkout</Link>
    // </nav>
  );
};

export default NavBar;
