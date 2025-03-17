import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router";
import { MessContext } from './MessContext'; // Importa el contexto

function NavBar() {
  const { messages } = useContext(MessContext);  // Usamos el contexto aquí
  
  // Aseguramos que "chats" tenga un valor por defecto vacío si no existe
  const chats = messages?.chats || [];
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
              {chats.map((item, index) => ( 
                // Navegar a la ruta correspondiente usando navigate
                <Dropdown.Item 
                  key={index} 
                  onClick={() => navigate(`/contacto/${item.contacto}`, { state: { item } })} 
                  style={{ padding: "20px" }}
                >
                  {item.contacto}
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