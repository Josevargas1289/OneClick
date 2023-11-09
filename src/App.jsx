import { Route, Routes } from "react-router-dom";
import Nabvar from "./components/navbar/Nabvar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Desarrollo from "./pages/DesarrolloWeb";
import Soporte from "./pages/Soporte";
import Mantenimiento from "./pages/Mantenimiento";
import Contacto from "./components/contacto/Contacto";


function App() {
  return (
    <div className=" overflow-y-hidden">
      <Nabvar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/desarrollo" element={<Desarrollo />} />
        <Route path="/soporte" element={<Soporte/>} />
        <Route path="/mantenimiento" element={<Mantenimiento />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
    </div>
  );
}

export default App;
