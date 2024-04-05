import React from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
import Img1 from "./imges/br-02.png"
import Img2 from "./imges/br-03.png"
import Img3 from "./imges/br-04.png"
import Img4 from "./imges/br-05.png"
import Img5 from "./imges/br-06.png"
import Img6 from "./imges/panaflex1.jpg"
import Img7 from "./imges/panaflex2.jpg"
import Img8 from "./imges/panaflex3.jpg"
import Img9 from "./imges/panaflex4.jpg"
import Img10 from "./imges/panaflex5.jpg"


export default function Section5() {
  return (
    <div>
      <Container fluid className="m-0 section5 d-flex flex-column align-items-center justify-content-center">
        <div className="sec2-headbox d-flex align-items-center justify-content-evenly">
          <FaStar className="text-light fs-5" />
          <p className="sec2-p1 m-0">LOGO BRANDS</p>
          <FaStar className="text-light fs-5" />
        </div>
        <div className="sec5-container col-12 col-lg-12 col-xl-10 d-flex align-items-center justify-content-evenly">
            <img src={Img1} className="col-3 col-md-2 col-lg-2 col-xl-2" alt="" />
            <img src={Img2} className="col-3 col-md-2 col-lg-2 col-xl-2" alt="" />
            <img src={Img3} className="col-3 col-md-2 col-lg-2 col-xl-2 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex" alt="" />
            <img src={Img4} className="col-2 d-none d-md-flex d-lg-flex d-xl-flex" alt="" />
            <img src={Img5} className="col-2 d-none d-lg-flex d-xl-flex" alt="" />
        </div>
        <div className="sec2-headbox mt-5 d-flex align-items-center justify-content-evenly">
          <FaStar className="text-light fs-5" />
          <p className="sec2-p1 m-0">AERO INSTAGRAM</p>
          <FaStar className="text-light fs-5" />
        </div>
        <div className="sec5-container col-12 col-lg-12 col-xl-10 d-flex align-items-center justify-content-center      ">
            <img src={Img6} className="col-3 col-md-2 col-lg-2 col-xl-2" alt="" />
            <img src={Img7} className="col-3 col-md-2 col-lg-2 col-xl-2" alt="" />
            <img src={Img8} className="col-3 col-md-2 col-lg-2 col-xl-2 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex" alt="" />
            <img src={Img9} className="col-2 d-none d-md-flex d-lg-flex d-xl-flex" alt="" />
            <img src={Img10} className="col-2 d-none d-lg-flex d-xl-flex" alt="" />
        </div>
        <div className="sec5-container2 col-12 d-flex flex-column align-items-center justify-content-center">
            <p style={{fontSize:"13px", color: "#e52e2d" , fontWeight:"500", textAlign:"center"}}>OUR NEWS</p>
            <p style={{fontSize:"20px", color: "white" , fontWeight:"500"}}>SIGN UP FOR LATEST NEWS</p>
            <p style={{fontSize:"13px", color: "rgb(90, 96, 105)" , fontWeight:"400" ,textAlign:"center"}}>Subscribe to our email list and stay up-to-date with all our anwesome releases and latest updates.</p>
            <input type="text" className="input1 col-10 col-lg-5 col-xl-5" placeholder="Enter your email address" />
        </div>
      </Container>
    </div>
  );
}
