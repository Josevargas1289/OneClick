
import imgweb from "../../assets/imgweb.png";
import imgsoporte from "../../assets/soporte.png";
import imgmantenimiento from "../../assets/mantenimiento.png";
import { GlobalOutlined, UserOutlined, UsbOutlined } from "@ant-design/icons";

const Section2Home = () => {
  return (
    <section className=" flex flex-col  p-4 w-full  justify-center border-b border-border-color">
      <div className=" mb-10  mt-5 text-center ">
        <h3 className=" font-poppins font-bold text-md lg:text-3xl mb-4">
          Soluciones{" "}
          <span className=" text-btm-color ">tecnologícas integrales</span>{" "}
        </h3>
        <p className="  font-poppins font-light text-sm mb-20">
          Desarrollo web, soporte y mantenimiento de computadores para impulsar
          tu exito empresarial
        </p>
      </div>
      {/* desarrollo web */}
      <div className=" flex flex-col lg:flex-row  items-center lg:m-10 gap-20">
        <div className=" w-full   ">
          <div className=" flex justify-start items-center gap-2 mb-4    ">
            <span className=" p-3 bg-happy-bg rounded-full flex items-center justify-center ">
              <GlobalOutlined className="text-2xl text-white" />
            </span>

            <div className=" flex flex-col gap-2">
              <h3 className=" text-md text-black font-bold">
                Desarrollo de aplicaciones web
              </h3>
              <span className=" text-md text-border-color">
                Profesionales dedicados al desarrollo web
              </span>
            </div>
          </div>
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Diseño responsivo</span>
              {""} adaptado a tus necesidades.
            </h3>
            <p className=" text-justify mt-3 text-md  ">
              Descubre un diseño web responsivo e intuitivo. Nos
              comprometemos a brindarte flujos de usuario excepcionales, gracias
              a nuestra enfoque en definición funcional, arquitectura sólida,
              desarrollo de calidad y código reutilizable.
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img className=" mb-20 lg:mb-0 w-full lg:w-screen" src={imgweb} alt="" />
        </div>
      </div>
      {/* soporte*/}
      <div className=" flex flex-col lg:flex-row justify-center items-center  lg:m-10 gap-20">
        <div className=" w-full m-10 lg:order-1    ">
          <div className=" flex justify-start items-center gap-2 mb-4    ">
            <span className=" p-3 bg-happy-bg1 rounded-full flex items-center justify-center ">
            <UserOutlined className="text-2xl text-white" />
            </span>

            <div className=" flex flex-col gap-2">
              <h3 className=" text-md text-black font-bold">Soporte</h3>
              <span className=" text-md text-border-color">
                Expertos en resolver tus problemas informáticos
              </span>
            </div>
          </div>
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">
                Ajustado a tus requerimientos
              </span>
              {""} y disponible cuando más lo necesitas.
            </h3>
            <p className=" text-justify mt-3 text-md ">
              Experimenta un soporte técnico excepcional, y adaptado a
              tus necesidades informáticas. Nuestro compromiso radica en
              proporcionarte soluciones efectivas, gracias a nuestro enfoque en
              diagnóstico preciso, resolución eficiente, calidad en la
              asistencia y prácticas de mantenimiento sólidas.
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img className=" mb-20 lg:mb-0 w-60 lg:w-screen" src={imgsoporte} alt="" />
        </div>
      </div>

      {/* mantenimiento */}
      <div className=" flex flex-col lg:flex-row justify-center items-center lg:m-10 gap-20">
        <div className=" w-full m-10  ">
          <div className=" flex justify-start items-center gap-2 mb-4   ">
            <span className=" p-3 bg-happy-bg2 rounded-full flex items-center justify-center ">
            <UsbOutlined  className="text-2xl text-white" />
            </span>

            <div className=" flex flex-col gap-2">
              <h3 className=" text-md text-black font-bold">
                Mantenimiento
              </h3>
              <span className=" text-md text-border-color">
              Mantenimiento que preserva <br /> actualización que transforma..
              </span>
            </div>
          </div>
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Preservando la eficiencia</span>
              {""} mantenimiento preventivo para tus computadoras.
            </h3>
            <p className=" text-justify mt-3 text-md  ">
            Descubre el universo del mantenimiento informático con nosotros. Nos comprometemos a proporcionarte estrategias de conservación excepcionales, impulsadas por un soporte técnico eficiente y soluciones adaptadas a tus necesidades
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img className=" mb-20 lg:mb-0 w-full lg:w-screen" src={imgmantenimiento} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section2Home;
