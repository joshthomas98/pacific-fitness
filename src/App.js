import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";

import SocialMediaIcons from "./components/SocialMediaIcons";
import Homepage from "./pages/Homepage";
import TheGym from "./pages/TheGym";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <SocialMediaIcons />
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="thegym" element={<TheGym />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
