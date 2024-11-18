import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Shop from "./components/Pages/Shop";
import Product from "./components/Pages/Product";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import PNF from "./components/Pages/PNF";
import About from "./components/Pages/About";
import ScrollToTop from "./components/Layout/ScrollToTop";
import ALLjewels from "./components/Layout/ALLjewels";
// import ShopLayout from "./components/Layout/ShopLayout";
import NecklaceJewel from "./components/Layout/NecklaceJewel";
import Ringjewels from "./components/Layout/Ringjewels";
import BraceLetjewel from "./components/Layout/BraceLetjewel";
import Earingjewels from "./components/Layout/Earingjewels";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import ShippingandReturns from "./components/Pages/ShippingandReturns";
import TermsandConditions from "./components/Pages/TermsandConditions";
import Register from "./components/Layout/Register";
import Login from "./components/Layout/Login";
import ForgotPassword from "./components/Layout/ForgotPassword";
import PersonalInfo from "./components/Pages/PersonalInfo";
import ProvideInformation from "./components/Pages/ProvideInformation";
import OrderHistory from "./components/Pages/OrderHistory";
import PaymentMethods from "./components/Pages/PaymentMethods";

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-white">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/contact" element={<About />} />
            <Route exact path="/Shop" element={<ALLjewels />} />
            <Route exact path="/necklace" element={<NecklaceJewel />} />
            <Route exact path="/ring" element={<Ringjewels />} />
            <Route exact path="/bracelet" element={<BraceLetjewel />} />
            <Route exact path="/earing" element={<Earingjewels />} />
            <Route exact path="/Product/:productId" element={<Product />} />
            <Route exact path="/Privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/PaymentMethods" element={<PaymentMethods />} />
            <Route
              exact
              path="/Shipping-and-Returns"
              element={<ShippingandReturns />}
            />
            <Route
              exact
              path="/Terms-and-Conditions"
              element={<TermsandConditions />}
            />

            <Route exact path="/personal" element={<PersonalInfo />} />
            <Route
              exact
              path="/provideInformation"
              element={<ProvideInformation />}
            />
            <Route exact path="/OrderHistory" element={<OrderHistory />} />
            <Route exact path="*" element={<PNF />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
