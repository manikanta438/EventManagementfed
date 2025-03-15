import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import DemoForm from "./components/Demoform";
import EventVenues from "./components/EventVenues";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/products" element={<h1>Products Page</h1>} />
        <Route path="/event-types" element={<h1>Event Types Page</h1>} />
        <Route path="/resources" element={<h1>Resources Page</h1>} />
        <Route path="/company" element={<h1>Company Page</h1>} />
        <Route path="/event-venues" element={<EventVenues />} />
       
      </Routes>
      <DemoForm />
    </>
  );
}
