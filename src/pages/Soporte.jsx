import "animate.css";
import { useNavigate } from "react-router-dom";
import { AlertOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import SoporteService from "../components/servicios/Soporte";


const Soporte = ({ setMessage }) => {

  const navigate = useNavigate();

 

  const changeMessage = () => {
    setMessage("Necesito soporte técnico para resolver algunos problemas en mi sistema. ¿Pueden ayudarme a solucionarlos y proporcionar detalles sobre sus servicios de soporte");
    gocontact();
  };

  const gocontact = () => {
    navigate("/contacto");
  };
    return (
      <div className="w-full flex flex-col items-center justify-center  font-roboto m-2   ">
      <SoporteService/>
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

export default Soporte;

