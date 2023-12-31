import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from 'react-bootstrap/NavbarBrand';
import Link from 'react-bootstrap/NavLink'; 

const Header = () => {
  const url = window.location.href;
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Brand href="#home">Expense Manager</Brand>
          <Nav className="justify-content-end">
            <Link href="/accounts" className={ url.includes("accounts") ?  'active' : ''}>Accounts</Link>
            <Link href="/charts" className={ url.includes("charts") ?  'active' : ''}>Charts</Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;