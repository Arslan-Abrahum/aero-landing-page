import React from "react";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
import Img1 from "./imges/1-600x600_400x400_crop_center.jpg";
import Img2 from "./imges/2-600x600_400x400_crop_center.jpg";
import Img3 from "./imges/5-600x600_6bffe399-97df-4b21-9769-1ce9cd38e92b_400x400_crop_center.jpg";
export default function Section2() {
  return (
    <div>
      <Container
        fluid
        className=" m-0 section2 d-flex flex-column align-items-center justify-content-center"
      >
        <div className="sec2-headbox d-flex align-items-center justify-content-evenly">
          <FaStar className="text-light fs-5" />
          <p className="sec2-p1 m-0">FEATURED PRODUCTS</p>
          <FaStar className="text-light fs-5" />
        </div>
        <div className="sec2-container d-flex flex-wrap justify-content-around align-items-center col-12 col-xl-10">
          <div className="sec2-box col-10 col-sm-6 col-md-5 mt-5 mt-xl-0 mt-lg-0 col-lg-3 col-xl-3 d-flex flex-column align-items-center justify-content-center">
            <img src={Img1} className="col-12 h-50" alt="" />
            <div className="sec2-stars">
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
            </div>
            <p className="sec2-p2">AOPO DESIGNS WOOLRICH KLETTERSACK</p>
            <p className="sec2-p3 m-0">Born to be worn. Clip on the worlds most wearable music player and take up to 240 songs with you anywhere. Choose from five colors including four new hues to...</p>
            <p className="sec2-p4 m-0">$150.00</p>
            <button className="addtocart">ADD TO CART</button>
          </div>
          <div className="sec2-box col-10 col-sm-6 mt-5 mt-xl-0 mt-lg-0 col-md-5 col-lg-3 col-xl-3  d-flex flex-column align-items-center justify-content-center">
          <img src={Img2} className="col-12 h-50" alt="" />
            <div className="sec2-stars">
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
            </div>
            <p className="sec2-p2">AOPO DESIGNS WOOLRICH KLETTERSACK</p>
            <p className="sec2-p3 m-0">Born to be worn. Clip on the worlds most wearable music player and take up to 240 songs with you anywhere. Choose from five colors including four new hues to...</p>
            <p className="sec2-p4 m-0">$150.00</p>
            <button className="addtocart">ADD TO CART</button>
          </div>
          <div className="sec2-box col-10 col-sm-6 mt-5 mt-xl-0 mt-lg-0 col-md-5 col-lg-3 col-xl-3 d-flex flex-column align-items-center justify-content-center">
          <img src={Img3} className="col-12 h-50" alt="" />
            <div className="sec2-stars">
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
              <FaStar style={{color: "gold"}} />
            </div>
            <p className="sec2-p2">AOPO DESIGNS WOOLRICH KLETTERSACK</p>
            <p className="sec2-p3 m-0">Born to be worn. Clip on the worlds most wearable music player and take up to 240 songs with you anywhere. Choose from five colors including four new hues to...</p>
            <p className="sec2-p4 m-0">$150.00</p>
            <button className="addtocart">ADD TO CART</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
