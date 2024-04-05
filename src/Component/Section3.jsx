import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Img1 from "./imges/testimor1-64x64_64x64.png"
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";

export default function Section3() {
  return (
    <div>
      <Container fluid className=" m-0 sec3-bg d-flex align-items-center justify-content-center">
        <Carousel className="col-10">
          <Carousel.Item>
            <div className="slide1 col-12 d-flex flex-column align-items-center justify-content-center">
              <img src={Img1} className="sec3-img" alt="" />
              <div className="d-flex align-items-center justify-content-center">
                <RiDoubleQuotesL className="sec3-quote1" />
                <p className="sec3-p1 col-7">Mauris blandit, metus a venenatis lacinia, felis enim tincidunt est, condimentum vulputate orci augue eu metus. Fusce dictum, nisi et semper ultricies, felis tortor blandit odio, egestas consequat pur..</p>
                <RiDoubleQuotesR className="sec3-quote1" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide1 col-12 d-flex flex-column align-items-center justify-content-center">
              <img src={Img1} className="sec3-img" alt="" />
              <div className="d-flex align-items-center justify-content-center">
                <RiDoubleQuotesL className="sec3-quote1" />
                <p className="sec3-p1 col-7">Mauris blandit, metus a venenatis lacinia, felis enim tincidunt est, condimentum vulputate orci augue eu metus. Fusce dictum, nisi et semper ultricies, felis tortor blandit odio, egestas consequat pur..</p>
                <RiDoubleQuotesR className="sec3-quote1" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
