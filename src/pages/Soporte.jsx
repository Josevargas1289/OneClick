import { Button } from "antd";
import { Link } from "react-router-dom";
import { AlertOutlined } from "@ant-design/icons";


const Soporte = ({ setMessage }) => {


  const changeMessage = () => {
    setMessage("Necesito soporte técnico para resolver algunos problemas en mi sistema. ¿Pueden ayudarme a solucionarlos y proporcionar detalles sobre sus servicios de soporte");
  };
    return (
      <div className="flex flex-col items-center justify-center mt-36 font-roboto m-2   ">
      {/* Aqui va el componente mantenimiento */}
      <div className=" w-full  lg:flex  m-5 p-2 gap-3 items-center shadow-lg h-52 lg:h-20 lg:w-4/5 ">
        <div className="flex items-center gap-2 pt-4 lg:pt-0">
          <AlertOutlined className=" text-4xl" />
          <p>
            {" "}
            Si deseas contratar este servicio no dudes en dar clic, envia tus
            datos y un agente profesional se contactará contigo
          </p>
        </div>
        <div className=" flex justify-end">
        <Link to={"/contacto"}>
        <Button
         className=" mt-14 lg:mt-0 it  bg-btm-color hover:bg-primary flex content-center items-center justify-center p-2 w-40 text-white rounded-md hover:bg-primary-blue font-poppins text-md"
        onClick={changeMessage}>Contratar servicio</Button>
      </Link>
        </div>
      </div>
    </div>
    );
};

export default Soporte;

