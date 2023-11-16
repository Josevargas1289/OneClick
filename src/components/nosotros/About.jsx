import about from "../../assets/About.png";
import mision from "../../assets/Mision.png";
import vision from "../../assets/vision.png";
import portafolio from "../../assets/portafolio.png";

import brochure from "../../documents/brochure.pdf"
import { FilePdfOutlined  } from '@ant-design/icons';

const About = () => {
  return (
    <section className=" flex flex-col  p-4 w-full  justify-center border-b border-border-color">
      {/* desarrollo web */}
      <div className=" flex flex-col lg:flex-row  items-center lg:m-10 gap-20">
        <div className=" w-full   ">
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Quienes somos</span>
            </h3>
            <p className=" text-justify mt-3 text-md  ">
              En One Click, somos un grupo de estudiantes de la Institución
              Educativa Nuevo Latir, Sede Isaías Duarte Cancino, que decidimos
              unir fuerzas y crear algo especial. Surgimos como empresa desde un
              proyecto innovador en el que todos participamos activamente
              mientras nos formamos como técnicos en sistemas. <br /> Desde el
              principio, nos destacamos por ofrecer servicios tecnológicos
              completos. Nuestros equipos de trabajo, conformados por
              estudiantes apasionados, se especializan en diferentes áreas,
              desde el mantenimiento de infraestructuras hasta el desarrollo de
              modelos web para hacer el aprendizaje más accesible y divertido.{" "}
              <br />
              <br />
              Colaboramos activamente para mejorar nuestra institución,
              brindando mantenimiento a las instalaciones y apoyando con
              tecnología a profesores y áreas de sistemas que necesitan ayuda.
              También nos enorgullece crear manuales y servicios que promueven
              el cuidado y la eficiencia de los equipos.
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img
            className=" mb-20 lg:mb-0 w-full lg:w-screen"
            src={about}
            alt=""
          />
        </div>
      </div>
      {/* soporte*/}
      <div className=" flex flex-col lg:flex-row justify-center items-center  lg:m-10 gap-20">
        <div className=" w-full m-10 lg:order-1    ">
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Nuestra Misión</span>
            </h3>
            <p className=" text-justify mt-3 text-md ">
              En One Click, nos comprometemos a ser el motor de la excelencia
              tecnológica, proporcionando servicios líderes en mantenimiento,
              soporte y desarrollo web. Nuestra misión es impulsar la evolución
              positiva de empresas y comunidades a través de soluciones
              innovadoras y personalizadas.
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img
            className=" mb-20 lg:mb-0 w-60 lg:w-screen"
            src={mision}
            alt=""
          />
        </div>
      </div>

      {/* mantenimiento */}
      <div className=" flex flex-col lg:flex-row justify-center items-center lg:m-10 gap-20">
        <div className=" w-full m-10  ">
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Nuestra Visión</span>
            </h3>
            <p className=" text-justify mt-3 text-md  ">
              En One Click, visualizamos un horizonte hacia el año 2025 donde
              nos consolidamos como líderes indiscutibles en la excelencia
              tecnológica. Nos proyectamos como el referente destacado en
              servicios de mantenimiento, soporte y desarrollo web, marcando una
              diferencia significativa en la evolución positiva de empresas y
              comunidades. <br /> <br /> Nuestra visión es ser reconocidos como
              innovadores incansables, ofreciendo soluciones tecnológicas
              personalizadas que no solo cumplen, sino que superan las
              expectativas. Nos esforzamos por ser el socio estratégico
              preferido, aportando constantemente al crecimiento y éxito
              sostenible de nuestros clientes.
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img
            className=" mb-20 lg:mb-0 w-full lg:w-screen"
            src={vision}
            alt=""
          />
        </div>
      </div>

      {/* soporte*/}
      <div className=" flex flex-col lg:flex-row justify-center items-center  lg:m-10 gap-20">
        <div className=" w-full m-10 lg:order-1    ">
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">
                Nuestro portafolio de servicios
              </span>
            </h3>
            <p className=" text-justify mt-3 text-md ">
              ¡Descubre el potencial de la excelencia tecnológica! En One Click,
              te invitamos a explorar nuestro portafolio de servicios, donde
              encontrarás soluciones líderes en mantenimiento, soporte y
              desarrollo web.
            </p>
            <a className="text-btm-color mt-4" href={brochure} download>
            <FilePdfOutlined className=" text-red-color " /> Descarga nuestro portafolio de servicios aquí
            </a>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img
            className=" mb-20 lg:mb-0 w-60 lg:w-screen"
            src={portafolio}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
