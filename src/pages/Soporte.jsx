import { Button } from "antd";
import { Link } from "react-router-dom";


const Soporte = ({ setMessage }) => {


  const changeMessage = () => {
    setMessage("Necesito soporte técnico para resolver algunos problemas en mi sistema. ¿Pueden ayudarme a solucionarlos y proporcionar detalles sobre sus servicios de soporte");
  };
    return (
      <div className="flex flex-col items-center justify-center mt-36 font-roboto">
      <h1 className="text-lg">Soporte</h1>
      <Link to={"/contacto"}>
        <Button
        className="  bg-btm-color hover:bg-primary flex content-center items-center justify-center p-2 w-40 text-white rounded-md hover:bg-primary-blue font-poppins text-md"
        onClick={changeMessage}>Contratar servicio</Button>
      </Link>
    </div>
    );
};

export default Soporte;