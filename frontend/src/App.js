import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import NewHome from "./pages/NewHome";
import About from "./pages/About";
import WeddingServices from "./pages/WeddingServices";
import CorporateEvents from "./pages/CorporateEvents";
import SocialEvents from "./pages/SocialEvents";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/weddings" element={<WeddingServices />} />
          <Route path="/corporate-events" element={<CorporateEvents />} />
          <Route path="/social-events" element={<SocialEvents />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
