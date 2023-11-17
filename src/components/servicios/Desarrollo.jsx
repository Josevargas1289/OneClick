import ReactPlayer from "react-player";

const Desarrollo = () => {
  const vidUrl = "https://www.youtube.com/watch?v=yY2O5AddKos";

  return (
    <div className="mt-28 w-full p-10 m-10 lg:p-20 flex flex-col items-center   ">
      <div className=" mb-16">
        <strong className=" text-4xl text-btm-color text-center">
          Nuestro servicio de desarrollo web
        </strong>
      </div>
      <div>
        <p>
          Nuestro servicio de desarrollo web se distingue por la utilización de
          tecnologías de vanguardia, entre ellas React. Nos especializamos en la
          creación de componentes que no solo potencian la funcionalidad, sino
          que también aseguran una programación escalable y fácilmente
          mantenible. <br /> <br /> A través de nuestra metodología, diseñamos
          componentes modulares que proporcionan flexibilidad extraordinaria y
          establecen una base robusta para el crecimiento futuro. <br />
          <br />
          Nos enorgullece no solo desarrollar sitios web impactantes, sino
          también construir soluciones web que se ajusten a las necesidades
          cambiantes de nuestros clientes con el tiempo. Descubre cómo podemos
          llevar tu presencia en línea al siguiente nivel con nuestro servicio
          de desarrollo web.
        </p>
      </div>
      <div className=" flex items-start  mt-5 lg:w-full">
        <strong className=" text-1xl lg:text-2xl text-btm-color mb-5">
          Descubre más acerca de React💣
        </strong>
      </div>
      <div className=" flex justify-start w-80   lg:w-full">
        <ReactPlayer
          url={vidUrl}
          playing={false}
          volume={0.5}
          controls={true}
        />
      </div>
    </div>
  );
};

export default Desarrollo;
