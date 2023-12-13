// import Header from "./Header";
// import Header1 from "./Header1";
import "bootstrap/dist/css/bootstrap.css";

import Mobiles from "./Mobiles";
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Electronics from "./Electronics";
import Grocery from "./Grocery";
import Slide from "./Slide";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Navbar1 from "./Navbar1";
// import Signin from "./Signin";
import Signin from "./Signin";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Seller from "./Seller";
// import Logo from "./Logo";
// import image from "./logo/logo.png";




export default function App() {
  return (
    <>
    <div className="App">
    {/* <Header/> */}
    {/* <Header1/> */}
    {/* <Logo/> */}

    
    <BrowserRouter>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{backgroundColor:"aquamarine"}}>
        <Navbar.Brand href="#">
            <a class="navbar-brand" href="#"><h1 style={{color:'blue', fontFamily:"fantacy", textShadow:"2px 2px blue"}}>
            Onetouch<br></br></h1>
            <h2><small class="text-body-secondary">Explore Shoping</small></h2>
        </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="Seller"><Nav.Link href="#action1">
            <button type="button" class="btn btn m-2"><img className="p-2" style={{height:"3rem", width:"3rem"}} src= {require(`./img/seller.png`)} alt="images"></img>Become a Seller</button>
            </Nav.Link></Link>

            
            
            <Link to="Signin"><Nav.Link href="#action2">
            <button type="button" class="btn btn m-2"><img className="p-2" style={{height:"3rem", width:"3rem"}} src= {require(`./img/signin.png`)} alt="images"></img>Sign in</button>
            </Nav.Link></Link>

            {/* <Routes>
            
            <Route path="signin" element = {<Signin/>}></Route>
            </Routes> */}


            
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            {/* <NavDropdown title="Sign in" id="navbarScrollingDropdown" style={{fontSize: 25}}>
              <NavDropdown.Item href="#action3">Wishlist</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              My Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              New Customer?
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#action3">
            <button type="button" class="btn btn m-2"><img className="p-2" style={{height:"3rem", width:"3rem"}} src= {require(`./img/cart.png`)} alt="images"></img>Cart</button>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  



    {/* <Signin/> */}
    {/* <Navbar/> */}


    
    {/* <Navbar1/> */}
    <center><p>
    <Link to="/Mobiles"><button type="button" class="btn btn-dark m-2">Mobiles</button></Link>  
    <Link to="/Electronics"><button type="button" class="btn btn-dark m-2">Electronics</button></Link>  
    <Link to="/Grocery"><button type="button" class="btn btn-dark m-2">Grocery</button></Link>
    </p></center><br></br>
    <Routes>
      <Route path="signin" element = {<Signin/>}></Route>
      <Route path="seller" element = {<Seller/>}></Route>
      <Route path="mobiles" element = {<Mobiles/>}></Route>
      <Route path="electronics" element = {<Electronics/>}></Route>
      <Route path="grocery" element = {<Grocery/>}></Route>
    </Routes>
    <Slide/><br></br>
    <Routes>
    <Route index element = {<Mobiles/>}></Route>
    
    {/* <Route path="mobiles" element = {<Mobiles/>}></Route> */}

    {/* <Route index element = {<Electronics/>}></Route>
    <Route path="electronics" element = {<Electronics/>}></Route> */}

    {/* <Route index element = {<Grocery/>}></Route>
    <Route path="grocery" element = {<Grocery/>}></Route> */}

    </Routes>
    </BrowserRouter>
    
  
    
    </div>
    </>
  )
}
