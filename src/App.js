import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Contactus from "./pages/Contactus/Contactus";
import { Toaster } from "react-hot-toast";
import GoToTop from "./components/GoToTop/GoToTop";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AccountLogin from "./pages/AccountLogin/AccountLogin";
import AccountRegister from "./pages/AccountRegister/AccountRegister";
import AuthRoutes from "./routes/AuthRoutes/AuthRoutes";
import OrderHistory from "./pages/OrderHistory/OrderHistory";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/orderHistory/:id" element={<OrderHistory />} />

        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<AccountLogin />} />
          <Route path="/register" element={<AccountRegister />} />
        </Route>
      </Routes>
      <GoToTop />
      <Footer />
      <Toaster />
    </>
  );
}
