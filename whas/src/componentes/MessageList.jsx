import React, { useContext, useState } from "react";
import { MessContext } from "./MessContext";
import { Col, Card, Carousel, Button, Row } from "react-bootstrap"; 
import './MessProvider.css';

function MessageList() {
  const { messages } = useContext(MessContext);
  
  // Aseguramos que "chats" tenga un valor por defecto vacío si no existe
  const chats = messages?.chats || [];

  // Estado para la persona seleccionada
  const [persona, setPersona] = useState(chats.length > 0 ? chats[0] : null);

  // Handler para cambiar la persona al hacer clic en el botón
  const handlePersonaChange = (chat) => {
    setPersona(chat);  // Actualiza el estado "persona" con el objeto completo "chat"
  };

  return (
    <>
      <Col md={3} style={{alignItems: "center"}}>
        {/* Verifica si persona y persona.mensajes existen antes de renderizar el Carousel */}
        {persona && persona.mensajes && persona.mensajes.length > 0 ? (
          <Carousel >
            {persona.mensajes.map((chat, index) => (
              <Carousel.Item key={index} >  {/* Añadimos key a cada Carousel.Item */}
                <Card className="mb-4">
                  <Card.Img variant="top" src={chat.emisor + ".jpeg"} />
                  <Card.Body>
                    <Card.Title><strong>{chat.emisor}</strong></Card.Title>             
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          // Si persona.mensajes es null o está vacío, no se renderiza nada
          <p>No hay mensajes disponibles</p>
        )}
      </Col>

      {/* Verifica si hay chats disponibles */}
      {chats.length > 0 ? (
        chats.map((chat, index) => (
          <Card className="mb-4" key={index}>
            <Card.Body>
              <Card.Title><strong>{chat.contacto}</strong></Card.Title>
            </Card.Body>
            <Button variant="primary" onClick={() => handlePersonaChange(chat)} >Ver emisores</Button>
          </Card>
        ))
      ) : (
        <p className="text-center">No hay información disponible</p>
      )}
    </>
  );
}

export default MessageList;