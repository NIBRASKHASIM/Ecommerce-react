import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import CartSideBar from "./cart/CartSideBar";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../redux/cartSlice";
import { searchTerm } from "../redux/searchSlice";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const searchHandler = () => {
    navigate("/search");
    dispatch(searchTerm(searchQuery));
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50  shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
        <nav className="flex items-center container mx-auto">
          <div>
            <Link to="/" className="text-gray-700 italic text-7xl">
              EXa
            </Link>
          </div>
          <ul className="list-none flex justify-center items-center ml-auto gap-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/product">Shop</NavLink>
            </li>
            <li className="relative">
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="py-2 pl-4 pr-10 rounded-full focus:outline-none focus:border-blue-500 bg-gray-150"
                />
                <button
                  onClick={searchHandler}
                  className="rounded-full p-2 ml-2 bg-gray-00 text-white"
                >
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-5-5m-2-2a7 7 0 111-11 7 7 0 01-1 11zm-4-7a4 4 0 100-8 4 4 0 000 8z"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>

            <li>
              <div
                onClick={() => dispatch(showCart())}
                className="cursor-pointer flex relative"
              >
                <BsBag className="text-2xl" />
                <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                  {cart.length}
                </div>
              </div>
            </li>
          </ul>
        </nav>
        {/* {isOpen && <CartSideBar />} */}
      </div>
    </>
  );
};

export default Header;
