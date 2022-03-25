import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";

function NavbarMenu() {
    return (
        <Navbar bg="back" expand="lg">
            <Container className="main-nav">
                <Link href='/'>
                    <Navbar.Brand href="#"><h2>Red Hot</h2></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Link href='/'>
                    <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                </Link>
                <Link href='/about'>
                    <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                </Link>
                <NavDropdown title="Dropdownxx" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider className="line-divider"/>
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
  
  export default NavbarMenu;