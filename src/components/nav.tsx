import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { LogOut } from '../features/Logout';
import { LoginToken } from '../variable/token';
export const NavComponent = () => {
  const [loginStatus, setloginStatus] = useState(false);
  useEffect(() => {
    if (LoginToken !== undefined) setloginStatus(true);
  }, [LoginToken]);

  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ULS3</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        {loginStatus &&
                            <Nav.Link eventKey={2} href="/login" onClick={LogOut}>
                                로그 아웃
                            </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

  );
};
