import React from 'react'
// import { a } from 'react-router-dom';

const footer = () => {
  return (
    <div>
      {" "}
      <footer id="footer" class="col-lg-12 col-sm-6 col-xs-3">
        <div class="container">
          <div id="div1" >
            {/* <img src={logo} className="App-logo mt-1" alt="logo" /> */}
            THE FUTURE OF AI TECHNOLOGY IN MENTAL HEALTH IS NOT ABOUT REPLACING
             HUMANS BUT IT'S ABOUT SUPPORTING THEM.
          </div>
          <div class="vertical"></div>
          <div>
            {/* <!-- Footer-as --> */}
            <ul id="ul2">
              <li>
                <a class="service" href="/about">
                  <i aria-hidden="true"></i> About us
                </a>
              </li>
              <li>
                <a class="service" href="#services">
                  <i aria-hidden="true"></i> Our Services
                </a>
              </li>
              <li>
                <a class="service" href="/Collaboration">
                  <i aria-hidden="true"></i>Our Collaboration{" "}
                </a>
              </li>
              <li>
                <a class="service" href="/contact">
                  <i aria-hidden="true"></i> Contact Us{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Footer-as --> */}
          <ul id="ul4">
            <li>
              <strong>
                {/* <!-- Footer Header --> */}
                <p class="line">Reach with us</p>
              </strong>
            </li>
            <li class="fc">
              <i class="fa fa-phone" aria-hidden="true"></i> +9503868069
            </li>
            <li class="fc">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              neuropal.io@gmail.com
            </li>
            <li class="fc">
              <i class="fa fa-map-marker" aria-hidden="true"></i> PL N14 Patil
              Colony Lane No.4 Collage Road Nasik Nashik 422005 In
              Maharashtra,India.
            </li>
          </ul>
          <div>
            {/* <!-- social media as --> */}
            <ul id="ul5">
              <li>
                <a href="https://instagram.com/neuropal.in">
                  <i class="fa fa-instagram fa"></i>
                </a>
              </li>

              <li>
                <a href="facebook">
                  <i class="fa fa-facebook fa"></i>
                </a>
              </li>

              <li>
                <a href="https://wa.me/+9503868069?text">
                  <i class="fa fa-whatsapp fa"></i>
                </a>
              </li>
              <li>
                <a href="https://linkdin.com/neuropal.in">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="copy">
          Copyright © 2023 Neuropal All rights reserved
          <h6>CEREVTAR TECH PRIVATE LIMITED</h6>
        </div>
      </footer>
    </div>
  );
}

export default footer



//  {/* 
//       <Card className="text-center" id="footer">
//         <Card.Header>
//           {" "}
//           THE FUTURE OF AI TECHNOLOGY IN MENTAL HEALTH IS NOT ABOUT REPLACING
//           HUMANS BUT IT'S ABOUT SUPPORTING THEM.
//         </Card.Header>
//         <Card.Body>
//           <Card.Title>Join us in our journey</Card.Title>
//           <Card.Text class="text ">
//             {" "}
//             Witness our journey and follow us href get the latest updates and
//             events news.
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer className="text-muted">
//           {" "}
//           © 2023 Copyright : All Rights Are Reserved
//         </Card.Footer>
//       </Card> */}