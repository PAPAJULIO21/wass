import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MessProvider } from "./componentes/MessContext";
import MessageList from "./componentes/MessageList"; // Cambiado a MessProvider
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componentes/NavBar";
import Mensajes from "./componentes/Mensajes";

function App() {
  return (
    <MessProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<MessageList />} />
          <Route path="contacto/:nombre" element={<Mensajes />} />
        </Routes>
      </Router>
    </MessProvider>
  );
}

export default App;