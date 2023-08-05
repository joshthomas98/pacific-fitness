import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SocialMediaIcons from "./components/SocialMediaIcons";
import Homepage from "./pages/Homepage";
import TheGymOLD from "./pages/TheGymOLD";

import LegRoom from "./pages/LegRoom";
import CardioAndAbsRoom from "./pages/CardioAndAbsRoom";
import ChestAndBackRoom from "./pages/ChestAndBackRoom";
import ShouldersAndArmsRoom from "./pages/ShouldersAndArmsRoom";
import StrengthRoom from "./pages/StrengthRoom";
import HIITRoom from "./pages/HIITRoom";
import BoxingAndBikesRoom from "./pages/BoxingAndBikesRoom";
import Contact from "./pages/Contact";
import Membership from "./components/Membership";
import TheTeam from "./pages/TheTeam";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <div className="d-flex justify-content-end">
          <SocialMediaIcons />
        </div>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="thegymold" element={<TheGymOLD />} />

          <Route path="legroom" element={<LegRoom />} />

          <Route path="cardioandabsroom" element={<CardioAndAbsRoom />} />

          <Route path="chestandbackroom" element={<ChestAndBackRoom />} />

          <Route
            path="shouldersandarmsroom"
            element={<ShouldersAndArmsRoom />}
          />

          <Route path="strengthroom" element={<StrengthRoom />} />

          <Route path="hiitroom" element={<HIITRoom />} />

          <Route path="boxingandbikesroom" element={<BoxingAndBikesRoom />} />

          <Route path="contact" element={<Contact />} />

          <Route path="membership" element={<Membership />} />

          <Route path="theteam" element={<TheTeam />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
