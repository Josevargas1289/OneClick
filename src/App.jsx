import { Route, Routes } from "react-router-dom";
import Nabvar from "./components/navbar/Nabvar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Desarrollo from "./pages/DesarrolloWeb";
import Soporte from "./pages/Soporte";
import Mantenimiento from "./pages/Mantenimiento";
import Contacto from "./components/contacto/Contacto";
import { useState } from "react";


function App() {
 
  const [message, setMessage] = useState(" ")

  console.log(message);

  return (
    <div className=" overflow-y-hidden">
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/desarrollo" element={<Desarrollo setMessage ={setMessage}  />} />
        <Route path="/soporte" element={<Soporte setMessage ={setMessage} />} />
        <Route path="/mantenimiento" element={<Mantenimiento setMessage ={setMessage} />} />
        <Route path="/contacto" element={<Contacto message ={message} setMessage = {setMessage}  />} />
      </Routes>
    </div>
  );
}

export default App;
