import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

export default function Header() {
  return (
    <div>
        {/* <h2 style={{color:'blue'}}>
            Onetouch<br></br>
            <small class="text-body-secondary">Explore Shoping</small>
        </h2>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav> */}

        {/* <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand"><h2 style={{color:'blue'}}>
            Onetouch<br></br>
            <small class="text-body-secondary">Explore Shoping</small>
        </h2></a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
        </nav> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#"><h2 style={{color:'blue'}}>
            Onetouch<br></br>
            <small class="text-body-secondary">Explore Shoping</small>
        </h2></a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><h3>Become a Seller</h3></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">

          <li class="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><h3>Sign in</h3></a>
    <ul className="dropdown-menu">
        <DropdownItem text = {"New Customer?"}/>
        <DropdownItem text = {"My Profile"}/>
        <DropdownItem text = {"Orders"}/>
        <DropdownItem text = {"Wishlist"}/>

    
    </ul>
</li>
          
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><h3>Cart</h3></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}


function DropdownItem(props){
    return(
        <li className='dropdownItem'>
        <a>{props.text}</a>
        </li>
    )
}