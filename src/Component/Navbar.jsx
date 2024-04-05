import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Img1 from "./imges/logo-aero1.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar p-0 m-0 d-flex align-items-center justify-content-center">
        <div className="navbox col-11 d-flex align-items-center justify-content-between h-100">
          <div className="d-flex justify-content-center align-items-center">
          <div className="menu-bar d-flex d-lg-none d-xl-none align-items-center justify-content-center">
            <FaBars className="bar fs-3"/>
          </div>
          <div className="logo-box">
            <img src={Img1} alt="" />
          </div>
          </div>
          <div className="list-box d-none d-lg-flex d-xl-flex">
            <Dropdown className="h-100 drop-main">
                <div className="drop-hover"></div>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                HOME
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CONTACT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">BLOGS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ARTICLE PAGE</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">FAQS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ABOUT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">SERVICES</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">GALLERY</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CART</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CHECKOUT</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">WISHLIST</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="h-100 drop-main">
                <div className="drop-hover"></div>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                SHOP
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CONTACT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">BLOGS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ARTICLE PAGE</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">FAQS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ABOUT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">SERVICES</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">GALLERY</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CART</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CHECKOUT</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">WISHLIST</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="h-100 drop-main">
                <div className="drop-hover"></div>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                FEATURED
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CONTACT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">BLOGS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ARTICLE PAGE</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">FAQS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ABOUT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">SERVICES</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">GALLERY</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CART</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CHECKOUT</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">WISHLIST</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="h-100 drop-main">
                <div className="drop-hover"></div>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                LAYOUTS
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CONTACT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">BLOGS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ARTICLE PAGE</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">FAQS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ABOUT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">SERVICES</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">GALLERY</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CART</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CHECKOUT</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">WISHLIST</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="h-100 drop-main">
                <div className="drop-hover"></div>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                PAGES
              </Dropdown.Toggle>

              <Dropdown.Menu className="pt-4 drop-menu1">
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CONTACT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">BLOGS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ARTICLE PAGE</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">FAQS</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">ABOUT US</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">SERVICES</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">GALLERY</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CART</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">CHECKOUT</Dropdown.Item>
                <Dropdown.Item className="drop-menu d-flex align-items-center justify-content-center">WISHLIST</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="iconbox d-flex justify-content-around align-items-center">
           <FaMagnifyingGlass className="text-light fs-4"/>  
           <TbGridDots className="text-light fs-4"/>  
           <HiOutlineShoppingBag className="text-light fs-4"/>  
          </div>
        </div>
      </nav>
    </div>
  );
}
