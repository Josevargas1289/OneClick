import "animate.css";
import { useNavigate } from "react-router-dom";
import Desarrollo from "../components/servicios/Desarrollo";
import { AlertOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const DesarrolloSoftware = ({ setMessage }) => {
 
  const navigate = useNavigate();
  
  const changeMessage = () => {
    setMessage(
      "Estoy interesado en desarrollar un sitio web para mi empresa. ¿Podríamos discutir más detalles y posiblemente obtener una cotización?"
    );
    gocontact();
  };

  

  const gocontact = () => {
    navigate("/contacto");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center  font-roboto m-2   ">
      <Desarrollo />
      <FloatButton
        onClick={changeMessage}
        tooltip={<div className=" text-2xl">Contratar este servicio</div>}
        icon={<AlertOutlined className=" text-red-color" />}
        type="primary"
        className="animate__animated animate__infinite animate__pulse animate__fadeIn "
        style={{
          width: "60px",
          height: "60px",
          right: "20px",
          bottom: "120px",
        }}
      />
    </div>
  );
};

export default DesarrolloSoftware;
