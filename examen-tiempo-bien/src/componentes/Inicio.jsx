import React, { useContext, useState, useEffect } from "react";
import { WeatherContext } from "./WeatherProvider";
import { Col, Card, Carousel, Button } from "react-bootstrap"; 

function Inicio() {
    const { tiempo } = useContext(WeatherContext);

    // Asegurar que tiempo tenga datos antes de acceder a tiempo[0]
    const [ciudad, setCiudad] = useState(null);

    useEffect(() => {
        if (tiempo.length > 0) {
            setCiudad(tiempo[0]); // Solo establece si hay datos
        }
    }, [tiempo]); 

    return (
    <>
      <Col md={6} style={{ alignItems: "center" }}>
        {ciudad && ciudad.fechas ? (  // Verifica que ciudad y fechas existan
          <Carousel>
            {ciudad.fechas.map((fecha, index) => (
              <Carousel.Item key={index}>  
                <Card className="mb-4">
                  <Card.Img variant="auto" src={ciudad.nombre +".jpg"}></Card.Img>
                  <Card.Body>
                    <Card.Title><strong>Fecha: {fecha.fecha}</strong></Card.Title> 
                    <p>Ciudad: {ciudad.nombre}</p>
                    <p>Temperatura Máxima: {fecha.temperatura.maxima}°C</p>
                    <p>Temperatura Mínima: {fecha.temperatura.minima}°C</p>
                    <p>Viento: {fecha.viento.velocidad} km/h ({fecha.viento.direccion})</p>
                    <p>Lluvia: {fecha.lluvia} mm</p>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>Selecciona una ciudad para ver su clima</p>
        )}
      </Col>

      <div>
        {tiempo.map((ciudadItem, id) => (
          <Card key={id} className="mb-3">
            <Card.Body>
                <Card.Title>{ciudadItem.nombre}</Card.Title>
                <Button variant="primary" onClick={() => setCiudad(ciudadItem)}>Seleccionar</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Inicio;