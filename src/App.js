import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SocialMediaIcons from "./components/SocialMediaIcons";
import Homepage from "./pages/Homepage";

import LegRoom from "./pages/LegRoom";
import CardioAndAbsRoom from "./pages/CardioAndAbsRoom";
import ChestAndBackRoom from "./pages/ChestAndBackRoom";
import ShouldersAndArmsRoom from "./pages/ShouldersAndArmsRoom";
import StrengthRoom from "./pages/StrengthRoom";
import HIITRoom from "./pages/HIITRoom";
import BoxingAndBikesRoom from "./pages/BoxingAndBikesRoom";
import ContactInfoAndLocation from "./pages/ContactInfoAndLocation";
import Membership from "./components/Membership";
import TheTeam from "./pages/TheTeam";
import NewsAndEvents from "./pages/NewsAndEvents";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="social-bar">
          <Container>
            <div className="d-flex justify-content-end py-2">
              <SocialMediaIcons />
            </div>
          </Container>
        </div>
        <Navbar />
        <main className="main-content">
          <Container className="py-4">
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/legroom" element={<LegRoom />} />
              <Route path="/cardioandabsroom" element={<CardioAndAbsRoom />} />
              <Route path="/chestandbackroom" element={<ChestAndBackRoom />} />
              <Route path="/shouldersandarmsroom" element={<ShouldersAndArmsRoom />} />
              <Route path="/strengthroom" element={<StrengthRoom />} />
              <Route path="/hiitroom" element={<HIITRoom />} />
              <Route path="/boxingandbikesroom" element={<BoxingAndBikesRoom />} />
              <Route path="/contact" element={<ContactInfoAndLocation />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/theteam" element={<TheTeam />} />
              <Route path="/newsandevents" element={<NewsAndEvents />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
