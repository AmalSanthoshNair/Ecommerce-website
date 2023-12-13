import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signin() {
  return (
    <div className='grid-container p-5 m-5' style={{width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr"}}>
    <div className='grid-child p-5 m-5' style={{width:"50%", height:"100%",}}>
        <a class="navbar-brand" href="#"><h1 style={{color:'blue', fontFamily:"fantacy", textShadow:"2px 2px blue"}}>
            Onetouch<br></br></h1>
            <h2><small class="text-body-secondary">Onetouch helps you explore Shoping</small></h2>
        </a>
    </div>
    <div className='grid-child' style={{float:"right", width:"50%", height:"100%",}}>
    <Card className='card shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '25rem', height:"20rem" }}>
      <Card.Body>
        {/* <Card.Title>Sign In</Card.Title> */}
        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail" required>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Button variant="primary" type="login" style={{width:"21rem", height:"2.5rem"}}>Log In</Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <center><Card.Link href="#">Forgotten Password?</Card.Link></center>
            </Form.Group><hr></hr>

            <Form.Group className="mb-3">
                <center><Button type="create" style={{width:"15rem", height:"2.5rem", backgroundColor:"green"}}>Create new account</Button></center>
            </Form.Group>

        </Form>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Signin;