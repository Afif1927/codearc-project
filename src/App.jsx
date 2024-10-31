import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hire from './components/Hire';
import Logform from './components/LogForm';
import LocomotiveScroll from 'locomotive-scroll';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Route path="/login-form" element={<Logform />} />
        <Route
          path="/"
          element={
            <div className="w-full min-h-screen text-white bg-zinc-900">
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
