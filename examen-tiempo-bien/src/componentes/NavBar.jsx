import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router";
import { WeatherContext } from "./WeatherProvider";

function NavBar() {
  const { tiempo } = useContext(WeatherContext);  // Usamos el contexto aquí
  
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <DropdownButton id="dropdown-basic-button" title="Ciudades">
              {tiempo.map((item, index) => ( 
                // Navegar a la ruta correspondiente usando navigate
                <Dropdown.Item 
                  key={index} 
                  onClick={() => navigate(`/contacto/${item.nombre}`, { state: { item } })} 
                  
                >
                  {item.nombre}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;