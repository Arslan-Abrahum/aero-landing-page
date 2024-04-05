import React from "react";
import { Container } from "react-bootstrap";
import Img1 from "./imges/img1-bottom-aero1.webp";
import Img2 from "./imges/img2-bottom-aero1.webp";
import { FaAngleRight } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";

export default function Section4() {
  return (
    <div>
      <Container
        fluid
        className="section4 m-0 d-flex flex-column align-items-center justify-content-center"
      >
        <div className="d-flex flex-wrap align-items-center justify-content-center col-12">
          <div className="sec4-imgbox col-11 col-md-6 col-lg-6 col-xl-6">
            <img src={Img1} alt="" />
            <div className="sec4-head1 d-flex flex-column align-items-center justify-content-center">
              <p className="p1 p-0 m-0">NEW ARRIVALS</p>
              <p className="p2 p-0 m-0">GOOD HELP & GUARD</p>
              <p className="p1 p-0 m-0">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros
              </p>
              <button className="btn1">
                VIEW COLLECTION <FaAngleRight className="icon1" />
              </button>
            </div>
          </div>
          <div className="sec4-imgbox col-11 col-md-6 col-lg-6 col-xl-6">
            <img src={Img2} alt="" />
            <div className="sec4-head1 d-flex flex-column align-items-center justify-content-center">
              <p className="p1 p-0 m-0">BESTSELLER PRODUCTS</p>
              <p className="p2 p-0 m-0">VEHICLES OFF WEEK</p>
              <p className="p1 p-0 m-0">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros
              </p>
              <button className="btn1">
                VIEW COLLECTION <FaAngleRight className="icon1" />
              </button>
            </div>
          </div>
        </div>
        <div className="sec4-container col-12 col-xl-10 d-flex flex-wrap">
          <div className="sec4-box col-11 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
            <div className="sec4-box1 col-11">
              <FaRocket className="fa-icon" />
              <p className="p1">FREE DELIEVRY</p>
              <p className="p2">
                Nam liber tempor cum soluta nobis eleifend option congue.
              </p>
            </div>
          </div>
          <div className="sec4-box col-11 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
            <div className="sec4-box1 col-11">
            <FaMoneyBillAlt className="fa-icon" />
              <p className="p1">FREE DELIEVRY</p>
              <p className="p2">
                Nam liber tempor cum soluta nobis eleifend option congue.
              </p>
            </div>
          </div>
          <div className="sec4-box col-11 col-md-4 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center">
            <div className="sec4-box1 col-11">
            <IoHeadset className="fa-icon" />
              <p className="p1">FREE DELIEVRY</p>
              <p className="p2">
                Nam liber tempor cum soluta nobis eleifend option congue.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
