import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Mobiles from "./Mobiles";
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";

export default function Navbar() {
  return (
 <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Grocery</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Mobile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Fashion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Electronics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Appliances</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Travel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Beauty</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Toys</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">More</a>
        </li>

      </ul>
      
    </div>
    
  </div>
  
</nav>


    </div>
    
  )
}
