import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import CartSideBar from "./cart/CartSideBar";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../redux/cartSlice";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const { isOpen, setIsOpen } = useContext(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
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
              <NavLink to="/product">Product</NavLink>
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
