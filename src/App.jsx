import { Route, Routes } from "react-router-dom";
import Nabvar from "./components/navbar/Nabvar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Desarrollo from "./pages/DesarrolloWeb";
import Soporte from "./pages/Soporte";
import Mantenimiento from "./pages/Mantenimiento";
import Contacto from "./components/contacto/Contacto";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Team from "./pages/Team";
import Clientes from "./pages/Clientes";


function App() {
 
  const [message, setMessage] = useState(" ")

  console.log(message);

  return (
    <div className=" overflow-y-hidden overflow-x-hidden">
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/desarrollo" element={<Desarrollo setMessage ={setMessage}  />} />
        <Route path="/soporte" element={<Soporte setMessage ={setMessage} />} />
        <Route path="/mantenimiento" element={<Mantenimiento setMessage ={setMessage} />} />
        <Route path="/contacto" element={<Contacto message ={message} setMessage = {setMessage}  />} />
       

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
