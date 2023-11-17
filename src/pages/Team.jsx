import CarruselDesarrollo from "../components/carrusel/Desarrollo_carrusel";
import CarruselMantenimiento from "../components/carrusel/Mantenimiento_carrusel";
import CarruselSoporte from "../components/carrusel/Soporte_carrusel";
import CarruselComunity from "../components/carrusel/comunity_carrusel";

const Team = () => {
  

  return (
    <div className=" mt-32  flex-col lg:m-32  ">
      <div className=" flex flex-col items-center ">
        <h1 className=" text-btm-color text-center font-bold">Nuestro equipo de trabajo</h1>

        <p className="text-justify m-7">
          En el corazón de nuestra empresa, se encuentra un equipo
          extraordinario que va más allá de los límites convencionales. Son los
          arquitectos de soluciones, los magos de la creatividad y los
          guardianes de la innovación sin restricciones <br />
          <br />
          Cada miembro de nuestro equipo es una chispa creativa, un motor de
          inspiración y un pionero incansable. Juntos, no conocemos límites,
          porque creemos que cada desafío es una oportunidad para brillar aún
          más. Desde la estrategia hasta la ejecución, nuestro equipo trabaja en
          armonía, fusionando habilidades únicas para lograr resultados
          asombrosos.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center  gap-20 m-7  ">
        <div className=" shadow-2xl p-2 ">
          <h3 className=" font-bold text-sm text-center">
            Equipo de Desarrollo Web
          </h3>
          <CarruselDesarrollo />
        </div>

        <div className=" shadow-2xl p-2 ">
          <h3 className=" font-bold text-sm text-center">
            Equipo de mantenimiento
          </h3>
          <CarruselMantenimiento />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center  gap-20 m-7  ">
        <div className=" shadow-2xl p-2 ">
          <h3 className=" font-bold text-sm text-center">
            Equipo de Soporte
          </h3>
          <CarruselSoporte />
        </div>

        <div className=" shadow-2xl p-2 ">
          <h3 className=" font-bold text-sm text-center">
            Equipo de Community Manager
          </h3>
          <CarruselComunity />
        </div>
      </div>
    </div>
  );
};

export default Team;
