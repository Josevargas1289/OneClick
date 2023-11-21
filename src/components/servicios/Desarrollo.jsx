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
        En nuestro servicio de desarrollo web, nos destacamos por la aplicación de tecnologías de vanguardia, siendo React una de nuestras principales herramientas. Nos especializamos en la creación de componentes que no solo potencian la funcionalidad, sino que también aseguran una programación escalable y fácilmente mantenible.
        </p>
        <br />
        <strong>Servicios destacados:</strong>
        <br />
        <br />
        <ol className=" list-disc ml-4">
          <li> Páginas de Aterrizaje Impactantes</li>
          <li>Carritos de Compra Optimizados</li>
          <li>Páginas de Producto Personalizadas</li>
          <li>Soluciones Web Adaptables</li>
        </ol>
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
