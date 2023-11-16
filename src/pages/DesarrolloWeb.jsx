import { Button } from "antd";
import { Link } from "react-router-dom";
import Desarrollo from "../components/servicios/Desarrollo";
import { AlertOutlined } from "@ant-design/icons";

const DesarrolloSoftware = ({ setMessage }) => {
  const changeMessage = () => {
    setMessage(
      "Estoy interesado en desarrollar un sitio web para mi empresa. ¿Podríamos discutir más detalles y posiblemente obtener una cotización?"
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center  font-roboto m-2   ">
      <Desarrollo />
      <div className=" lg:mr-16 lg:flex  mb-5 p-2 gap-3 items-center shadow-lg h-52 lg:h-20  ">
        <div className="flex items-center gap-2 pt-4 lg:pt-0">
          <AlertOutlined className=" text-4xl text-red-color" />
          <p>
            {" "}
            Si deseas contratar este servicio no dudes en dar clic, envia tus
            datos y un agente profesional se contactará contigo
          </p>
        </div>
        <div className=" flex justify-end">
          <Link to={"/contacto"}>
            <Button
              className=" mt-14 lg:mt-5 it  bg-btm-color hover:bg-primary flex content-center items-center justify-center p-2 w-40 text-white rounded-md hover:bg-primary-blue font-poppins text-md"
              onClick={changeMessage}
            >
              Contratar servicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesarrolloSoftware;
