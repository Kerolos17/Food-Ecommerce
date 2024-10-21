// import React from 'react'

import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import Card from "./pages//Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { Fragment, useState } from "react";
import Login from "./Components/LoginPage/Login";
import Cart from "./pages//Cart/Cart";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Fragment>
      {
        showLogin && <Login setShowLogin={setShowLogin} />
      }
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <ScrollToTop/>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
