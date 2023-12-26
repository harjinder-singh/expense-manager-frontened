import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from 'react-bootstrap/NavbarBrand';
import Link from 'react-bootstrap/NavLink'; 

const Header = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Brand href="#home">Expense Manager</Brand>
          <Nav className="justify-content-end">
            <Link href="/accounts" className='active'>Accounts</Link>
            <Link href="/transactions">Transactions</Link>
            <Link href="#home">Login</Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;