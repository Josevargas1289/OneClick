import ReactPlayer from "react-player";

const MantenimientoSrvice = () => {
  const vidUrl = "https://www.youtube.com/watch?v=baooOqvkF-c";

  return (
    <div className="mt-28 w-full p-10 m-10 lg:p-20 flex flex-col items-center   ">
      <div className=" mb-16">
        <strong className=" text-4xl text-btm-color text-center">
          Nuestro servicio de Mantenimiento
        </strong>
      </div>
      <div>
        <p>
        En el ámbito del mantenimiento tecnológico, nos destacamos por la aplicación de enfoques avanzados para asegurar la longevidad y el rendimiento óptimo de tus sistemas. Nuestra especialización se centra en la implementación de prácticas de mantenimiento que no solo preservan la funcionalidad, sino que también aseguran una gestión sostenible y fácilmente actualizable.
        </p>
        <br />
        <strong>Servicios destacados:</strong>
        <br />
        <br />
        <ol className=" list-disc ml-4">
          <li>Actualizaciones</li>
          <li>Optimización de Rendimiento</li>
          <li>Asesoramiento Continuo</li>
        </ol>
      </div>
      <div className=" flex items-start  mt-5 lg:w-full">
        <strong className=" text-1xl lg:text-2xl text-btm-color mb-5">
          Revisa nuestros tips recomendados para la conservacion de tus sistemas💣
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

export default MantenimientoSrvice;
