import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const { isOpen, setIsOpen } = useContext(false);
  return (
    <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto">
        <div>
          <Link to="/" className="text-gray-700 italic text-7xl">
            E-Shop
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
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative"
            >
              <BsBag className="text-2xl" />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                5
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    // <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
    //   <nav className="flex items-center container mx-auto">
    //     <div>aslmcalk</div>
    //     <ul className="list-none flex justify-center items-center ml-auto gap-5">
    //       <li>
    //         {/* <NavLink to="/">Home</NavLink> */}sdn sn
    //       </li>
    //       <li>
    //         {/* <NavLink to="/about">About</NavLink> */}sdjlnsjkd
    //       </li>
    //       <li>
    //         {/* <NavLink to="/product">Product</NavLink> */}sldj sjdn
    //       </li>
    //       <li>
    //         {/* <NavLink to="/booking">Booking</NavLink> */}sdkm
    //       </li>
    //       <li>
    //         {/* <NavLink to="/contact">Contact</NavLink> */}ascasd
    //       </li>
    //       <li>
    //         {/* <NavLink to="/cart"> */}
    //           <FaShoppingCart />
    //         {/* </NavLink> */}
    //       </li>
    //     </ul>
    //   </nav>
    //   {/* <div className="container mx-auto">
    //     <h1 className="text-white text-3xl font-semibold">My React App</h1>
    //   </div> */}
    // </div>
  );
};

export default Header;
