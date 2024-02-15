import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from 'react-bootstrap/NavbarBrand';
import { Link } from "react-router-dom";

const Header = () => {
  const url = window.location.href;
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Brand as={Link} to="/users">Expense Manager</Brand>
          <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/users" className={ url.includes("users") ?  'active' : ''}>Users</Nav.Link>
            <Nav.Link as={Link} to="/charts" className={ url.includes("charts") ?  'active' : ''}>Charts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;