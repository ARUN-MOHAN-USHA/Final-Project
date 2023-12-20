import React from 'react'
import '../styles/about.css'
// import tourImg10 from "../images/tour-img10.avif";
// import Carousel from 'react-bootstrap/Carousel';
// import { Col, Container, Row } from 'reactstrap';
// import { Container } from 'reactstrap';
// import Image from 'react-bootstrap/Image';
// import Card from 'react-bootstrap/Card';

const About = () => {
  return ( 
  //   <section>
  //   <Carousel data-bs-theme="white">
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="https://greatloveart.com/wp-content/uploads/2022/04/Beautiful-Places-In-The-World-wallpaper.jpg"
  //       alt="First slide"
  //     />
  //     <Carousel.Caption>
  //       <h1>About our Trips</h1>
  //        {/* <p>About our Trips</p> */}
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // </Carousel>
  // <section>
  //   <Container>
  //     <Col>
  //     <Row>
  //       <h1>Why you chouse us?</h1>
  //     </Row>
  //     </Col>
  //   </Container>
  // </section>
  // </section> 
  <>
  <div className='heading'>
     <h1>About us</h1>
     <p>Welcome to Around the world - Your Gateway to Unforgettable Journeys!</p>
  </div>
  <div className="container">
    <section className='about'>
      <div className="about-image">
      <img src="https://greatloveart.com/wp-content/uploads/2022/04/Beautiful-Places-In-The-World-wallpaper.jpg" alt="" />
      </div>
      <div className="about-content">
        <h2>Booking your dream vacation should be a joy, not a hassle.</h2>
        <p>At Around the world, we believe in the transformative power of travel. Our mission is to inspire and enable people to explore the world, discover new cultures, and create lasting memories. Whether you're a seasoned globetrotter or a first-time traveler, we're here to make your journey seamless, memorable, and filled with extraordinary experiences.</p>
          <a href="https://en.wikipedia.org/wiki/Tourism" className='read-more'>Read More</a>
      </div>
    </section>
  </div>
  </>
  ) 
}




export default About

