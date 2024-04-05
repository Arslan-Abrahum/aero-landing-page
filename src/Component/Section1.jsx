import React from "react";
import { Container } from "react-bootstrap";
import Img1 from "./imges/img1.png";
import Img2 from "./imges/img2.png";
import Img3 from "./imges/img1-top-aero1.jpg";
import Img4 from "./imges/img2-top-aero1.jpg";
import Img5 from "./imges/img3-top-aero1.jpg";

export default function Section1() {
  return (
    <div>
      <Container
        fluid
        className="p-1 m-0 section1 d-flex flex-column align-items-center justify-content-center"
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "50px", position: "relative" }}
        >
          <h1 className="sec1-head">HISTORY</h1>
          <p className="sec1-head2">WELCOME TO</p>
          <p className="sec1-head3">AERO CAR STORE</p>
        </div>
        <div className="sec1-box col-12 col-xl-11 d-flex flex-wrap align-items-center justify-content-center">
          <img
            src={Img1}
            className="col-11 col-md-6 col-lg-6 col-xl-6 sec1-img"
            alt=""
          />
          <div className="sec1-headbox col-11 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center p-3 p-md-5 p-lg-5 p-xl-5">
            <p className="sec1-p1">MEET OUR</p>
            <p className="sec1-p2">CAR CLUB SINCE 1892</p>
            <p className="sec1-p3">CUSTOM AND CLUB</p>
            <p className="sec1-p4">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram, anteposuerit litterarum formas
              humanitatis per seacula quarta decima et quinta decima.
            </p>
            <p className="sec1-p4">
              Eodem modo typi, qui nunc nobis videntur parum clari, fiant
              sollemnes in futurum.
            </p>
            <p className="sec1-p5">JOHN DOE - CEO AERO</p>
            <img src={Img2} className="sec1-img2" alt="" />
          </div>
        </div>
        <div className="sec1-container col-12 col-xl-10 d-flex flex-wrap align-items-center justify-content-around">
          <div className="sec1-imgbox col-12 col-lg-4 col-md-4 col-xl-4 d-flex align-items-center justify-content-center">
            <img src={Img3} alt="" />
            <div className="sec1-text">
                <p style={{fontSize:"15px", fontWeight:"700", color:"white", lineHeight: "18px" , margin:"0px"}}>NEW COLLECTION</p>
                <p style={{fontSize:"20px", fontWeight:"700", color:"#F7DE00", lineHeight: "18px",margin:"0px"}}>NEW TRENDING 2017</p>
                <p style={{fontSize:"13px", fontWeight:"700", color:"white"}}>SAVE UPTO 20% OFF</p>
            </div>
          </div>
          <div className="sec1-imgbox col-12 col-lg-4 col-md-4 col-xl-4 d-flex align-items-center justify-content-center">
            <img src={Img4} alt="" />
            <div className="sec1-text">
                <p style={{fontSize:"15px", fontWeight:"700", color:"white", lineHeight: "18px" , margin:"0px"}}>NEW COLLECTION</p>
                <p style={{fontSize:"20px", fontWeight:"700", color:"#F7DE00", lineHeight: "18px",margin:"0px"}}>NEW TRENDING 2017</p>
                <p style={{fontSize:"13px", fontWeight:"700", color:"white"}}>SAVE UPTO 20% OFF</p>
            </div>
          </div>
          <div className="sec1-imgbox col-12 col-lg-4 col-md-4 col-xl-4 d-flex align-items-center justify-content-center">
            <img src={Img5} alt="" />
            <div className="sec1-text">
                <p style={{fontSize:"15px", fontWeight:"700", color:"white", lineHeight: "18px" , margin:"0px"}}>NEW COLLECTION</p>
                <p style={{fontSize:"20px", fontWeight:"700", color:"#F7DE00", lineHeight: "18px",margin:"0px"}}>NEW TRENDING 2017</p>
                <p style={{fontSize:"13px", fontWeight:"700", color:"white"}}>SAVE UPTO 20% OFF</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
