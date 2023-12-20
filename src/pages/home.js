import React from "react";
import Navbar from "../components/navbar";
import Tagline from "../components/tagline"
import OurServices from "../components/ourServices"
import Footer from "../components/footer"
// import Counsulting from "../components/consulting"
import Whyus from "../components/whyus"
const home = () => {
  return (
    <div>
      <Navbar />
      <Tagline />
      <OurServices />
      {/* <Counsulting /> */}
      <Whyus />
      <Footer />
    </div>
  );
};

export default home;
