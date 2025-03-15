import React, { useContext } from "react";
import { MessContext } from "./MessContext";
import { Row, Col, Card } from "react-bootstrap"; 

const MessProvider = () => {
  const {messages} = useContext(MessContext);

  return (
    <Row>
      {messages.map((item, index) => (
        <Col md={4} key={index}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><strong>{item.contacto}</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

  );
};

export default MessProvider;