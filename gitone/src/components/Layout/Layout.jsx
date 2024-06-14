import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import whatsapp from "../../Assets/logo/WhatsApp.png";
// import { FaWhatsapp } from "react-icons/fa6";

function Layout({ children }) {
  return (
    <div className="bg-white">
      <Header />
      {children}

      <a href="https://wa.me/9710505590994/?text=let me know more about Diana Topaz">
        <img
          src={whatsapp}
          alt=""
          className="fixed z-50
       bottom-2 right-2 w-14 md:w-16"
        />
      </a>

      <Footer />
    </div>
  );
}

export default Layout;
