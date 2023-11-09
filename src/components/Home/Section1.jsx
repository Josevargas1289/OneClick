// importaciones
import { useNavigate } from "react-router-dom";
import imgsection1 from "../../assets/imgbannerprincipal.png";
import ModalWeb from "../modales/ModalWeb";
import ModalSoporte from "../modales/ModalSoporte";
import ModalMantenimiento from "../modales/ModalMantenimiento";

const Section1 = () => {
  // codigo js
  const navigate = useNavigate();

  const irContacto = () => {
    navigate("/contacto");
  };

  return (
    // html
    <div className="mt-28 pt-44 p-5 lg:p-20 flex flex-col items-center border-b border-border-color lg:mt-20 xl:mt-20  ">
      <section className=" w-full flex flex-col lg:flex-row xl:flex-row  items-center lg:p-0 xl:p-10 gap-10 ">
        <div className=" flex flex-col gap-4 w-full lg:w-screen ">
          <h1 className=" text-lg lg:text-2xl xl:text-2xl font-bold">
            Expertos en desarrollo{" "}
            <span className=" text-btm-color">
              Web, mantenimiento e infraestructura tecnologíca
            </span>
          </h1>

          <p className=" lg: text-lg">
            Bienvenido a One Click, Tu socio estratégico en desarrollo web y
            mantenimiento de computadores, ofreciendo soluciones creativas y
            personalizadas para destacar en el mundo digital, incluyendo
            servicios especializados en infraestructura tecnologíca.
          </p>

          <button
            onClick={irContacto}
            className=" bg-btm-color hover:bg-primary flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-md"
          >
            Contacto
          </button>
        </div>
        <div>
          <img className="  w-72 lg:w-screen" src={imgsection1} alt="" />
        </div>
      </section>
      <div className=" mt-10 lg:mt-2 w-full  lg:p-10 flex  flex-col lg:justify-center lg:flex-row xl:flex-row  lg:gap-20 xl:gap-20 ">
        <div className=" flex mt-4 lg:mt-14 gap-3">
          <div>
            <ModalWeb />
          </div>
          <div>
            <h3 className=" font-bold">Desarrollo web</h3>
            <p>Soluciones digitales</p>
          </div>
        </div>

        <div className=" flex mt-4 lg:mt-14 gap-3">
          <div>
            <ModalSoporte />
          </div>
          <div>
            <h3 className=" font-bold">Soporte</h3>
            <p>Redirige tus proyectos</p>
          </div>
        </div>

        <div className=" flex mt-4 lg:mt-14 gap-3">
          <div>
            <ModalMantenimiento />
          </div>
          <div>
            <h3 className=" font-bold">Mantenimiento</h3>
            <p>Conserva tu tecnología</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
