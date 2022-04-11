import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

//Estilos
import './styles.css';

const NavBar = () => {
    return (
        <Navbar variant="dark" expand="lg" className="margen navBar">
            <Container>
                <Navbar.Brand className="titulo"><span class="titulo2">S</span>uper<span class="titulo2">H</span>eroes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className="enlacesNav" to='/home' style={{ textDecoration: "none"}}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="enlacesNav" to='/crearHeroe' style={{ textDecoration: "none" }}>Crear Heroe</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavBar