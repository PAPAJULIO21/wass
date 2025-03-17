import './App.css';
import { WeatherProvider } from './componentes/WeatherProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Inicio from './componentes/Inicio';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './componentes/NavBar';
import Tabla from './componentes/Tabla';


function App() {
  return (
    <>
    <WeatherProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto/:ciudad" element={<Tabla />} />
        </Routes>
      </Router>
    </WeatherProvider>
    </>
  );
}

export default App;
