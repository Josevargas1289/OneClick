import { Button } from "antd";
import { Link } from "react-router-dom";

const Mantenimiento = ({ setMessage }) => {
  const changeMessage = () => {
    setMessage("Deseo cotizar los servicios de mantenimiento para mi empresa ");
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