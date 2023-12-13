import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Logo() {
  return (
    <Container>
      <Row>
        {/* <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col> */}
        <Col xs={6} md={4}>
        {/* <img className="p-2" style={{height:"4rem", width:"4rem"}} src= {require(`./logo/logo.png`)} roundedCircle></img> */}
          <Image src={require(`./logo/logo.png`)} style={{height:"8rem", width:"8rem"}} roundedCircle />
        </Col>
        {/* <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col> */}
      </Row>
    </Container>
  );
}

export default Logo;