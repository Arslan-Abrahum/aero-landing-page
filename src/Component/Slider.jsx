import React from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import {Container,Carousel} from 'react-bootstrap'
import Img1 from "./imges/slider1.jpg"
import Img2 from "./imges/slider2-aero1-1920x846_1920x846.progressive.jpg"
import Img3 from "./imges/slider3-aero1-1920x846_1920x846.progressive.jpg"

export default function Slider() {
  return (
    <Container fluid className='rel p-0 m-0'>
      <Carousel>
      <Carousel.Item>
        <img src={Img1} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img2} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img3} alt=''/>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}
