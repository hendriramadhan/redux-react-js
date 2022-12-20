import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Tes Redux</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end text-start">
          <Nav className="gap-2">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/component/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
