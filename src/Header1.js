import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Signin from './Signin';



function Header1() {
  return (
  <div className='header'>
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
            <Nav.Link href="#action1">
                <h3>Become a Seller</h3>
            </Nav.Link>

            
            
            <Link to="Signin"><Nav.Link href="#action2">
            <h3>Sign In</h3>
            </Nav.Link></Link>

            <Routes>
            
            <Route path="signin" element = {<Signin/>}></Route>
            </Routes>


            
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
            <Nav.Link href="#action3"><h3>Cart</h3></Nav.Link>
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
    </BrowserRouter>
  </div>
  );
}

export default Header1;