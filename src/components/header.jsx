import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">Ball on Plate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Graphs</Nav.Link>
            <Nav.Link href="#features">Config</Nav.Link>
            <Nav.Link href="#pricing">Placeholder</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;