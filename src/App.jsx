import { Route, Routes } from "react-router-dom";
import Nabvar from "./components/navbar/Nabvar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Desarrollo from "./pages/DesarrolloWeb";
import DesarrolloMovil from "./pages/DesarrolloMovil";
import Branding from "./pages/Branding";
import Contacto from "./components/contacto/Contacto";


function App() {
  return (
    <div className=" overflow-y-hidden">
      <Nabvar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/desarrollo" element={<Desarrollo />} />
        <Route path="/desarrolloMovil" element={<DesarrolloMovil />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
    </div>
  );
}

export default App;
