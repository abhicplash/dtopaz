import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Pages/Shop";
import Product from "./components/Pages/Product";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import PNF from "./components/Pages/PNF";
import About from "./components/Pages/About";
import ScrollToTop from "./components/Layout/ScrollToTop";
import ALLjewels from "./components/Layout/ALLjewels";
import ShopLayout from "./components/Layout/ShopLayout";
import NecklaceJewel from "./components/Layout/NecklaceJewel";
import Ringjewels from "./components/Layout/Ringjewels";
import BraceLetjewel from "./components/Layout/BraceLetjewel";
import Earingjewels from "./components/Layout/Earingjewels";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import ShippingandReturns from "./components/Pages/ShippingandReturns";
import TermsandConditions from "./components/Pages/TermsandConditions";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/contact" element={<About />} />
            <Route path="/Shop" element={<ALLjewels />} />
            <Route path="/necklace" element={<NecklaceJewel />} />
            <Route path="/ring" element={<Ringjewels />} />
            <Route path="/bracelet" element={<BraceLetjewel />} />
            <Route path="/earing" element={<Earingjewels />} />
            <Route path="/Product/:productId" element={<Product />} />
            <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/Shipping-and-Returns" element={<ShippingandReturns />} />
            <Route path="/Terms-and-Conditions" element={<TermsandConditions />} />

            <Route path="*" element={<PNF />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
