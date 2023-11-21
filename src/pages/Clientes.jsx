 import nuevoLatir from "../assets/ClienteNl.png" 
import TrabajosCarrusel from "../components/carrusel/Trabajosrecientes";

const Section2Home = () => {
  return (
    <section className=" flex flex-col  p-10 mt-32 w-full  justify-center border-b border-border-color">
      <div className=" flex flex-col lg:flex-row  items-center lg:m-10 gap-20">
        <div className=" w-full   ">
          
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Nuestros clientes</span>
            </h3>
            <p className=" text-justify mt-3 text-md  ">
            Ofrecemos a nuestros clientes la experiencia única de trabajos de calidad. Desde la conceptualización hasta la entrega final
            </p>
          </div>
        </div>
        <div className="  flex justify-center items-center -mt-7">
          <img className=" mb-20 lg:mb-0 w-full lg:w-screen" src={nuevoLatir} alt="" />
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row  items-center lg:m-10 gap-20">
        <div className=" w-full   ">
          
          <div className=" flex flex-col mt-3 m-2">
            <h3 className=" font-poppins font-semibold text-md lg:text-3xl">
              <span className=" text-btm-color">Trabajos recientes</span>
            </h3>
            <p className=" text-justify mt-3 text-md  ">
            Recientemente, tuvimos el privilegio de trabajar en la optimización de la sala de sistemas de nuestro colegio asociado. Nuestro enfoque se centró en maximizar la eficiencia y la funcionalidad, asegurando que cada elemento tecnológico contribuyera al entorno educativo de manera significativa.
            </p>
          </div>
          <div>
            <TrabajosCarrusel/>
          </div>
          <br /><br />
          <hr />
          <div>
            <strong>Experiencia de un cliente feliz 💣💣</strong>
            <br />
            <br />

            <p>La satisfacción del cliente es nuestra mayor recompensa! En este video, <strong>Carlos Londoño</strong> profesor de primaria y usuario de los computadores de la sala restaurada comparte su experiencia con nuestros servicios.</p>
          </div>
          <hr />
          
        </div>
        
      </div>

    </section>
  );
};

export default Section2Home;
