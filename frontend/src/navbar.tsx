import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (<Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/"> LunJon </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/*<Nav.Link href="/somepath">Link</Nav.Link>*/}
          <NavDropdown title="Problem Solving" id="basic-nav-dropdown">
            <NavDropdown.Item href="/problems/stats">Stats</NavDropdown.Item>
            <NavDropdown.Item href="/problems">List</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>);
}

export default NavBar;
