import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tour from "./components/Tour";
import Place from "./components/Place";

import Review from "./components/Review";
import Footer from "./components/Footer";

import About from "./pages/About";
import CarRental from "./pages/Rental";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";
import Cruises from "./pages/Cruises";
import Package from "./components/Package";
import TermsConditions from "./pages/Terms";
import CancellationPolicy from "./pages/Cancel";
import TravelAdvisory from "./pages/Advisory";
import CookiePolicy from "./pages/cookie";
import TaxesFees from "./pages/Tax";
import Disclaimer from "./pages/Disclamer";
import ServiceFees from "./pages/Service";
import PostTicketingFees from "./pages/Fees";

function App() {
  return (
    <Router>
      {/* Common Navbar */}
      <Navbar />

      {/* Dynamic Routes */}
      <Routes>
        <Route path="/" element={

          <>
          <Home/>
            <Tour/>
   <Place/>
  <Package/>
   <Review/>
          
          
          </>
        } />
       <Route path="/about" element={<About/>}/>
       <Route path="/car" element={<CarRental/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/policy" element={<PrivacyPolicy/>}/>
       <Route path="/refund" element={<RefundPolicy/>}/>
       <Route path="/cruises" element={<Cruises/>}/>
       <Route path="/term" element={<TermsConditions/>}/>
       <Route path="/cancel" element={<CancellationPolicy/>}/>
       <Route path="/advisory" element={<TravelAdvisory/>}/>
       <Route path="/cookie" element={<CookiePolicy/>}/>
       <Route path="/Tax" element={<TaxesFees/>}/>
       <Route path="/disclamer" element={<Disclaimer/>}/>
       <Route path="/service" element={<ServiceFees/>}/>
       <Route path="/fees" element={<PostTicketingFees/>}/>
      
      </Routes>

      {/* Common Footer */}
      <Footer />
    </Router>
  );
}

export default App;

 