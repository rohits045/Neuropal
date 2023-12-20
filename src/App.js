import "./App.css";
import React from "react";
// import logo from "./Assets/images/logo.png";
// import { a } from "react-router-dom";
// import Home from './pages/home'
// import { Link } from "react-router-dom";


import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";

import Home from "./pages/home";
import Counsulting from "./components/consulting"
import Footer from "./components/footer"
// import Contact from "./components/contact"

function App() {
  return (
    
    //  <Router>
    //   <Routes>
    //     <Route>
    //       <path class=""></path>
    //     </Route>
    //   </Routes>
    //  </Router>

    // <BrowserRouter>
    //   <Home />

    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route index element={<Home />} />
    //       <Route path="Counsulting" element={<Counsulting />} />
    //       {/* <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <Router>
      
      {/* <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/Counsulting" element={<Counsulting />}></Route>
        {/* <Route exact path="/contact" element={<Contact />}></Route> */}
        <Route exact path="/footer" element={<Footer />}></Route>
        {/* <Route exact path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
