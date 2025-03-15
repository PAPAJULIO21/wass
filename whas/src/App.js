import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router"; // Usa Routes en lugar de Switch
import  MessProvider  from "./componentes/MessProvider";
import { MessContext } from "./componentes/MessContext";

function App() {
  return (
    <BrowserRouter>
  
    <MessContext> 
   
        <Routes>
          <Route path="/" element={<MessProvider />} /> 
        </Routes>
      
    </MessContext>
    </BrowserRouter>
  );
}

export default App;