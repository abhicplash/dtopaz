import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <div className="drop-shadow-sm absolute z-40 font-Numbers px-5 md:px-36 w-full h-14 md:h-16 flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex justify-center items-center">
            <img src={logo} alt="" className="w-20 h-14" />
          </div>
        </Link>
        <ul className="hidden md:flex gap-12 font-org items-center font-semibold">
          <Link to={"/"}>
            <li className="hover:text-[#a7babb] text-[#c08f52]">Home</li>
          </Link>
          <Link to={"/shop"}>
            <li className="hover:text-[#a7babb] text-[#c08f52]">Shop</li>
          </Link>
          <Link to={"/contact"}>
            <li className="hover:text-[#a7babb] text-[#c08f52]">Contact us</li>
          </Link>
          {isLoggedIn ? (
            <li
              className="hover:text-[#a7babb] text-[#c08f52] cursor-pointer"
              onClick={handleLogout}
            >
              Log Out
            </li>
          ) : (
            <Link to={"/login"}>
              <li className="hover:text-[#a7babb] text-[#c08f52] cursor-pointer">
                Login
              </li>
            </Link>
          )}
          {/* <FaUser /> */}
          {isLoggedIn ? (
            <Link to={"/personal"}>
              <FaUser className="text-[#a7babb] hover:text-[#e0d5af] text-xl" />
            </Link>
          ) : null}
          <Link to={"/cart"}>
            <div className="relative">
              <h1
                className="absolute bg-gradient-to-tl from-[#A67c00] to-[#FFBF00] right-0 top-0 rounded-full 
              text-[8px] w-3 h-3 flex justify-center text-center items-center"
              >
                {cartItems.length}
              </h1>
              <FaShoppingCart className="text-[#a7babb] hover:text-[#e0d5af] text-2xl" />
            </div>
          </Link>
        </ul>
        {view ? (
          <ul
            className="flex md:hidden flex-col text-2xl  z-50  bg-[#000000f5] 
          w-full left-0 top-14  text-center font-org  gap-5 h-[100vh] absolute
          border-[#a7babb] border-b-2 duration-700 items-center pt-8"
          >
            <Link to={"/"} className="w-full flex  justify-center ">
              <li className="text-[#a7babb]  hover:text-[#e0d5af] rounded-md w-[80%] h-12 border-b">
                Home
              </li>
            </Link>
            <Link to={"/shop"} className="w-full flex  justify-center ">
              <li className="text-[#a7babb]  hover:text-[#e0d5af] rounded-md w-[80%] h-12 border-b">
                Shop
              </li>
            </Link>
            <Link to={"/contact"} className="w-full flex  justify-center ">
              <li className="text-[#a7babb]  hover:text-[#e0d5af] rounded-md w-[80%] h-12 border-b">
                Contact Us
              </li>
            </Link>
            {isLoggedIn ? (
              <li
                className="text-[#a7babb]  hover:text-[#e0d5af] rounded-md w-[80%] h-12 border-b"
                onClick={handleLogout}
              >
                Log Out
              </li>
            ) : (
              <Link to={"/login"} className="w-full flex  justify-center ">
                <li className="text-[#a7babb]  hover:text-[#e0d5af] rounded-md w-[80%] h-12 border-b">
                  Login
                </li>
              </Link>
            )}
          </ul>
        ) : null}
        <div className="md:hidden flex justify-center items-center gap-6">
        {isLoggedIn ? (
            <Link to={"/personal"}>
              <FaUser className="text-[#a7babb] hover:text-[#e0d5af] text-xl" />
            </Link>
          ) : null}
          <Link to={"/cart"}>
            <FaShoppingCart className="text-[#e0d5af] text-2xl" />
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
