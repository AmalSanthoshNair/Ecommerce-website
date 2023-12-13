import React from 'react'

// function Slide() {
//   return (
//     <div>
//         <div id="carouselExampleIndicators" class="carousel slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src={require("./slide_images/elect.jpeg")} class="d-block w-100" alt="..."></img>
//     </div>
//     <div class="carousel-item">
//       <img src={require("./slide_images/gro.jpeg")} class="d-block w-100" alt="..."></img>
//     </div>
//     <div class="carousel-item">
//       <img src={require("./slide_images/mobil.jpg")} class="d-block w-100" alt="..."></img>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     </div>
//   )
// }
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={require("./slide_images/elect.png")} class="d-block w-100" alt="..." style={{height: '18rem'}}></img>
        <Carousel.Caption>
          {/* <h3 style={{color:"red"}}>Electronics</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={require("./slide_images/gro.png")} class="d-block w-100" alt="..." style={{height: '18rem'}}></img>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={require("./slide_images/mobil.jpg")} class="d-block w-100" alt="..." style={{height: '18rem'}}></img>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide