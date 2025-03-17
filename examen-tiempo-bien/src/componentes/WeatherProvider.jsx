import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const WeatherContext = createContext();

// Provider que carga el JSON y provee los datos a sus hijos
export const WeatherProvider = ({ children }) => {
  const [tiempo, setTiempo] = useState([]); // Inicializamos como objeto

  useEffect(() => {
    fetch("/weather.json")
      .then((response) => response.json())
      .then((data) => setTiempo(data.ciudades))
      .catch((error) => console.error("Error al cargar mensajes.json:", error));
  }, []);

  return (
    <WeatherContext.Provider value={{ tiempo }}>
      {children}
    </WeatherContext.Provider>
  );
};

