import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-slate-800">
        <Navbar />
        <main>
          <section id="home" className="">
            <Home />
          </section>
          <section id="about" className="">
            <About />
          </section>
          <section id="services" className="">
            <Services />
          </section>
          <section id="portfolio" className="">
            <Portfolio />
          </section>
          <section id="contact" className="">
            <Contact />
          </section>
          <Analytics />
        </main>
      </div>
    </Router>
  );
}

export default App;
