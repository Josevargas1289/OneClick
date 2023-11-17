import "animate.css";
import { useNavigate } from "react-router-dom";
import { AlertOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";


const Mantenimiento = ({ setMessage }) => {
  
  const navigate = useNavigate();
  
  const changeMessage = () => {
    setMessage(
      "Estoy interesado en servicios integrales de mantenimiento para garantizar el rendimiento óptimo de mis sistemas, tanto a nivel de hardware como de software. ¿Pueden proporcionar información detallada sobre sus servicios de mantenimiento, incluyendo la cobertura para hardware y software, así como las tarifas asociadas? "
    );
    gocontact();
  };



  const gocontact = () => {
    navigate("/contacto");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center  font-roboto m-2   ">
      {/* Aqui va el componente mantenimiento */}
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

export default Mantenimiento;


