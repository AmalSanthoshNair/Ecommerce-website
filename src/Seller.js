import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



function Seller() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <div className='p-5 m-5'><h1>Sell Online with Onetouch</h1></div>
    <div className='p-5 m-5'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            // defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            // defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
    <div style={{backgroundColor:"aquamarine"}}><br></br>
    <center><div><h1>Why sell on Onetouch?</h1></div></center><br></br><br></br>
    <div className='container p-2' style={{display:'grid', gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        
        <div className='child-container p-3'>
        <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./seller/1.png`)} alt="images"></img>
            <h5>Sell Across India</h5>
            <p>Reach over 50 crore+ customers across 27000+ pincodes</p>
        </div>
            
        <div className='child-container p-3'>
        <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./seller/2.png`)} alt="images"></img>
            <h5>Higher Profits</h5>
            <p>With 0% commission* , you take 100% profits with you</p>
        </div>
            
        <div className='child-container p-3'>
        <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./seller/3.png`)} alt="images"></img>
            <h5>Account Management</h5>
            <p>Our Dedicated managers will help your business on Flipkart</p>
        </div>

        <div className='child-container p-3'>
        <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./seller/4.png`)} alt="images"></img>
            <h5>Lower Return Charges</h5>
            <p>With our flat and low return charges, ship your products stress-free</p>
        </div>


        <div className='child-container p-3'>
        <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./seller/5.png`)} alt="images"></img>
            <h5>Simple Pricing Calculator</h5>
            <p>Use our simple pricing calculator to decide the best and competitive selling price for your product</p>
        </div>
            
        <div className='child-container p-3'>
        <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./seller/6.png`)} alt="images"></img>
            <h5>24x7 Seller Support</h5>
            <p>All your queries and issues are answered by our dedicated Seller Support Team</p>
        </div>
            
        <div className='child-container p-3'>
        <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./seller/7.png`)} alt="images"></img>
            <h5>Fast & Regular Payments</h5>
            <p>Get payments as fast as 7-10 days from the date of dispatch</p>
        </div>

        <div className='child-container p-3'>
        <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./seller/8.png`)} alt="images"></img>
            <h5>Business on the go</h5>
            <p>Download our Onetouch Seller App to manage your business anywhere, anytime</p>
        </div>
    </div>
    </div>
    </>
  );
}

export default Seller;