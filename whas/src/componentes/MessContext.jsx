import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const MessContext = createContext();

// Provider que carga el JSON y provee los datos a sus hijos
export const MessProvider = ({ children }) => {
  const [messages, setMessages] = useState({}); // Inicializamos como objeto

  useEffect(() => {
    fetch("/mensajes.json")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error al cargar mensajes.json:", error));
  }, []);

  return (
    <MessContext.Provider value={{ messages }}>
      {children}
    </MessContext.Provider>
  );
};

