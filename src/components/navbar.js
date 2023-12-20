import React from 'react'
// import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.png";



const navbar = () => {
  return (
    <div class="hero1 col-lg-12 col-sm-6 col-xs-3">
      <nav class="navbar  navbar1 navbar-expand-lg mx-3">
        <div class="container-fluid px-5">
          <a class="navbar-brand Nlogo" href="/Home">
            {" "}
            <img src={logo} alt="" class="App-logo mb-4" />
          </a>

          <a class="navbar-brand" href="/"></a>

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
                <a class="nav-a active" aria-current="page" href="/Counsulting">
                  Dr Consulting
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-a active" aria-current="page" href="/futurescope">
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
  );
}

export default navbar
