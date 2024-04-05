import React from 'react'
import { Container } from "react-bootstrap";
import Img1 from "./imges/Screenshot 2024-01-22 180750.png"
export default function Footer() {
  return (
    <div>
      <Container fluid className='m-0 p-0 footer d-flex align-items-center justify-content-center'>
        <img src={Img1} className='col-10' alt="" />
      </Container>
    </div>
  )
}
