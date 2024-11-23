import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hire from "./components/Hire";
import Logform from "./components/LogForm";
import ServicesRoute from "./components/ServicesRoute";
import ContactRoute from "./components/ContactRoute";
import OurworkRoute from "./components/OurworkRoute";
import AboutusRoute from "./components/AboutusRoute";
import InsightsRoute from "./components/InsightsRoute";

import LocomotiveScroll from "locomotive-scroll";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path='/login-form'
          element={<Logform />}
        />
        <Route
          path='/services'
          element={<ServicesRoute />}
        />

        <Route
          path='/our-work'
          element={<OurworkRoute />}
        />

        <Route
          path='/about-us'
          element={<AboutusRoute />}
        />

        <Route
          path='/insights'
          element={<InsightsRoute />}
        />
        <Route
          path='/contact'
          element={<ContactRoute />}
        />

        <Route
          path='/'
          element={
            <div className='w-full min-h-screen text-white bg-zinc-900'>
              <Navbar />
              <LandingPage />
              <Marquee />
              <About />
              <Eyes />
              <Featured />
              <Cards />
              <Hire />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
