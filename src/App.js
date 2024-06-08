import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Contactus from "./pages/Contactus/Contactus";
import toast, { Toaster } from "react-hot-toast";
import GoToTop from "./components/GoToTop/GoToTop";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
        </Routes>
        <GoToTop />
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}
