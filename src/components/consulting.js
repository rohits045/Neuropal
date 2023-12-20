import React from "react";
import logo from "../Assets/images/logo.png";
// import Home from "../pages/home"
import th from "../Assets/images/th.png"
import Footer from "../components/footer"

const Counsulting = () => {
  return (
    <>
      <div class="hero1 col-lg-12 col-sm-6 col-xs-3">
        <nav class="navbar  navbar1 navbar-expand-lg mx-3">
          <div class="container-fluid px-5">
            <a class="navbar-brand Nlogo" href="/home">
              {" "}
              <img src={logo} alt="" class="App-logo mb-4" />
            </a>

            <a class="navbar-brand" href="/home"></a>

            {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars itag"></i>
          </button> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <a
                    class="nav-a active"
                    aria-current="page"
                    href="/Counsulting"
                  >
                    Dr Consulting
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-a active"
                    aria-current="page"
                    href="/futurescope"
                  >
                    Future Scope
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-a" href="/footer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <nav className="main-nav">
        {/* 1st logo part  */}
        {/* <div className="logo">
          <img src="neuro.png" alt="Avatar"></img>
        </div> */}

        {/* 2nd menu part  */}
        {/* <div className="menu-link" >
          <h2>Doctors Appointment</h2>
        </div> */}
      </nav>
      {/* Hero Section Starts here */}
      <div className="Doc-flip-cards">
        {/* First Card */}
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={th} alt="" class="avtar mb-4" />
            </div>
            <div class="flip-card-back">
              <h1>Dr. Vedika Kabra </h1>
              <p>Psychologist</p>
              <a
                href="https://wa.me/+919307243657?text= Hello Doctor I Want To Book A Therapy Call !!!"
                target="blank"
              >
                <img
                  src="pngwing.com.png"
                  className="whatsapp"
                  alt="Avatar"
                ></img>
              </a>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
               <img src={th} alt="" class="avtar mb-4" />
            </div>
            <div class="flip-card-back">
              <h1>Dr. Archana</h1>
              <p>Psychologist</p>
              <a href="https://wa.me/+919923206671" target="blank">
                <img
                  src="pngwing.com.png"
                  className="whatsapp"
                  alt="Avatar"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Counsulting;
