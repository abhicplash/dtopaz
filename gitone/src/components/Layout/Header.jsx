import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../../Assets/logo/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { logout } from "../../utils/store/authSlice"; // Import logout action

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Get auth state
  const [view, setView] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <div>
      <div className="drop-shadow-sm absolute  z-40
       font-Numbers  px-5 md:px-36 w-full
        h-14 md:h-16 flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex justify-center items-center ">
            <img src={logo} alt="" className="w-20 h-14 " />
          </div>
        </Link>
        <ul className="hidden md:flex gap-12 font-org items-center font-semibold">
          <Link to={"/"}>
            <li className=" hover:text-[#a7babb] text-[#c08f52]">Home</li>
          </Link>
          <Link to={"/shop"}>
            <li className=" hover:text-[#a7babb] text-[#c08f52]">Shop</li>
          </Link>
          <Link to={"/contact"}>
            <li className=" hover:text-[#a7babb] text-[#c08f52]">Contact us</li>
          </Link>
          {isLoggedIn ? ( 
            <li className=" hover:text-[#a7babb] text-[#c08f52] cursor-pointer" onClick={handleLogout}>
              Log Out
            </li>
          ) : (
            <Link to={"/login"}>
              <li className=" hover:text-[#a7babb] text-[#c08f52] cursor-pointer">Login</li>
            </Link>
          )}
          <Link to={"/cart"}>
            <div className="relative">
              <h1 className="absolute bg-gradient-to-tl from-[#A67c00] to-[#FFBF00] right-0 top-0 rounded-full text-[8px] w-3 flex justify-center items-center">
                {cartItems.length}
              </h1>
              <FaShoppingCart className="text-[#a7babb] hover:text-[#e0d5af] text-2xl" />
            </div>
          </Link>
        </ul>
        {/* Mobile Menu Logic */}
        {view ? (
          <ul className="flex md:hidden flex-col text-2xl absolute z-50 bg-[#2e728f] w-full left-0 top-14 py-16 text-center justify-center items-center gap-5 h-72 border-[#a7babb] border-b-2 duration-700">
            <Link to={"/"}>
              <li className="text-[#a7babb] hover:text-[#e0d5af]">Home</li>
            </Link>
            <Link to={"/shop"}>
              <li className="text-[#a7babb] hover:text-[#e0d5af]">Shop</li>
            </Link>
            <Link to={"/contact"}>
              <li className="text-[#a7babb] hover:text-[#e0d5af]">Contact Us</li>
            </Link>
          </ul>
        ) : null}
        <div className="md:hidden flex justify-center items-center gap-6">
          <FaUser className="text-[#e0d5af] text-2xl cursor-pointer" />
          <Link to={"/cart"}>
            <FaShoppingCart className="text-[#e0d5af] text-2xl " />
          </Link>
          <FaBarsStaggered
            className="text-[#e0d5af] text-2xl cursor-pointer"
            onClick={() => setView(!view)}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
