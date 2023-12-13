import Nav from 'react-bootstrap/Nav';
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Mobiles from './Mobiles';

function Navbar1() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element = {<Mobiles/>}></Route>
    <Route path="mobiles" element = {<Mobiles/>}></Route>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
          <Link to="/Mobiles">Mobiles</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar1;