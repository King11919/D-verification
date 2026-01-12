
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="/images/logo 1.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-bold"
            style={{ maxHeight: '100px',fontWeight: 'bold',fontSize: "150%", borderSpacing: '4rem',color: 'red' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Student</Nav.Link>
            <Nav.Link href="#action2">College</Nav.Link>
            <Nav.Link href="#action2">Company</Nav.Link>
           </Nav>
          <Form className="d-flex">
            
           <div className="contact tab">
            <img src="/images/contactus.svg" alt="logo" />
          </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;