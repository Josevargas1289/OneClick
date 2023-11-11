import { Button } from "antd";
import { Link } from "react-router-dom";

const Mantenimiento = ({ setMessage }) => {
  const changeMessage = () => {
    setMessage("Estoy interesado en servicios integrales de mantenimiento para garantizar el rendimiento óptimo de mis sistemas, tanto a nivel de hardware como de software. ¿Pueden proporcionar información detallada sobre sus servicios de mantenimiento, incluyendo la cobertura para hardware y software, así como las tarifas asociadas? ");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-36 font-roboto">
      <h1 className="text-lg">Mantenimiento</h1>
      <Link to={"/contacto"}>
        <Button
        className="  bg-btm-color hover:bg-primary flex content-center items-center justify-center p-2 w-40 text-white rounded-md hover:bg-primary-blue font-poppins text-md"
        onClick={changeMessage}>Contratar servicio</Button>
      </Link>
    </div>
  );
};

export default Mantenimiento;